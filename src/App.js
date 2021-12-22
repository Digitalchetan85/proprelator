import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import TopMenubar from "./Components/PageIncludes/TopMenubar";
import Footer from "./Components/PageIncludes/Footer";
import AdarshPalmAcres from './Components/Villas/AdarshPalmAcres'

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenubar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about-us" component={About}></Route>
          <Route path="/contact-us" component={Contact}></Route>
          <Route path="/adarsh-palm-acres" component={AdarshPalmAcres}></Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
