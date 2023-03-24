// Import Deppendencies
const express = require('express');

export const router = express.Router();

router.get('/getToDo', (req:string,res:any) => res.send('Getting To Do...'));
router.post('/createToDo', (req:any,res:any) => res.send('Creating To Do...'));
router.delete('/delToDo/:id', (req:any, res:any) => res.send(`Deleting To Do With ID:${req.params.id}`));
router.patch('/patchToDo/:id', (req:any, res:any) => res.send(`Updating To Do With ID:${req.params.id}`))