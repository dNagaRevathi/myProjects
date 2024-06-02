import { table } from "console";
import './Todo.css'
import React, { useState } from "react";

interface Task {
    taskname: string
}
enum ComponentState {
    CREATION,
    EDIT
}
const Todo: React.FC = (): JSX.Element => {
    const [task, setTask] = useState<Task>({ taskname: '' })
    const [tasks, setTasks] = useState<Task[]>([])
    const [componentState, setComponentState] = useState<ComponentState>(ComponentState.CREATION)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const handleSubmit = () => {
        if (componentState === ComponentState.CREATION) {
            setTasks([...tasks, task])

        }
        else {
            tasks.splice(currentIndex, 1, task)
            setTasks([...tasks])
        }
        setTask({ taskname: '' })
        setComponentState(ComponentState.CREATION)
    }
    const handleDelete = (index: number) => {
        tasks.splice(index, 1)
        setTasks([...tasks])
    }
    const handleEdit = (index: number) => {
        //tasks.shift
        setTask({ ...tasks[index] })
        setComponentState(ComponentState.EDIT)
        setCurrentIndex(index)
    }
    return (
        <div className="con1">

            <div className="con2">
                <input type="text" placeholder="Add Task" value={task.taskname} onChange={(e) => { setTask({ ...task, taskname: e.target.value }) }} />

                <button onClick={handleSubmit}>Add Task</button>

                {tasks.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Tasks</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.taskname}</td>
                                        <td><button onClick={() => { handleEdit(index) }}>Edit</button></td>
                                        <td><button onClick={() => { handleDelete(index) }}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (<h2>No Tasks Found</h2>)}
            </div>

        </div>
    )
}
export default Todo