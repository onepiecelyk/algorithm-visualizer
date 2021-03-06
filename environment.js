const path = require('path');

const {
  NODE_ENV = 'production',

  HTTP_PORT = '8080',
  PROXY_PORT = '3000',

  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} = process.env;

const __PROD__ = NODE_ENV === 'production';
const __DEV__ = !__PROD__;

const httpPort = parseInt(HTTP_PORT);
const proxyPort = parseInt(PROXY_PORT);

const githubClientId = GITHUB_CLIENT_ID;
const githubClientSecret = GITHUB_CLIENT_SECRET;

const buildPath = path.resolve(__dirname, 'build');
const frontendBuildPath = path.resolve(buildPath, 'frontend');
const backendBuildPath = path.resolve(buildPath, 'backend');

const srcPath = path.resolve(__dirname, 'src');
const frontendSrcPath = path.resolve(srcPath, 'frontend');
const backendSrcPath = path.resolve(srcPath, 'backend');

const apiEndpoint = '/api';

module.exports = {
  __PROD__,
  __DEV__,
  httpPort,
  proxyPort,
  githubClientId,
  githubClientSecret,
  frontendBuildPath,
  backendBuildPath,
  frontendSrcPath,
  backendSrcPath,
  apiEndpoint,
};