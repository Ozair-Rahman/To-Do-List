import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    ToDo: String
});

export const ToDoModel = mongoose.model('ToDo',ToDoSchema);