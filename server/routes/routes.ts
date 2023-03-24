const express = require('express');

export const router = express.Router();

router.get('/createToDo', (req:any,res:any) => res.send('Creating To Do...'));
