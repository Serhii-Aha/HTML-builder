const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, function (err, items) {
  if (err) throw err;
  items.forEach((item) => {
    let name = path.parse(item.name).name;
    let ext = path.parse(item.name).ext.split('').slice(1).join('');
    fs.stat(path.join(__dirname, 'secret-folder', item.name), (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log(`${name} - ${ext} - ${stats.size}bytes`);
      }
    });
  });
});