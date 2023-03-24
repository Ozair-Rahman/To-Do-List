// Import Deppendencies
const express = require('express');

// Import Controllers
import { getToDo } from "../controller/getToDo";
import { createToDo } from "../controller/createToDo";
import { delToDo } from "../controller/delToDo";
import { patchToDo } from "../controller/patchToDo";

export const router = express.Router();

router.get('/getToDo', getToDo);
router.post('/createToDo', createToDo);
router.delete('/delToDo/:id', delToDo);
router.patch('/patchToDo/:id', patchToDo)