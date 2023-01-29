/*import image from '../images/Add.png' ;*/
import React, { useState,Component } from 'react';
import { useParams,Link, useNavigate } from "react-router-dom";
import {useEffect } from "react";
import axios from 'axios';

const txtFieldState = {
    value: "",
    valid: true,
    typeMismatch: false,
    errMsg: "" //this is where our error message gets across
};

class AddAnnonce extends Component {

    state = {
        titreAnn:{ ...txtFieldState,default:""},
        catégorie:{ ...txtFieldState,default:""},
        théme:{ ...txtFieldState,default:""},
        modalité:{ ...txtFieldState,default:""},
        Description:{ ...txtFieldState,default:""},
        tarif:{ ...txtFieldState,default:""},
        Wilaya:{ ...txtFieldState,default:""},
        
        Commune:{ ...txtFieldState,default:""},
        adresseIMB:{ ...txtFieldState,default:""},
        adresseURL:{ ...txtFieldState,default:""},
        image_url:{ ...txtFieldState,default:null},
        
        annonceur:'',




     };
     
     handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
          [e.target.id]: e.target.value
        })

      };
    
     handleImageChange = (e) => {
        this.setState({
          image_url: e.target.files[0]
        })
      };
    
     handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            ['annonceur']: this.props.state
          })
        
        let form_data = new FormData();
        form_data.append('titreAnn', this.state.titreAnn);
        form_data.append('catégorie', this.state.catégorie);
        form_data.append('théme', this.state.théme);
        form_data.append('modalité', this.state.modalité);
        form_data.append('Description', this.state.Description);
        form_data.append('tarif', this.state.tarif);
        form_data.append('Wilaya', this.state.Wilaya);
        form_data.append('Commune', this.state.Commune);
        form_data.append('adresseIMB', this.state.adresseIMB);
        form_data.append('adresseURL', this.state.adresseURL);
        form_data.append('image_url',this.state.image_url,this.state.image_url.name);
        form_data.append('annonceur',this.state.annonceur);
        
        
        let url = 'http://localhost:8000/api/annonces/'+this.props.state;
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.state);
            })
            .catch(err => console.log(err))
      };


    render(){
    return (
        <div className="bg-slate-100	background-color: rgb(241 245 249);">
           
            <div class="flex flex-row bg-white shadow-2xl w-full ">
                <button class="  text-white font-bold  h-10 px-4 pb-1 ml-5 mt-4	 w-30  rounded-2xl bg-blue-800  ">Retour</button>
                <p class=" text-xl sm:text-3xl text-blue-800 font-bold mt-4 sm:pl-[20%] pl-2 ">Publier gratuitement votre annonce !  </p>
                <p class='font-body text-blue-800 text-4xl sm:text-5xl pl-2 sm:pl-[20%] pt-3'>FindIn</p>


            </div>
            <form
                       
                       onSubmit={this.handleSubmit}
                       
                    >

            <div class=" flex  flex-col sm:flex-row space-x-6 items-start " >
                <div class=" mt-20 ml-10 sm:ml-20  flex flex-row space-x-5">
                    <p class="underline font-semibold decoration-2	">Donnez un titre à votre annonce </p>
                    <textarea id="titreAnn"
                    type="text" 
                    placeholder="  Titre de l'annonce  "
                    //value={this.state.titreAnn.default}
                    onChange={this.handleChange} required
                    class=" text-sm  h-36 w-60 rounded-2xl  border border-indigo-600" />
                </div>
                <div class="ml-10  mt-20 sm:ml-8  flex flex-row space-x-5">
                    <p class="underline font-semibold decoration-2">Précisez la catégorie de votre annonce </p>
                    <textarea id="catégorie"
                    type="text" 
                    placeholder="  La catégorie de votre annonce "
                    //value={this.state.catégorie.default}
                    onChange={this.handleChange} required
                     class=" text-sm  h-36 w-60 rounded-2xl  border border-indigo-600 " />
                </div>

               

            </div>



            <div class=" flex  flex-col sm:flex-row space-x-16 items-start " >
                

                <div class="ml-  mt-20  flex flex-row space-x-5">
                    <p class="underline font-semibold decoration-2">Donnez un théme à votre annonce </p>
                    <textarea id="théme"
                    type="text"
                    placeholder="  Le théme de l'annonce "
                    //value={this.state.théme.default}
                    onChange={this.handleChange} required
                     class=" text-sm h-36	 w-60 rounded-2xl border border-indigo-600 " />
                </div>
                <div class=" ml-20  mt-20 sm:ml-8 flex flex-row space-x-5">
                    <p class="underline font-semibold decoration-2">Précisez la modalité de votre  annonce </p>
                    <textarea id="modalité"
                     type="text" 
                    placeholder="  La modalité de votre annonce"
                    //value={this.state.modalité.default}
                    onChange={this.handleChange} required
                     class="text-sm  h-36 w-60 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
                </div>
            </div>



            <div class="flex  flex-col sm:flex-row space-x-20 items-start" >
            <div class="  ml-20 mt-20  flex flex-row space-x-5 ">
                    <p class="underline font-semibold decoration-2	">Donnez une déscription à votre annonce </p>
                    <textarea id="Description"
                     type="text"
                     placeholder="  Décrivez votre annonce " 
                    // value={this.state.Description.default}
                     onChange={this.handleChange} required
                     class="  text-sm  h-36 w-60 rounded-2xl border border-indigo-600 " />
                </div>
                <div class="ml-20  mt-20 sm:ml-7 flex flex-row space-x-5">
                    <p class="underline font-semibold decoration-2">Mentionnez le prix de votre formation <br /> / séance</p>
                    <textarea id="tarif" type="text" 
                    placeholder="  Préciser tarifs/séance"
                    //value={this.state.tarif.default}
                    onChange={this.handleChange} required
                    class="text-sm h-36 w-60	 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 ;border-black	border-color: black" />
                </div>

                
            </div>

            <div class=" flex  flex-col sm:flex-row space-x-20 items-start" >
                <div class=" ml-20  mt-20  sm:ml-15 flex flex-row space-x-5">
                    <p class="underline font-semibold decoration-2	">Donnez l'adresse de la formation   </p>
                    <textarea id="Wilaya" type="text"
                    placeholder="  Willaya"
                    //value={this.state.Wilaya.default}
                    onChange={this.handleChange} required
                    class=" text-sm h-36 w-30 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " ></textarea>
                    <textarea id="Commune" type="text"
                    placeholder=" Commune"
                    //value={this.state.Commune.default}
                    onChange={this.handleChange} required
                    class=" text-sm h-36 w-30 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 "/>
                    <textarea id="adresseIMB" type="text"
                    placeholder="  Adresse"
                    //value={this.state.adresseIMB.default}
                    onChange={this.handleChange} required
                    class=" text-sm h-36 w-30 rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 " />
                </div>

               
                
            </div>
            <div class=" ml-20  mt-20 sm:ml-8 flex flex-row space-x-14">
                    <p class="underline font-semibold decoration-2	">Mettez l'URL de l'adresse via  <br /> google map </p>
                    <textarea  id="adresseURL" type="text"
                     placeholder="  L'adresse via google map" 
                     //value={this.state.adresseURL.default}
                     onChange={this.handleChange} required
                     class=" text-sm h-36	height: 9rem; w-60	width: 15rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border border-indigo-600 ;border-black	border-color: black" />
                </div>
            <div class=" ml-20  mt-20 sm:ml-8 flex flex-row space-x-14">
                    <p class="underline font-semibold decoration-2	">Upload image  <br />  </p>
                    <input id="image_url" type="file" accept="image/png, image/jpeg"  onChange={this.handleImageChange} required  />
                </div>

            
                
                
            <div class=" mt-20  sm:ml-10 flex flex-row space-x-80">
            <input class=" bg-blue-800 text-white  h-18 w-40  rounded-2xl my-10 mx-5 sm:mx-10  " type="submit"/>
            </div>
            </form>

        </div>



    );
}
}

export default AddAnnonce;