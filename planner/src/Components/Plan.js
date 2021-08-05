import React, { useState, useEffect } from 'react'
import PlanCard from './PlanCard'
import PlanForm from './PlanForm'
import Search from './Search'

function Plan() {
    const [tasks, setTasks] = useState([])
    const [search, setSearch] = useState("")
    const [showForm, setShowForm] = useState(false)


    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    function handleDeleteTask(id) {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "delete"
        })
        setTasks(() => tasks.filter(delTask => delTask.id !== id))
    }
    function handleAddTask(newTask) {
        setTasks([...tasks, newTask])
    }
    function handleSearch(e) {
        setSearch(e.target.value)
    }
    const taskList = tasks.filter(s => s.task.toLowerCase().includes(search.toLowerCase()))
        .map(t => <PlanCard key={t.id} id={t.id} task={t} onDelete={handleDeleteTask}></PlanCard>)

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "Add New Task"}</button>
            {showForm && <PlanForm onAdd={handleAddTask} />}
            <Search search={search} onSearchChange={handleSearch} />
            {taskList}
        </div>
    )
}

export default Plan
