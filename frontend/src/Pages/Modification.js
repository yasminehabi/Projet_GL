import annonce  from '../images/annonce.jpg' ;
import React, { useState,Component, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
let prop;

function Affichage () {
  const location=useLocation();
  const id=location.state.annonce.id;
  const read=location.state.annonce
  const [Annonce,setannonce]=useState();
  const [realAnnonce,setreal]=useState();
  
  useEffect(() =>{
    //console.log("modification",location.state.annonce)
    console.log('Fetching...');
    fetch('http://127.0.0.1:8000/api/annonce/'+id)
    .then((response) =>response.json())
    .then((data) =>{
        console.log(data);
        setreal(data.annonces);
        //setannonce(data.annonces);
        //setTempCustomer(data.customer);
    });
} ,[]);
prop=realAnnonce;
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
          
          //setChanged(false);
          
      })
      .catch((e) => {
          //setError(e.message);
      });
}

  //<Navbar/>
  //
    return (
 <div class='w-full bg-white '>
 <Navbar/>
  <div class="h-100 w-150 pb-20 mt-20 mb-20 ml-4 sm:ml-20 mr-4 sm:mr-20 flex shadow-2xl center rounded-2xl pt-14 shadow-blue-500/100 "> 
  <div class="flex flex-col ml-4 sm:ml-20 font-semibold">
                    <p class=" text-xl text-sky-400 font-bold  ">Vous pouvez modifier un ou plusieurs des critéres  </p>
                    
                    <img src={require(`../Components${read.image_url}`)}  class="ml-30 mt-30 mb-20 w-40 sm:w-80 h-90 sm:h-90 "  alt="annonce" />

 </div>   
 <form
                        className="w-full max-w-sm"
                        id="annonce"
                        onSubmit={updateCustomer}
                    >
    <div class="flex flex-col space-y-4 ml-1 sm:ml-20  text-sm  sm:text-base font-semibold mt-10">
    <textarea type="text"
    id='titreAnn'
     placeholder={read.titreAnn}
     //value={read.titreAnn}
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
    placeholder={read.catégorie} 

    class="text-sm  h-15 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
    <textarea type="text" 
    placeholder={read.théme}
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
     placeholder={read.modalité}
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
    placeholder={read.Description}
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
    placeholder={read.tarif}
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
    placeholder={read.Wilaya}
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
    placeholder={read.Commune}
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
    placeholder={read.adresseIMB}
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
    placeholder={read.adresseURL}
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


  