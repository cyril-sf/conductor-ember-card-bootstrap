module.exports = {
  code: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['app/**/*.js'],
      dest: 'tmp/public/conductor-analytics'
    }]
  },

  templates: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'tmp/public/',
      src: ['templates.js'],
      dest: 'tmp/public/conductor-analytics'
    }]
  }
};
