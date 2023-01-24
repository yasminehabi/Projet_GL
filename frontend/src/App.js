import logo from './FindIn.png';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import AjouterAnn from './Pages/AjouterAnn';
import InfoPage from './Pages/InfoPage';

function App() {
  return (
<div>
<Router>
  <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path='/Test' element={<AjouterAnn/>}/>
      <Route path='/infopage' element={<InfoPage/>}/>
  
  </Routes>
</Router>
</div>
  );
}

export default App;
