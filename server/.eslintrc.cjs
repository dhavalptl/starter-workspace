module.exports = {
  extends: ['common-lint'],
  "parserOptions": {
      tsconfigRootDir:  __dirname,
      project: "./tsconfig.json"
  }
};
