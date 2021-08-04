import React, { useState, useEffect } from 'react'
import PlanCard from './PlanCard'
import PlanForm from './PlanForm'

function Plan() {
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    function handleDeleteTask(id) {
        fetch(`http://localhost:3000/tasks${id}`, {
            method: "delete"
        })
        setTasks(() => tasks.filter(delTask => delTask.id !== id))
    }
    function handleAddTask(newTask) {
        setTasks([...tasks, newTask])
    }
    const taskList = tasks.map(t => <PlanCard key={t.id} id={t.id} task={t} onDelete={handleDeleteTask}></PlanCard>)

    return (
        <div>
            <PlanForm onAdd={handleAddTask} />
            {taskList}
        </div>
    )
}

export default Plan
