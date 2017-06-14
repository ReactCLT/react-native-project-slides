const ghpages = require('gh-pages');

ghpages.publish(__dirname, {
  src: [
    'index.html',
    'dist/**'
  ]
});