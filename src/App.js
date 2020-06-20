import React, {createContext, useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appointment from './Pages/Appointment';
import './App.css';
import Home from './Pages/Home';
export const CalenderContext = createContext();
export const DataContext = createContext();

function App() {

  const [allAppoinments, setAllAppoinments] = useState([]);
  const [allBookedAppoinments, setAllBookedAppoinments] = useState([]);
  const [allPatients, setAllPatients] = useState([]);
  const [date, setDate] = useState(new Date());

  const calenderContextValue = {date, setDate};
  const contextData = {allAppoinments, setAllAppoinments,allBookedAppoinments, setAllBookedAppoinments,allPatients, setAllPatients }

  return (
    <CalenderContext.Provider value={calenderContextValue}>
   <Router>
     <Switch>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route exact path="/appointment">
          <Appointment/>
       </Route>
     </Switch>
   </Router>
   </CalenderContext.Provider>
  );
}

export default App;
