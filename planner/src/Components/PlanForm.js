import React, { useState } from 'react'
import "./CSS/PlanForm.css"

function PlanForm() {

    return (
        <div>
            <form>
                <label htmlFor="task">Task: </label>
                <input type="text" name="task" placeholder="Enter your Task"></input>
                <label htmlFor="taskDate">Task date: </label>

                <input type="date" id="taskDate" name="taskDate"
                    value="0000-00-00"
                    min="2021-01-01" max="2021-12-31" ></input>
                <label htmlFor="gratitude">Gratitude : </label>
                <input name="gratitude" id="gratitude" type="text" placeholder="Add Gratitude"></input>
                <label htmlFor="paragraph_text">Add Notes</label>
                <textarea id="paragraph_text" name="paragraph_text" cols="50" rows="5"></textarea>
            </form>
        </div>
    )
}

export default PlanForm
