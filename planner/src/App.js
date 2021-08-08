import { useState } from "react"
import Navbar from './Components/Navbar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Home from './Components/Home';
import CalendarDisplay from './Components/CalendarDisplay';
import Today from './Components/Today';
import Recipes from './Components/Recipes';
import Space from './Components/Space';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  const [displayCalendar, setDisplayCalendar] = useState([])
  function handlepost(newCalendar) {
    setDisplayCalendar([...displayCalendar, newCalendar])
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
            <CalendarDisplay handlepost={handlepost} setDisplayCalendar={setDisplayCalendar} displayCalendar={displayCalendar} />
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
