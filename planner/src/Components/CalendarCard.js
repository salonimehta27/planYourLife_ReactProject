import React, { useState } from 'react'
function CalendarCard({ setDisplayCalendar, displayCalendar, url }) {
    const [googleCalendar, setGoogleCalendar] = useState("")

    function handleAddCalendar(e) {
        e.preventDefault()
        fetch(`https://plan-your-magic.herokuapp.com/calendar`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "url": googleCalendar
            })
        })
            .then(res => res.json())
            .then(data => {
                setDisplayCalendar([...displayCalendar, data])
                //console.log(data)
            })
        setGoogleCalendar("")
    }
    return (
        <div>
            <form onSubmit={handleAddCalendar}>
                <input type="url" placeholder="Enter Url of your Google Calendar" value={googleCalendar} onChange={(e) => setGoogleCalendar(e.target.value)}></input>
                <button >Add your Calendar</button>
            </form>
            <iframe src={url}
                style={{ border: "0", width: "1000px", height: "500px", frameborder: "0", scrolling: "no" }}
            ></iframe>
        </div>
    )
}

export default CalendarCard
