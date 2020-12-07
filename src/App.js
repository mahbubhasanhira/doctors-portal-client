import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppointmentPage from "./Components/Appointment/Appointment/Appointment";
import AddDoctors from "./Components/Dashboard/AddDoctors/AddDctors/AddDoctors";
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
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
        <PrivateRoute path='/dashboard/dashboard'>
            <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/appointment'>
            <DashboardAppointment/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/patients'>
            <Patients/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/prescriptions'>
            <Prescriptions/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/addDoctor'>
          <AddDoctors/>
        </PrivateRoute>
        <PrivateRoute path='/dashboard/setting'>
          <Setting/>
        </PrivateRoute>
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
