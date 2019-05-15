const { INDEX_PATH } = require('../util/path/path');

const RootController = (req, res, next) => {
    res
        .status(200)
        .sendFile(INDEX_PATH);
}

module.exports = {
    RootController
}