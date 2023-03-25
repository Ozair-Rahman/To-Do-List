// Import Dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const PORT = process.env.PORT;

import {router} from './routes/routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);

// Connect to MongoDB Database
mongoose.connect(`${process.env.MONGOOSE_API_KEY}`);

app.listen(PORT, () => console.log(`Running on PORT:${PORT}`));