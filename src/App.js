import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Components/Pages/Home/home"
import Nav from "./Components/Controllers/navbar"


function App() {
  return (
    <div>
      <Homepage />
      {/* <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/profile" component={profile} />         */}

        {/* </div> */}
      {/* </Router> */} 
    </div>
  );
}

export default App;
