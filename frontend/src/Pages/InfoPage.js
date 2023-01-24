import '../../src/App.css';
/*import profile from "react"*/
import ill from '../../src/ill.svg' ;


function InfoPage () {
  return (
   <div className="main">
     <div className="sub-main">
           <section class = "side">
            <nav class="content">
            <h3>Bienvenue sur </h3> 
            <h2>FindIn</h2>
             </nav>
            </section>
            </div>
            <div class="p1"> <p>Veuillez compléter les informations manquantes ! </p></div>
            <div class="p2"> <p>Trouvez tout ce qui vous interésse avec une meilleure expérience sur  </p></div>
            <div class="p3"> <p>FindIn </p></div>
            <div class="image"> <img src={ill}  alt="illustration" /></div>

             
            
          <input type="text" placeholder="Votre nom d'utilisateur" className="name1"/>
           
          
          <input type="text" placeholder="Votre adresse (Wilaya , Commune)" className="name2"/>
          
          <div className="login-button">
          <button>Continuer</button>
          </div>
           
 </div>
       
       

    
    
  );
}

export default InfoPage;