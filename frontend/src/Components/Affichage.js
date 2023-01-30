//import Navbar from '../components/Navbar';
import annonce  from '../images/annonce.jpg' ;

function EditAnnonce () {
  //<Navbar/>
    return (
      <div class='w-full bg-white '>
         
      
    
  
  <div class="h-100 w-150 pb-20 mt-20 mb-20 ml-4 sm:ml-20 mr-4 sm:mr-20 flex shadow-2xl center rounded-2xl pt-14 shadow-blue-500/100 "> 
  <div class="flex flex-col ml-4 sm:ml-20 font-semibold">
                    <p class=" text-xl text-sky-400 font-bold  ">Critéres de l'annonce choisie  </p>
                    <img src={annonce} class="ml-30 mt-30 mb-20 w-40 sm:w-80 h-90 sm:h-90 "  alt="annonce" />
                    <href class="text-sky-400 underline cursor-pointer">Cliquer pour afficher la location sur Google map</href>

 </div>   

    <div class="flex flex-col ml-1 sm:ml-20  text-sm  sm:text-base font-semibold mt-10">
      <p class="ad-title ">Titre : </p>
      <p class="ad-description ">Déscription : </p>
      <p>Catégorie :</p>
      <p>Théme :</p>
      <p>Modalité :</p>
      <p>L'adresse de la formation:</p>
      <p>Tarifs/séance:</p>
      <p>Les informations de l'annonceur :</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>


<div class=" mt-5  sm:ml-5 flex flex-row space-x-10">
<button class="  text-white font-bold  h-10 px-4 pb-1 ml-5 mt-4	 w-15  rounded-2xl bg-blue-500  ">Retour</button>
<button class="  text-white font-bold  h-10 px-4 pb-1 ml-5 mt-4	 w-15  rounded-2xl bg-blue-500  ">Message d'offre</button>
</div>   







    </div>



  </div>
  </div> 
 
);
  }
  
  export default EditAnnonce;


  