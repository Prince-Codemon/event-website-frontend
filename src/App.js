import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Private from "./routes/Private";
import Public from "./routes/Public";
import Register from "./Pages/Register";
import CreateEvent from "./Pages/dashboard/CreateEvent";
import Admin from "./routes/Admin";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Dashboard from "./Pages/dashboard/Dashboard";
import Footer from "./Components/Footer";
import Event from "./Pages/Event";
import Join from "./Pages/Join";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event/>}/>
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/join/:id" element={<Join />}/>
        <Route
          path="/login"
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route
          path="/register"
          element={
            <Public>
              <Register />
            </Public>
          }
        />
        <Route path={"admin"}>
          <Route
            path="create-event"
            element={
              <Admin>
                <CreateEvent />
              </Admin>
            }
          />
          <Route
            path="dashboard"
            element={
              <Admin>
                <Dashboard />
              </Admin>
            }
          />
        </Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;
