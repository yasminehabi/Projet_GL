import logo from './FindIn.png';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import AjouterAnn from './Pages/AjouterAnn';

function App() {
  return (
<div>
<Router>
  <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path='/Test' element={<AjouterAnn/>}/>
  
  </Routes>
</Router>
</div>
  );
}

export default App;
