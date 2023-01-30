import logo from './FindIn.png';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import AjouterAnn from './Pages/AjouterAnn';
import InfoPage from './Pages/InfoPage';
import AddUser from './Pages/AddUser';
import Verify from './Pages/Verify';
import AddAnnonce from './Pages/Addanonce';
import Profil from './Pages/Profil';
import Affichage from './Pages/Modification';
import Changeprflinf from './Pages/Changeprflinf';
function App() {
  return (
<div>
<Router>
  <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path='/Test' element={<AjouterAnn/>}/>
      <Route path='/infopage' element={<InfoPage/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/Verify' element={<Verify/>}/>
      <Route path='/AddAnnonce' element={<AddAnnonce/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/Affichage' element={<Affichage/>}/>
      <Route path='/ModifierProfil' element={<Changeprflinf/>}/>

  
  </Routes>
</Router>
</div>
  );
}

export default App;
