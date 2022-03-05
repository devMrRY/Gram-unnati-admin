const dev = {
  api: {
    HOST: 'https://gramunnati.azurewebsites.net',
    VERSION: '/v1/api/'
  },
  auth: {
    GRANT_TYPE: 'password',
    CLIENT_ID: 'client_admin',
    CLIENT_SECRET: 'client_secret'
  }
};

const prod = {
  api: {
    HOST: 'https://gramunnati.azurewebsites.net',
    VERSION: '/v1/api/'
  },
  auth: {
    GRANT_TYPE: 'password',
    CLIENT_ID: 'client_admin',
    CLIENT_SECRET: 'client_secret'
  }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

const WEB_BASE_URL = process.env.REACT_APP_STAGE === 'production' ? 'https://gramunnati.azurewebsites.net' : 'https://gramunnati.azurewebsites.net'

export default {
  // Add common config values here
  APP_NAME: 'gram-unnati',
  MAX_ATTACHMENT_SIZE: 5000000,
  WEB_BASE_URL,
  ...config
};
