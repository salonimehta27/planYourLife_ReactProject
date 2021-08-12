import { useState, useEffect } from 'react'
import CalendarCard from './CalendarCard'

function CalendarDisplay() {

    const [displayCalendar, setDisplayCalendar] = useState([])
    const [googleCalendar, setGoogleCalendar] = useState("")
    const [note, setNote] = useState(false)
    // have to fix that the calendar updates without refreshing the page
    // function handlepost(newCalendar) {
    //     setDisplayCalendar([...displayCalendar, newCalendar])
    // }
    const calendarDisplay = displayCalendar.map(d => <CalendarCard id={d.id} key={d.id} url={d.url}
        displayCalendar={displayCalendar}
        setDisplayCalendar={setDisplayCalendar}></CalendarCard>)
    useEffect(() => {
        handleFetchCalendar()
    }, [])

    function handleFetchCalendar() {
        fetch(`https://plan-your-magic.herokuapp.com/calendar`)
            .then(resp => resp.json())
            .then(data => setDisplayCalendar(data))
    }
    // function addCalendarforDemo(e) {
    //     e.preventDefault()
    //     setDisplayCalendar([...displayCalendar, googleCalendar])
    //     setGoogleCalendar("")
    // }
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

    // console.log(displayCalendar)
    return (
        <div>
            <form onSubmit={handleAddCalendar} >
                <input type="url" placeholder="Enter Url of your Google Calendar" value={googleCalendar} onChange={(e) => setGoogleCalendar(e.target.value)}></input>
                <button style={{ marginBottom: "3px" }}>Add your Calendar</button>
            </form>
            <h5 onClick={() => setNote(!note)} style={{ color: "#8F25FA" }}>{note ? "Note: This Calendar is not Editable, this is just to view your Google Calendar at a glance & you can add or delete multiple calendars, for the purposes of demo this Calendar shown below will not permanently delete" : "Click to See note"}</h5>
            <br></br>
            {calendarDisplay}
        </div>
    )
}

export default CalendarDisplay
