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

  
  </Routes>
</Router>
</div>
  );
}

export default App;
