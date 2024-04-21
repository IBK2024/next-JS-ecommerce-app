module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feature', 'bug-fix', 'style', 'performance', 'lint', 'update']],
  },
};
