import { useState } from "react"
import { ITask } from "../interface/Task.interface"
import TaskContext from "./TaskContext"

interface Props {
   children: JSX.Element | JSX.Element[]
}

const initialValue: ITask = {
   id: 0,
   title: '',
}

export const TaskProvider = ({children}: Props) => {

   const [task, setTask] = useState<ITask>(initialValue)
   const [form, setForm] = useState<ITask>(initialValue)
   const [listTask, setListTask] = useState<ITask[]>([])

   const selectedNote = (task: ITask) => {
      setTask(task)
   }

   const handleChangeForm = (e: React.FormEvent<HTMLInputElement>)  => {
      const {name, value} = e.currentTarget

      setForm({
         ...form,
         [name]: value
      })
   }

   const resetValue = () => {
      setForm(initialValue)
   }

   const handleSubmit = (closeModal: Function) => {
      const id = listTask.length + 1
      form.id = id
      setListTask([...listTask, form])
      setForm(initialValue)
      closeModal()
   }

   const data = {task, form, listTask, selectedNote, handleChangeForm, handleSubmit, resetValue}

   return (
      <TaskContext.Provider value={data}>
         {children}
      </TaskContext.Provider>
   )
}