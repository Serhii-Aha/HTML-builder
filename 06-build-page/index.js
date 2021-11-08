const fs = require('fs');
const path = require('path');
const components = path.join(__dirname, 'components');
const projectDist = path.join(__dirname, 'project-dist');
const assets = path.join(__dirname, 'assets');

  function initAssets() {
    fs.mkdir(path.join(__dirname, 'project-dist', 'assets'), { recursive: true }, (error) => {
      if (error) return console.error(error.message);
      copy();
    });
  }
  function initHtml() {
    fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), '', (error) => {
      if (error) return console.error(error.message);
    });
  }
  function initCss() {
    fs.writeFile(path.join(__dirname, 'project-dist', 'style.css'), '', (error) => {
      if (error) return console.error(error.message);
    });
  }