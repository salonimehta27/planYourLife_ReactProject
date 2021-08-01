

function CalendarDisplay({ onPlanSubmit, eventValue, handleChange }) {
    // const date = new Date().toLocaleDateString()
    return (
        <div>
            <form onSubmit={onPlanSubmit}>
                <input type="text" value={eventValue} onChange={(e) => handleChange(e.target.value)} placeholder="add your plans for today"></input>
                <button>submit the plan</button>
            </form>
        </div>
    )
}

export default CalendarDisplay
