const express = require('express');
const bparser = require('body-parser');

const { BUILD_PATH } = require('./util/path/path');

const DEV_PORT = 5000;
const PORT = process.env.PORT || DEV_PORT;

const app = express();

app.use(express.static(BUILD_PATH));
app.use(bparser.json());

app.listen(PORT, () =>
    console.log(`color-book server running on PORT:${PORT}`)
)