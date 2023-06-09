module.exports = {
  extends: [
    '@meludi/eslint-config-base',

    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@meludi/eslint-config-prettier/base',
  ],

  root: true,

  // Adjust it to your project
  env: {
    es6: true,
    node: true,
  },
};
