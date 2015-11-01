Package.describe({
  name: 'peerlibrary:meteor-file',
  summary: "Simple file uploading for Meteor",
  version: '0.2.1',
  git: 'https://github.com/peerlibrary/meteor-file.git',
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');

  // Core dependencies.
  api.use([
    'underscore',
    'ejson'
  ]);

  api.export('MeteorFile');

  api.addFiles([
    'meteor-file.js'
  ]);
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'test-helpers'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:meteor-file'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:blob@0.1.2'
  ]);

  api.addFiles([
    'meteor-file-test.js'
  ]);
});
