const util = require('util');
const fs = require('fs');
const { v4: uuid4 } = require('uuid');
const { parse } = require('path');

//Convert fs.readFile and fs.writeFile from callback-based functions to promised-based
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("db/db.json", "utf-8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
};