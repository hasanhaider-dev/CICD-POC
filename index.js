
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Pushing this");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});