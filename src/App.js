import react from "react";
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Resource from "./components/Resource";
import ScrollToTop from "./components/ScrolltoTop";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    /* Works on Chrome, Safari, and Edge */

    <div className="App1">
    <Router>  
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home/>
            <About/>
        </Route>

        <Route exact path="/resource">
            <Resource/>
          </Route>

          <Route exact path="/feedback">
            <Feedback/>
          </Route>
          <Route exact path="/">
            <Contact/>
        </Route>
        </Switch>

      </Router>
      <Chatbot/>
      <ScrollToTop/>
    </div>
       
  );
}

export default App;
