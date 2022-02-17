import "./App.css";
//import axios from "axios";

import {BrowserRouter, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import TwoPlayers from "./pages/TwoPlayers.js"


/* eslint-disable no-unused-expressions */

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home} exact/>
        <Route path="/About" component={About} exact/>
        <Route path="/twoplayers" component={TwoPlayers} exact/>

        <div className = "routeStyles">

        </div>

        <br></br>


      </div>
    </BrowserRouter>

  );
}

export default App;


//  <Link to="/">Home</Link>


//<Route path="/threeplayers" component={ThreePlayerNash} exact/>
//<Route path="/nplayers" component={NPlayerNash} exact/>
