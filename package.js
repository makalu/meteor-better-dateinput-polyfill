Package.describe({
  name: 'makalu:better-dateinput-polyfill',
  version: '0.0.1',
  summary: 'better-dateinput-polyfill 1.5.2 by Maksim Chemerisuk, repackaged for Meteor.',
  git: 'https://github.com/makalu/meteor-better-dateinput-polyfill.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles(['better-dom.js', 'better-dateinput-polyfill.js'], 'client');
});