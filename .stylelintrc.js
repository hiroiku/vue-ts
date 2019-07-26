module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    './node_modules/prettier-stylelint/config.js',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  syntax: 'scss',
  rules: {
    'string-quotes': 'single',
  },
  root: true,
};
