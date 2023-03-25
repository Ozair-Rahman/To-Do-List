import { ToDoModel } from "../Schema/Schema";

export const patchToDo = async (req:any, res:any) => {
    try {
        await ToDoModel.findByIdAndUpdate(req.params.id, req.body);
        await res.status(200).json(req.body);
    }
    catch(e) {
        await res.status(500).send(e);
    }
}