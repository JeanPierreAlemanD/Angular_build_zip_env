const {zip} = require('zip-a-folder')
const fs = require('fs')
const distPath = './dist'
const existDist = existFolder(distPath)

function existFolder(path) {
  return fs.existsSync(path)
}

function custonZip(filePath) {
  const zipFilePath = `${filePath}.zip`
  return zip(filePath, zipFilePath).then(() => {
    console.log('Se creo correctamente el archivo', zipFilePath)
  })
}

function zipAll(env) {
  console.log('environment -->', env)
  if (existDist) {
    const envPath = `${distPath}/${env}`
    switch (env) {
      case 'dev':
        custonZip(envPath)
        break
      case 'qa':
        custonZip(envPath)
        break
      case 'prod':
        custonZip(envPath)
        break
      default:
        console.log('No se encontro environment')
        break
    }
  }
}

function getEnvironment() {
  return process.argv[2] ? process.argv[2].split('=')[1] : ''
}

zipAll(getEnvironment())



