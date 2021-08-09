import React from 'react'
import "./CSS/PlanCard.css"

function PlanCard({ task, onDelete, id }) {
    return (
        <div className="main">
            <div style={{ width: "210px" }}>
                <div className="two">
                    <p className="name">Task: {task.task}</p>
                    <p className="date">Due Date: {task.taskDate}</p>
                    <p className="quote2">Notes: {task.notes} </p>
                    <img src={task.img} style={{ height: "50px", width: "50px" }}></img>
                    <button onClick={() => onDelete(id)}>Delete Task</button>
                </div>
            </div>
        </div>
    )
}

export default PlanCard
