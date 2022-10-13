import React, { useState } from "react";


const useTask = ()=> {
    const [tasks,setTasks] = useState(["programar app to do"])
    const [addNew, setAddNew] =useState (false)
    const [task, setTask] =useState (["to do app"])

    const addTask = () => {
      
       
        setTasks(currentTasks => [...currentTasks, task])
       
        setTask("")
      
        setAddNew(false)
    }
    const deleteTask =(index) =>{
        let temp = [...tasks]
        temp.splice(index,1)
        setTasks(temp)
    }
    const updateadd=(state) =>{
        setAddNew(state)
    }
    const editTask=(text)=> {
        setTask(text)
    }
    return{
        updateadd,
        addTask,
        editTask,
        deleteTask,
        task,
        tasks,
        addNew,
    }
}
export default useTask