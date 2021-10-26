const addAttributesToPath = require('./addAttributesToPath.js');

module.exports = {
    multipass: true,
    plugins: [
        addAttributesToPath,
      ],
  };