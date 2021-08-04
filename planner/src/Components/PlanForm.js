import React, { useState } from 'react'
import { FaTasks } from "react-icons/fa"
import "./CSS/PlanForm.css"

function PlanForm({ onAdd }) {

    // const [taskDate, setTaskDate] = useState("yyyy-mm-dd")
    // const [task, setTask] = useState = ("")
    // const [img, setImg] = useState("")
    // const [notes, setNotes] = useState("")

    const [formData, setFormData] = useState({
        task: "",
        taskDate: "mm-dd-yyyy",
        img: "",
        notes: ""
    })

    const formObject = {
        task: formData.task,
        taskDate: formData.taskDate,
        img: formData.img,
        notes: formData.notes
    }
    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    function formSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/tasks", {
            method: "Post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formObject)
        }).then(resp => resp.json())
            .then(newTask => onAdd(newTask))
        e.target.reset()
        setFormData({
            taskDate: "mm-dd-yyyy"
        })

    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="task">Task <FaTasks /> :</label>
                <input type="text" name="task" placeholder='Enter your Task' onChange={handleOnChange}></input>
                <label htmlFor="taskDate">Task date: </label>

                <input type="date" id="taskDate" name="taskDate"
                    value={formData.taskDate}
                    min="2021-01-01" max="2021-12-31" onChange={handleOnChange}></input>
                <label htmlFor="img">Image: </label>
                <input name="img" id="img" type="url" placeholder="Add an Image Url" onChange={handleOnChange}></input>
                <label htmlFor="notes">Add Notes :</label>
                <textarea id="notes" name="notes" cols="50" rows="5" onChange={handleOnChange}></textarea>
                <button>Submit Task</button>
            </form>
        </div>
    )
}

export default PlanForm
