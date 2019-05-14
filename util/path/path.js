const path = require('path');

const _root_ = process.mainModule.filename;
const BUILD_PATH = path.join(_root_, 'build');
const INDEX_PATH = path.join(_root_, 'build', 'index.html');

module.exports = {
    _root_,
    BUILD_PATH,
    INDEX_PATH
}