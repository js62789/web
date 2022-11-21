import generateConfig from '@monetaur/config';

const config = generateConfig({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env',
  },
  compress: {
    doc: 'Enable gzip compression.',
    format: 'Boolean',
    default: false,
    env: 'COMPRESS',
    arg: 'compress',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  csr: {
    doc: 'If client should render React.',
    format: 'Boolean',
    default: true,
    env: 'CSR',
  },
  ssr: {
    doc: 'If server should render React.',
    format: 'Boolean',
    default: true,
    env: 'SSR',
  },
});

const env = config.get('env');

config.load(require(`../config/${env}.json`));

export default config;
