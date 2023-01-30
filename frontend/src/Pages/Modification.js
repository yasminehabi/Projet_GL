import annonce  from '../images/annonce.jpg' ;
import React, { useState,Component, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import Navbar from '../components/Navbar';
function Affichage () {
  const location=useLocation();
  const id=location.state.annonce.id;
  const [Annonce,setannonce]=useState();
  
  useEffect(() =>{
    //console.log("modification",location.state.annonce)
    console.log('Fetching...');
    fetch('http://127.0.0.1:8000/api/annonce/'+id)
    .then((response) =>response.json())
    .then((data) =>{
        console.log(data);
        //setannonce(data.annonces);
        //setTempCustomer(data.customer);
    });
} ,[]);

function updateCustomer(e) {
  e.preventDefault();
  const url = 'http://127.0.0.1:8000/api/annonce/' + id;
  console.log('To post',Annonce);
  fetch(url, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access'),
      },
      body: JSON.stringify(Annonce),
  })
      .then((response) => {

          if (!response.ok) throw new Error('something went wrong');
          return response.json();
      })
      .then((data) => {
          //setannonce(data.annonces);
          //setChanged(false);
          
      })
      .catch((e) => {
          //setError(e.message);
      });
}

  //<Navbar/>
    return (
 <div class='w-full bg-white '>
 
  <div class="h-100 w-150 pb-20 mt-20 mb-20 ml-4 sm:ml-20 mr-4 sm:mr-20 flex shadow-2xl center rounded-2xl pt-14 shadow-blue-500/100 "> 
  <div class="flex flex-col ml-4 sm:ml-20 font-semibold">
                    <p class=" text-xl text-sky-400 font-bold  ">Critéres de l'annonce choisie  </p>
                    <img src={annonce} class="ml-30 mt-30 mb-20 w-40 sm:w-80 h-90 sm:h-90 "  alt="annonce" />
                    

 </div>   
 <form
                        className="w-full max-w-sm"
                        id="annonce"
                        onSubmit={updateCustomer}
                    >
    <div class="flex flex-col space-y-4 ml-1 sm:ml-20  text-sm  sm:text-base font-semibold mt-10">
    <textarea type="text"
    id='titreAnn'
     placeholder=" modifier le titre de l'annonce"
     //value={Annonce.titreAnn}
     onChange={(e) => {
      //setChanged(true);
      setannonce({
      ...Annonce,
      titreAnn: e.target.value,
      });
      }}
     
     class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />

    <textarea type="text" 
    id='catégorie'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.catégorie}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     catégorie: e.target.value,
     });
     }}
    placeholder=" modifier la catégorie" 

    class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
    <textarea type="text" 
    placeholder=" modifier le théme"
    id='théme'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.théme}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     théme: e.target.value,
     });
     }} 

    class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />

    <textarea type="text"
     placeholder=" modifier modalité" 
     id='modalité'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.théme}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     modalité: e.target.value,
     });
     }}
     class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />

    

    <textarea type="text" 
    placeholder=" modifier Description" 
    id='Description'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.Description}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     Description: e.target.value,
     });
     }}
    class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
    
    <textarea type="text" 
    placeholder=" modifier le tarif" 
    id='tarif'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.modalité}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     tarif: e.target.value,
     });
     }}
    class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />



    <textarea type="text" 
    placeholder=" modifier la Wilaya'"
    id='Wilaya'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.Description}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     Wilaya: e.target.value,
     });
     }}
     class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
    
    <textarea type="text" 
    placeholder=" modifier la Commune'"
    id='Commune'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.Description}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     Commune: e.target.value,
     });
     }}
     class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
     

     <textarea type="text" 
    placeholder=" modifier l'adresseIMB'"
    id='adresseIMB'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.Description}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     adresseIMB: e.target.value,
     });
     }}
     class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
     
     <textarea type="text" 
    placeholder=" modifier adresseURL'"
    id='adresseURL'
    //placeholder=" modifier le titre de l'annonce"
    //value={Annonce.Description}
    onChange={(e) => {
     //setChanged(true);
     setannonce({
     ...Annonce,
     adresseURL: e.target.value,
     });
     }}
     class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />


    
    
    
<div class=" mt-5  sm:ml-5 flex flex-row space-x-10">

</div>   








    </div>

    <input class="  text-white font-bold  h-10 px-4 pb-1 ml-5 mt-4	 w-15  rounded-2xl bg-blue-500  " type="submit"/>
    </form>
  </div>
  </div>
);
  }
  
  export default Affichage;


  