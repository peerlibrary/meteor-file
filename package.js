Package.describe({
  summary: "Simple file uploading for Meteor",
  version: '0.0.7',
  git: 'https://github.com/EventedMind/meteor-file.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['underscore', 'ejson'], ['client', 'server']);
  api.use(['templating', 'spacebars', 'ui'], 'client');
  api.add_files(['meteor-file.js'], ['client', 'server']);
  api.add_files(['meteor-file-uploader.html', 'meteor-file-uploader.js'], 'client');

  if (typeof api.export !== 'undefined') {
    api.export('MeteorFile', ['client', 'server']);
  }
});

Package.on_test(function (api) {
  api.use(['meteor-file', 'tinytest', 'test-helpers', 'peerlibrary:blob@0.1.2']);
  api.add_files('meteor-file-test.js', ['client', 'server']);
});
