const fse = require("fs-extra")

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

// home page
copy("src/index.html", "dist/index.html")
copy("src/favicon.png", "dist/favicon.png")

// css
copy("src/styles/", "dist/styles")

// images
copy("images/", "dist/images/")
