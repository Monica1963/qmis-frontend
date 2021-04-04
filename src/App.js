import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Nav from "./Components/common/Nav";
import Loguin from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
// import Err404 from "./Components/Pages/Err404";
import Footer from "./Components/common/Footer";
import Quality from "./Components/Pages/Quality";
import WkaBlue from "./Components/Pages/WkaBlue";
import Feedback from "./Components/Pages/Feedback";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/Loguin" component={Loguin} />
      <Route path="/Register" component={Register} />
      <Route path="/Quality" component={Quality} />
      <Route path="/WkaBlue" component={WkaBlue} />
      <Route path="/Feedback" component={Feedback} />
      <Redirect to="/Home" />
      <Footer />
    </Router>
  );
}
//
export default App;
