module.exports = {
  main: {
    src: ['tmp/public/conductor-analytics/**/*.js', 'lib/card.js'],
    dest: 'dist/card.js'
  },

  tests: {
    src: ['test/tests/**/*.js'],
    dest: 'tmp/public/test/card_test.js'
  }
};
