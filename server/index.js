require('dotenv').config();

const express = require('express');
const app = express();

const port = 8000;

app.listen(port, () => {
    console.log("Server is running at localhost://8000");
})