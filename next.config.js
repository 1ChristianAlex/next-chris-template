/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require('./package.json');

module.exports = {
  excludeFile: (str) =>
    /\*.{spec,test}.{js,ts,jsx,tsx}|\*.stories.{js,ts,jsx,tsx}/.test(str),
  env: {
    APP_VERSION: packageJson.version,
  },
};
