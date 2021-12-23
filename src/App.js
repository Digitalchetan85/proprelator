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
import PrestigeWhiteMedows from './Components/Villas/PrestigeWhiteMedows';
import AdarshWisteria from './Components/Villas/AdarshWisteria';
import AdarshTranqville from './Components/Villas/AdarshTranqville';
import NVTSymphony from './Components/Villas/NVTSymphony';
import PrimeBeverly from './Components/Villas/PrimeBeverly';
import PrestigeCity from './Components/Villas/PrestigeCity';
import CasaGrand from './Components/Villas/CasaGrand';
import QueenSquare from './Components/Villas/QueenSquare';
import RadianceBlossom from './Components/Villas/RadianceBlossom';
import AdarshSanctuary from './Components/Villas/AdarshSanctuary';
import ConcordeAbode from './Components/Villas/ConcordeAbode';
import RafflesPark from "./Components/Villas/RafflesPark";
import AssetzEarth from './Components/Villas/AssetzEarth';
import AssetzLeaves from './Components/Villas/Assetzleaves';
import TotalEnvironment from './Components/Villas/TotalEnvironment';

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
          <Route path="/prestige-white-medows" component={PrestigeWhiteMedows}></Route>
          <Route path="/adarsh-wisteria" component={AdarshWisteria}></Route>
          <Route path="/adarsh-tranqville" component={AdarshTranqville}></Route>
          <Route path="/nvt-symphony" component={NVTSymphony}></Route>
          <Route path="/prime-beverly" component={PrimeBeverly}></Route>
          <Route path="/prestige-city" component={PrestigeCity}></Route>
          <Route path="/casa-grand" component={CasaGrand}></Route>
          <Route path="/queen-square" component={QueenSquare}></Route>
          <Route path="/radiance-blossom" component={RadianceBlossom}></Route>
          <Route path="/adarsh-sanctuary" component={AdarshSanctuary}></Route>
          <Route path="/concorde-abode" component={ConcordeAbode}></Route>
          <Route path="/raffles-park" component={RafflesPark}></Route>
          <Route path="/assetz-earth" component={AssetzEarth}></Route>
          <Route path="/assetz-leaves" component={AssetzLeaves}></Route>
          <Route path="/total-environment" component={TotalEnvironment}></Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
