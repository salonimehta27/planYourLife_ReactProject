import React from "react"
import "./CSS/App.css"

function CalendarCard({ setDisplayCalendar, displayCalendar, url, id }) {
	function handleDeleteCalendar(id) {
		fetch(`https://plan-your-magic.herokuapp.com/calendar/${id}`, {
			method: "delete",
		})
		setDisplayCalendar(() => displayCalendar.filter((c) => c.id !== id))
	}
	return (
		<div>
			<div className="container">
				<iframe
					src={url}
					title="calendar"
					className="responsive-iframe"
					style={{ scrolling: "no" }}
				></iframe>
			</div>
			<button
				style={{ height: "32px" }}
				onClick={() => handleDeleteCalendar(id)}
			>
				Delete Calendar
			</button>
			<br></br>
		</div>
	)
}

export default CalendarCard
