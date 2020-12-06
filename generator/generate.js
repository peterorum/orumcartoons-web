const fse = require('fs-extra')
const { cartoons } = require('../data/cartoons.js')

const isFileChanged = (src, dest) => {
  return (
    !fse.pathExistsSync(dest) ||
    Math.round(fse.statSync(src).mtimeMs) !==
      Math.round(fse.statSync(dest).mtimeMs)
  )
}

// copy if changed
function copy(src, dest) {
  fse.copySync(src, dest, { preserveTimestamps: true, filter: isFileChanged })
}

// css
copy('src/styles/', 'dist/styles')

// images
copy('images/', 'dist/images/')
copy('src/favicon.png', 'dist/favicon.png')

// process home page

if (isFileChanged('src/index.html', 'dist/index.html')) {
  let html = fse.readFileSync('src/index.html', 'utf-8')

  html = html.replace(/{ latest-cartoon }/gi, cartoons[0].title)

  fse.writeFileSync('dist/index.html', html)
}
