import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppointmentPage from "./Components/Appointment/Appointment/Appointment";
import AddDoctors from "./Components/Dashboard/AddDoctors/AddDctors/AddDoctors";
import DashboardAppointment from "./Components/Dashboard/Appointment/DashboardAppointment/DashboardAppointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard/Dashboard";
import Patients from "./Components/Dashboard/Patients/Patients/Patients";
import Setting from "./Components/Dashboard/Setting/Setting/Setting";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      if (userInfo.email) {
        setLoggedInUser(userInfo);
        fetch(
          `https://api-doctors-portal.onrender.com/isDoctors?email=${userInfo.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setIsDoctor(true);
            }
          })
          .catch((error) => console.log(error));
      }
    }
  }, [loggedInUser.email]);

  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, isDoctor, setIsDoctor }}
    >
      <main className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/appointment">
              <AppointmentPage />
            </Route>
            <PrivateRoute path="/dashboard/appointment">
              <DashboardAppointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/dashboard">
              {isDoctor && <Dashboard />}
            </PrivateRoute>
            <PrivateRoute path="/dashboard/patients">
              {isDoctor && <Patients />}
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addDoctor">
              {isDoctor && <AddDoctors />}
            </PrivateRoute>
            <PrivateRoute path="/dashboard/setting">
              {isDoctor && <Setting />}
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
    </UserContext.Provider>
  );
}

export default App;
