import React, { useState, useEffect } from 'react'
import PlanCard from './PlanCard'
import PlanForm from './PlanForm'
import Search from './Search'

function Plan() {
    const [tasks, setTasks] = useState([])
    const [search, setSearch] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [sort, setSort] = useState(false)


    useEffect(() => {
        fetch("https://plan-your-magic.herokuapp.com/tasks")
            .then(res => res.json())
            .then(data => {
                setTasks(data)
                console.log(data)
            })
    }, [])

    function handleDeleteTask(id) {
        fetch(`https://plan-your-magic.herokuapp.com/tasks/${id}`, {
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
    const sortByDate = [...tasks].sort((a, b) => {
        a = a.taskDate.split("/").reverse().join("");
        b = b.taskDate.split("/").reverse().join("");
        return a > b ? 1 : a < b ? -1 : 0
    })
    console.log(sortByDate)
    function handleSort() {
        if (sort === true) {
            return sortByDate.filter(s => s.task.toLowerCase().includes(search.toLowerCase()))
        }
        else {
            return tasks.filter(s => s.task.toLowerCase().includes(search.toLowerCase()))
        }
    }
    const taskList = handleSort()
        .map(t => <PlanCard key={t.id} id={t.id} task={t} onDelete={handleDeleteTask}></PlanCard>)

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Add Task" : "Add New Task"}</button>
            <br></br>
            {showForm && <PlanForm onAdd={handleAddTask} />}
            <br></br>
            <Search search={search} onSearchChange={handleSearch} />
            <label htmlFor="" className="center">Sort By Date</label>
            <input type="checkbox" name="sort" value="false" checked={sort} onChange={() => setSort(() => !sort)}></input>
            <div className="scroll" style={{ position: "absolute" }}>
                {taskList}
            </div>
        </div>
    )
}

export default Plan
