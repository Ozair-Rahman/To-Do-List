require('dotenv').config();
const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = process.env.PORT;

import {router} from './routes/routes';

const app = express();

// Middleware
app.use(router);
app.use(cors());

app.listen(PORT, () => console.log(`Running on PORT:${PORT}`));