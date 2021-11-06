const fs = require('fs');
const path = require('path');
const styles = path.join(__dirname, 'styles');

fs.access(path.join(__dirname, 'project-dist', 'bundle.css'), fs.constants.F_OK, (err1) => {
  fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', (error) => {
    if (error) return console.error(error.message);
  });
});

function assembly() {
  fs.readdir(styles, { withFileTypes: true }, function (err, items) {
    if (err) throw err;
    items.forEach(function (item) {
      if (path.parse(item.name).ext == '.css') {
        fs.stat(path.join(__dirname, 'styles', item.name), (err, stats) => {
          if (err) throw err;
          if (stats.isFile()) {
            fs.readFile(path.join(__dirname, 'styles', item.name), (error, data) => {
              if (error) return console.error(error.message);
              fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, (error) => {
                if (error) return console.error(error.message);
              });
            });
          };
        });
      };
    });
  });
};
assembly();