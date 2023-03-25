import { ToDoModel } from "../Schema/Schema"

export const delToDo = async (req:any, res:any) => {
    try {
        await ToDoModel.findByIdAndDelete(req.params.id);
        await res.status(200).send('Sucessfully Deleted To Do');
    }
    catch (e) {
        await res.status(500).send(e);
    }
}