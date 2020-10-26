const http = require("http");
const path = require("path");
const fs = require("fs");
const zipFolder = require("zip-folder");

const PORT = process.env.PORT || 3003;
const file = path.join(__dirname, "pictures");
const endFile = path.join(__dirname, "result", "pic.zip");

async function start() {
  
  await zipFolder(file, endFile, err => {
    if (err) {
      console.log('This is an error: ', err)    
    } else {
      console.log('It is work!')
    }
  })
}

start()

fs.readFile(endFile, (err, data) => {
  if (err) {
    console.log('Error: ', err)
  } else {
    return data
  }
})

const server = http.createServer((req, res) => {
  res.end(data)
})

server.listen(PORT, () => console.log('Server has been loaded...'))