import generate from '../src/index';

function setEnv(key, value) {
  const originalValue = process.env[key];
  process.env[key] = value;
  return () => {
    process.env[key] = originalValue;
  };
}

describe('generate', () => {
  test('should require a default', () => {
    expect(() => generate({
      mode: {
        format: ['development', 'production'],
      },
    })).toThrowError();
  });

  test('should apply defaults', () => {
    const config = generate({
      mode: {
        default: 'a',
      },
    });

    expect(config.get('mode')).toBe('a');
  });

  test('should set values', () => {
    const config = generate({
      mode: {
        default: 'a',
      },
    });

    config.set('mode', 'b');

    expect(config.get('mode')).toBe('b');
  });

  test('should load config over defaults', () => {
    const config = generate({
      control: {
        default: '1',
      },
      mode: {
        default: 'a',
      },
    });

    config.load({
      mode: 'b',
    });

    expect(config.get('control')).toBe('1');
    expect(config.get('mode')).toBe('b');
  });

  test('should allow nested values', () => {
    const config = generate({
      db: {
        host: {
          default: 'db.example.org',
        },
      },
    });

    expect(config.get('db').host).toBe('db.example.org');
  });

  test('should load nested values', () => {
    const config = generate({
      db: {
        host: {
          default: 'db.example.org',
        },
      },
    });

    config.load({
      db: {
        host: 'db.somethingelse.com',
      },
    });

    expect(config.get('db').host).toBe('db.somethingelse.com');
  });

  test('should get values with dot-notation', () => {
    const config = generate({
      db: {
        host: {
          default: 'db.example.org',
        },
      },
    });

    expect(config.get('db.host')).toBe('db.example.org');
  });

  test('should set values with dot-notation', () => {
    const config = generate({
      db: {
        host: {
          default: 'db.example.org',
        },
      },
    });

    config.set('db.host', 'db.somethingelse.com');

    expect(config.get('db.host')).toBe('db.somethingelse.com');
  });

  test('should throw if not given a proper native format', () => {
    const config = generate({
      log: {
        default: true,
        format: 'Boolean',
      },
    });

    expect(() => config.set('log', 'false')).toThrowError();
    expect(() => config.set('log', false)).not.toThrowError();
  });

  test('should throw if not given a proper custom format', () => {
    const config = generate({
      port: {
        default: 3000,
        format: 'port',
      },
    });

    expect(() => config.set('port', 65536)).toThrowError();
    expect(() => config.set('port', 65535)).not.toThrowError();
  });

  test('should throw if not given an acceptable value', () => {
    const config = generate({
      mode: {
        default: 'development',
        format: ['development', 'production'],
      },
    });

    expect(() => config.set('mode', 'staging')).toThrowError();
    expect(() => config.set('mode', 'production')).not.toThrowError();
  });

  test('should prioritize environment variables over defaults', () => {
    const restoreEnv = setEnv('NODE_ENV', 'production');

    const config = generate({
      mode: {
        default: 'development',
        env: 'NODE_ENV',
      },
    });

    expect(config.get('mode')).toBe('production');

    restoreEnv();
  });

  test('should prioritize environment variables over loaded values', () => {
    const restoreEnv = setEnv('NODE_ENV', 'production');

    const config = generate({
      mode: {
        default: 'development',
        env: 'NODE_ENV',
      },
    });

    config.load({
      mode: 'development',
    });

    expect(config.get('mode')).toBe('production');

    restoreEnv();
  });

  test('should not prioritize environment variables over set values', () => {
    const restoreEnv = setEnv('NODE_ENV', 'production');

    const config = generate({
      mode: {
        default: 'development',
        env: 'NODE_ENV',
      },
    });

    config.set('mode', 'production');

    expect(config.get('mode')).toBe('production');

    restoreEnv();
  });
});
