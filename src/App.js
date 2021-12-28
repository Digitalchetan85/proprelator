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
import AssetzSoul from './Components/Villas/AssetzSoul';
import NambiarBellezea from './Components/Villas/NambiarBellezea';
import DivyasreeEast from './Components/Villas/DivyasreeEast';
import Hiranandani from './Components/Villas/Hiranandani';
import TotalEnvironmentPursuit from './Components/Villas/TotalEnvironmentPursuit';
import BrigadeAtmosphere from './Components/Villas/BrigadeAtmosphere';
import AssetzBanyan from "./Components/Appartments/AssetzBanyan";
import AssetzSun from "./Components/Appartments/AssetzSun";
import AssetzMarq from './Components/Appartments/AssetzMarq';
import SobhaWindsor from './Components/Appartments/SobhaWindsor';
import SobhaManhattan from './Components/Appartments/SobhaManhattan';
import NikooHomes from "./Components/Appartments/NikooHomes";
import GodrejAnanda from './Components/Appartments/GodrejAnanda';
import PurvaAtmosphere from './Components/Appartments/PurvaAtmosphere';
import AdarshPalmRetreat from './Components/Appartments/AdarshPalmRetreat';
import BrigadeCornerstone from './Components/Appartments/BrigadeCornerstone';
import SobhaDreamGardens from './Components/Appartments/SobhaDreamGardens';
import KarleVarioHomes from './Components/Appartments/KarleVarioHomes';
import TotalEnvironmentMagic from './Components/Appartments/TotalEnvironmentMagic';
import SobhaPristine from './Components/Appartments/SobhaPristine';
import SobhaDreamAcres from './Components/Appartments/SobhaDreamAcres';
import SobhaLakeGarden from './Components/Appartments/SobhaLakeGarden';
import MahindraWindchimes from './Components/Appartments/MahindraWindchimes';
import KarleTown from './Components/Appartments/KarleTown';
import SobhaSaptrang from './Components/Appartments/SobhaSaptrang';

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
          <Route path="/assetzassetz-soul-soul" component={AssetzSoul}></Route>
          <Route path="/nambiar-bellezea" component={NambiarBellezea}></Route>
          <Route path="/divyasree-east" component={DivyasreeEast}></Route>
          <Route path="/hiranandani" component={Hiranandani}></Route>
          <Route path="/total-environment-pursuit" component={TotalEnvironmentPursuit}></Route>
          <Route path="/brigade-atmosphere" component={BrigadeAtmosphere}></Route>
          <Route path="/assetz-banyan" component={AssetzBanyan}></Route>
          <Route path="/assetz-sun" component={AssetzSun}></Route>
          <Route path="/assetz-Marq" component={AssetzMarq}></Route>
          <Route path="/sobha-windsor" component={SobhaWindsor}></Route>
          <Route path="/sobha-manhattan" component={SobhaManhattan}></Route>
          <Route path="/nikoo-homes" component={NikooHomes}></Route>
          <Route path="/godrej-ananda" component={GodrejAnanda}></Route>
          <Route path="/purva-atmosphere" component={PurvaAtmosphere}></Route>
          <Route path="/adarsh-palm-retreat" component={AdarshPalmRetreat}></Route>
          <Route path="/brigade-cornerstone" component={BrigadeCornerstone}></Route>
          <Route path="/sobha-dream-gardens" component={SobhaDreamGardens}></Route>
          <Route path="/karle-vario-homes" component={KarleVarioHomes}></Route>
          <Route path="/total-environment-magic" component={TotalEnvironmentMagic}></Route>
          <Route path="/sobha-pristine" component={SobhaPristine}></Route>
          <Route path="/sobha-dream-acres" component={SobhaDreamAcres}></Route>
          <Route path="/sobha-lake-garden" component={SobhaLakeGarden}></Route>
          <Route path="/mahindra-windchimes" component={MahindraWindchimes}></Route>          
          <Route path="/karle-town" component={KarleTown}></Route>
          <Route path="/sobha-saptrang" component={SobhaSaptrang}></Route> 
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
