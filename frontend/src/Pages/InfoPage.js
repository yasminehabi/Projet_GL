import '../../src/App.css';
/*import profile from "react"*/
import ill from '../../src/ill.svg' ;
import logo from '../images/logo.png' ;



function InfoPage () {
  return (

    <div className="w-full h-screen flex flex-row justify-between items-center bg-white px-[5%] ">  
    
    <div className="flex flex-col space-y-2  mt-[-400px] pt-[440px] ml-[-7%]  pl-[5%] mb-[-220px] pb-[220px] mr-[3%] pr-[3%] bg-blue-500">
    <p className='text-white text-2xl pt-[-1000px]'>Bienvenue sur </p> 

<img src={logo} className="w-[250px] mb-[60px] pt-[-900px]"  alt="logo" />
            <p className="text-white text-[100%] font-size-[100px] "> Veuillez compléter les informations <br /> manquantes !  </p>
           

    </div>
    <div class="flex flex-col space-y-4 ...">
          <input type="text" placeholder="  Votre nom " className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249);"/>
          <input type="text" placeholder="  Votre prénom " className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249);"/>
          <input type="text" placeholder="  Votre adresse mail" className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249);"/>

          <input type="text" placeholder="  Votre numéro de téléphone " className=" text-xs h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249)"/>
          <input type="text" placeholder="  Date de naissance" className="text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249)"/>
          <input type="text" placeholder="  Votre adresse (Wilaya ,..." className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249)"/>
          <button className="login-button bg-blue-500 text-white  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px; ">Continuer</button>
    </div>
          < img  src={ill} className='position-[relative] pt-[5%] pl-[20%] w-[70%] h-[70%]' alt="illustration" />
          <p class="  text-3xl text-black fixed top-[3%] pl-[270px] font-size-[px] ">Trouvez tout ce qui vous interésse avec une meilleure expérience !  </p>
    </div>
  );
}

export default InfoPage;