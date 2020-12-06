const fse = require("fs-extra")

const isFileChanged = (src, dest) => {
  return (
    !fse.pathExistsSync(dest) ||
    (Math.round(fse.statSync(src).mtimeMs),
    Math.round(fse.statSync(dest).mtimeMs),
    Math.round(fse.statSync(src).mtimeMs) !==
      Math.round(fse.statSync(dest).mtimeMs))
  )
}

// copy if changed

const copy = (src, dest) => {
  fse.copySync(src, dest, { preserveTimestamps: true, filter: isFileChanged })
}

// home page
copy("src/index.html", "dist/index.html")

// css
copy("src/styles/", "dist/")

// images
copy("images/", "dist/images/")
