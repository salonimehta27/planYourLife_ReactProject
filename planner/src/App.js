import { useState } from "react"
import Navbar from './Components/Navbar';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Home from './Components/Home';
import CalendarDisplay from './Components/CalendarDisplay';
import Today from './Components/Today';
import Recipes from './Components/Recipes';
import Space from './Components/Space';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {

  const localizer = momentLocalizer(moment);
  // const myEventsList = [
  //   { start: new Date(), end: new Date(), title: "Today's date" }
  // ];
  const [myEventsList, setMyEventsList] = useState([{ start: new Date(), end: new Date(), title: "hello" }])

  function handleSubmitThePlan(e) {
    e.preventDefault()
    setMyEventsList([...myEventsList].map(object => {
      return ({ ...object, [myEventsList.title]: e.target.value })
    }))

  }
  function handleChange(change) {
    setMyEventsList([...myEventsList].map(object => {
      return ({ ...object, [myEventsList.title]: change })
    }))

  }
  return (
    <div>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calendar">
            <CalendarDisplay onPlanSubmit={handleSubmitThePlan}
              eventValue={myEventsList.title}
              handleChange={handleChange}
            ></CalendarDisplay>

          </Route>
          <Route path="/today">
            <Today />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/space">
            <Space />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
{/* <Calendar
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            /> */}