import { useState, useEffect } from 'react'
import RefreshButton from './RefreshButton'
import { nanoid } from 'nanoid'
import CalendarCard from './CalendarCard'

function CalendarDisplay() {

    const [displayCalendar, setDisplayCalendar] = useState([])
    // have to fix that the calendar updates without refreshing the page
    function handlepost(newCalendar) {
        setDisplayCalendar([...displayCalendar, newCalendar])
    }
    const calendarDisplay = displayCalendar.map(d => <CalendarCard key={d.url} url={d.url}
        displayCalendar={displayCalendar}
        setDisplayCalendar={setDisplayCalendar}></CalendarCard>)
    useEffect(() => {
        handleFetchCalendar()
    }, [])

    function handleFetchCalendar() {
        fetch(`https://plan-your-magic.herokuapp.com/calendar`)
            .then(resp => resp.json())
            .then(data => setDisplayCalendar([...displayCalendar, data]))
    }

    // console.log(displayCalendar)
    return (
        <div>
            {calendarDisplay}
        </div>
    )
}

export default CalendarDisplay
