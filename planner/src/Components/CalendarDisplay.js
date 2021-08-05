import { useState, useEffect } from 'react'
import RefreshButton from './RefreshButton'

function CalendarDisplay() {
    const [googleCalendar, setGoogleCalendar] = useState("")
    const [displayCalendar, setDisplayCalendar] = useState([])
    // have to fix that the calendar updates without refreshing the page
    function handlepost(newCalendar) {
        setDisplayCalendar([...displayCalendar, newCalendar])
    }

    useEffect(() => {
        handleFetchCalendar()
    }, [])

    function handleFetchCalendar() {
        fetch(`http://localhost:3000/calendar`)
            .then(resp => resp.json())
            .then(data => setDisplayCalendar([...displayCalendar, data]))
    }

    function handleAddCalendar(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/calendar`, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "url": googleCalendar
            })
        })
            .then(res => res.json())
            .then(data => handlepost(data))
        handleFetchCalendar()
        setGoogleCalendar("")
    }
    console.log(displayCalendar)
    return (
        <div>
            <form onSubmit={handleAddCalendar}>
                <input type="url" placeholder="Enter Url of your Google Calendar" value={googleCalendar} onChange={(e) => setGoogleCalendar(e.target.value)}></input>
                <button>Add your Calendar</button>
            </form>
            <RefreshButton />
            {displayCalendar.map(cal => <iframe key={cal.url} src={cal.url}
                style={{ border: "0", width: "1000px", height: "500px", frameborder: "0", scrolling: "no" }}
            ></iframe>)}
        </div>
    )
}

export default CalendarDisplay
