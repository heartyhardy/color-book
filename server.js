const express = require('express');
const bparser = require('body-parser');

// GET PATHS
const { BUILD_PATH } = require('./util/path/path');

// GET ROUTES
const root_route = require('./routes/root-route');

const DEV_PORT = 5000;
const PORT = process.env.PORT || DEV_PORT;

const app = express();

// CONFIG SERVER
app.use(express.static(BUILD_PATH));
app.use(bparser.json());

// SET ROUTES
app.use(root_route.router);

app.listen(PORT, () =>
    console.log(`color-book server running on PORT:${PORT}`)
)