require('dotenv').config();
const express = require('express')
const mongoose = require("mongoose");
const PORT = process.env.PORT;

const app = express();

app.get('/', (req:any, res:any) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Running on PORT:${PORT}`));