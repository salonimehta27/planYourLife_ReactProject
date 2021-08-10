import React from 'react'
import "./CSS/PlanCard.css"

function PlanCard({ task, onDelete, id }) {
    const currentDate = new Date().toJSON().slice(0, 10);
    // const [dueTask, setDueTask] = useState(utc)
    const yesterdayDate = new Date(Date.now() - 864e5).toJSON().slice(0, 10)
    console.log(yesterdayDate)
    console.log(currentDate)
    // console.log(task.taskDate)
    // console.log(currentDate <= task.taskDate)
    // document.write(utc);
    function handleClass() {
        if (currentDate > task.taskDate) {
            return "three"
        }
        else {
            return "two"
        }
    }
    return (

        <div className="main">
            <div className={handleClass()}>
                <p className="name">Task: {task.task}</p>
                <p className="date">Due Date: {task.taskDate}</p>
                <p className="quote2">Notes: {task.notes} </p>
                <img src={task.img} style={{ height: "50px", width: "50px" }}></img>
                <button onClick={() => onDelete(id)}>Complete Task</button>
            </div>
        </div>
    )
}

export default PlanCard
