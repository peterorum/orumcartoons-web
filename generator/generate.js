const fs = require('fs');

// home page
fs.copyFileSync('src/index.html', 'dist/index.html');

// css
fs.copyFileSync('src/styles/default.css', 'dist/default.css');