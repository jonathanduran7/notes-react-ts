import { createContext } from "react";
import { ITask } from "../interface/Task.interface";


interface TaskState {
   task: ITask,
   form: ITask,
   listTask: ITask[],
   handleChangeForm: Function,
   handleSubmit: Function,
   resetValue: Function
}

const TaskContext = createContext({} as TaskState)

export default TaskContext