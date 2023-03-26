// Import Deppendencies
const express = require('express');

// Import Controllers
import { getToDo } from "../controller/getToDo";
import { createToDo } from "../controller/createToDo";
import { delToDo } from "../controller/delToDo";

export const router = express.Router();

router.get('/getToDo', getToDo);
router.post('/createToDo', createToDo);
router.delete('/delToDo/:id', delToDo);