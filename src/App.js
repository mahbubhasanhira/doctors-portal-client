import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppointmentPage from "./Components/Appointment/Appointment/Appointment";
import DashboardAppointment from "./Components/Dashboard/Appointment/DashboardAppointment/DashboardAppointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard/Dashboard";
import Patients from "./Components/Dashboard/Patients/Patients/Patients";
import Prescriptions from "./Components/Dashboard/Prescriptions/Prescriptions/Prescriptions";
import Setting from "./Components/Dashboard/Setting/Setting/Setting";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if(userInfo){
     setLoggedInUser(userInfo); 
    }
  },[])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/appointment'>
          <AppointmentPage/>
        </Route>
        <Route path='/dashboard/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/dashboard/appointment'>
          <DashboardAppointment/>
        </Route>
        <Route path='/dashboard/patients'>
          <Patients/>
        </Route>
        <Route path='/dashboard/prescriptions'>
         <Prescriptions/>
        </Route>
        <Route path='/dashboard/setting'>
         <Setting/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
