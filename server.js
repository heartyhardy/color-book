const express = require('express');
const bparser = require('body-parser');

// GET PATHS
const { BUILD_PATH } = require('./util/path/path');

// GET ROUTES
const root_route = require('./routes/root-route');

// GET DB CONNECTION
const db = require('./util/db/mongo-connect');

const DEV_PORT = 5000;
const PORT = process.env.PORT || DEV_PORT;

const app = express();

// CONFIG SERVER
app.use(express.static(BUILD_PATH));
app.use(bparser.json());

// SET ROUTES
app.use(root_route.router);

// CONNECT TO DB AND START SERVER
(async () => {
    try {
        const res = await db.connect();

        app.listen(PORT, () =>
            console.log(`color-book server running on PORT:${PORT}`)
        );

    } catch (e) {
        console.log("Error occured while connecting to datasource. Server not started.");
    }

})();