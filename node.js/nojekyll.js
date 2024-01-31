const fs = require("fs")

// Директории
if (!fs.existsSync("./out")) {
  fs.mkdirSync("./out")
}

// Файлы
try {
  fs.writeFileSync("./out/.nojekyll", "")
  console.log('File ".nojekyll" written successfully')
} catch (err) {
  console.error(err)
}
