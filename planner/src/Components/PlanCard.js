import React from "react"
import "./CSS/PlanCard.css"

function PlanCard({ task, onDelete, id }) {
	const currentDate = new Date().toJSON().slice(0, 10)

	return (
		<div className="main">
			<div className={currentDate > task.taskDate ? "three" : "two"}>
				<p className="name">Task: {task.task}</p>
				<p className="date">Due Date: {task.taskDate}</p>
				<p className="quote2">Notes: {task.notes} </p>
				<img
					src={task.img}
					alt="sticker"
					style={{ height: "50px", width: "50px" }}
				></img>
				<button onClick={() => onDelete(id)}>Complete Task</button>
			</div>
		</div>
	)
}

export default PlanCard
