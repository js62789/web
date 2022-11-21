const NATIVE_FORMATS = {
  Object: Object,
  Array: Array,
  String: String,
  Number: Number,
  Boolean: Boolean,
  RegExp: RegExp,
};

const isPort = (x) => Number.isInteger(x) && x >= 0 && x <= 65535;

const CUSTOM_FORMATS = {
  port: (x) => isPort(x),
};

function isSchemaItem(obj) {
  return typeof obj.default !== 'undefined';
}

function buildStore(schema) {
  const convertConfigEntryToStore = ([k, v]) => {
    if (isSchemaItem(v)) {
      return { [k]: process.env[v.env] || v.default };
    } else {
      if (typeof v === 'object') {
        return { [k]: buildStore(v) };
      } else {
        throw new Error(`Invalid schema value for ${k}`);
      }
    }
  };
  const merge = (all, one) => ({ ...all, ...one });
  return Object.entries(schema).map(convertConfigEntryToStore).reduce(merge, {});
}

function getValueWithDotNotation(obj, key) {
  const parts = key.split('.');
  let pointer = obj;

  while (parts.length) {
    pointer = pointer[parts.shift()];
  }

  return pointer;
}

function validate(schemaItem, value) {
  const { format } = schemaItem;

  if (Object.keys(NATIVE_FORMATS).includes(format) && NATIVE_FORMATS[format](value) !== value) {
    throw new Error(`${value} is not of type ${format}`);
  } else if (Array.isArray(format) && !format.includes(value)) {
    throw new Error(`${value} is not one of the acceptable values: ${format.join(', ')}`);
  } else if (Object.keys(CUSTOM_FORMATS).includes(format) && !CUSTOM_FORMATS[format](value)) {
    throw new Error('ports must be within range 0 - 65535');
  }
}

function setValueWithDotNotation(obj, key, value) {
  const parts = key.split('.');
  let pointer = obj;

  while (parts.length) {
    if (parts.length === 1) {
      pointer[parts.shift()] = value;
    } else {
      pointer = pointer[parts.shift()];
    }
  }
}

export default function generate(schema = {}) {
  const store = buildStore(schema);

  function get(name) {
    return getValueWithDotNotation(store, name);
  }

  function set(name, value) {
    validate(getValueWithDotNotation(schema, name), value);
    setValueWithDotNotation(store, name, value);
  }

  function load(overlay) {
    Object.entries(overlay).forEach(([k, v]) => {
      const entryConfig = getValueWithDotNotation(schema, k);
      if (isSchemaItem(entryConfig)) {
        // Don't override env variable
        if (!process.env[entryConfig.env]) {
          setValueWithDotNotation(store, k, v);
        }
      } else {
        Object.entries(v).forEach(([nestedK, nestedV]) => {
          load({
            [`${k}.${nestedK}`]: nestedV,
          });
        });
      }
    });
  }

  return {
    get,
    load,
    set,
  };
}
