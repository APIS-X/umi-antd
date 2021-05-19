import {defineConfig} from 'umi';

import {resolve} from 'path';

import routes from './src/routes';
import settings from './src/settings';

const {title} = settings;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes,
  title,
  alias: {
    '@mock': resolve(__dirname, 'mock'),
  },
});
