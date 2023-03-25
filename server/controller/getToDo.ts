import { ToDoModel } from "../Schema/Schema";

export const getToDo = async (req:any, res:any) => {
    try {
        res.json(await ToDoModel.find({}));
    }
    catch(e) {
        await res.status(500).json(e)
    }
};