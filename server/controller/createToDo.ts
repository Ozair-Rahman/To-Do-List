import { ToDoModel } from "../Schema/Schema";

export const createToDo = async (req:any, res:any) => {
    try {
        await ToDoModel.create(req.body);
        await res.status(200).json(req.body);
    }
    catch (e) {
        await res.status(500).json(e)
    }
    
}