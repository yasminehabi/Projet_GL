import '../../src/App.css';
/*import profile from "react"*/
import ill from '../../src/ill.svg' ;
import logo from '../images/logo.png' ;
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function InfoPage (props) {
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  
  const [phonenumber, setphone] = useState('');
  const [BD, setBD] = useState('');
  const [address, setadd] = useState('');
  const { state } = useLocation();
  
  console.log("adduser",state);
  
  useEffect(() =>{
    setName(state.user.given_name);
    setlastname(state.user.family_name);
    setemail(state.user.email)
  });
  function newCustomer(name,lastname,email,BD,address,phone){
    
    const data={name: name, lastname:lastname,email:email,birthday:BD,useraddress:address,phonenumber:phone};
    const url='http://127.0.0.1:8000/api/users/';
    fetch(url,{
        mathod:'POST',

        body: JSON.stringify(data)
    })
    .then((response) =>{
        if(!response.ok){
            throw new Error('Something went wrong');
        }
        return response.json();
    })
    .then((data) =>{

    })
    .catch((e) =>{
        console.log(e);

    });
}
  return (
    
    <div className="w-full h-screen flex flex-row justify-between items-center bg-white px-[5%] ">  
    
    <div className="flex flex-col space-y-2  mt-[-400px] pt-[440px] ml-[-7%]  pl-[5%] mb-[-220px] pb-[220px] mr-[3%] pr-[3%] bg-blue-500">
    <p className='text-white text-2xl pt-[-1000px]'>Bienvenue sur </p> 

<img src={logo} className="w-[250px] mb-[60px] pt-[-900px]"  alt="logo" />
            <p className="text-white text-[100%] font-size-[100px] "> Veuillez compléter les informations <br /> manquantes !  </p>
           

    </div>
    
    <form
    onSubmit={(e) => {
      e.preventDefault();
      setName('');
      setlastname('');
      setemail('');
      setBD('');
      setadd('');
      setphone('');
      
      props.newCustomer(name, lastname,email,BD,address,phonenumber);
  }}
  id="editmodal"
    >
    <div className="flex flex-col space-y-4 ...">
          <input type="text" placeholder={'  '+state.user.family_name} className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249);"
            readOnly
            value={lastname}
            

          />

          <input type="text "placeholder={'  '+state.user.given_name} className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249);"
           value={lastname}
           readOnly
           />

          <input type="text " placeholder={'  '+state.user.email} className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249);"
           value={email}
           readOnly
           
          />

          <input type="text" placeholder="  Votre numéro de téléphone " className=" text-xs h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249)"
             
             value={phonenumber}
             onChange={(e) => {
            setphone(e.target.value);
            }}
          />

          <input type="date" placeholder="  Date de naissance" className="text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249)"
           value={BD}
           onChange={(e) => {
          setBD(e.target.value);
          }}
          />

          <input type="text" placeholder="  Votre adresse " className=" text-xs  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px ; border-slate-300	border-color: rgb(203 213 225) ; bg-slate-100	background-color: rgb(241 245 249)"
           value={address}
           onChange={(e) => {
          setadd(e.target.value);
          }}
          />
          
          
                    <button className="login-button bg-blue-500 text-white  h-11	height: 2.75rem; w-48	width: 12rem;  rounded-2xl border-radius: 15px ;border-width: 1px; " form='editmodal'
                        
                    >
                        Add
                    </button>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        
                    >
                        Close
                    </button>
    </div>
    </form>
    
          < img  src={ill} className='position-[relative] pt-[5%] pl-[20%] w-[70%] h-[70%]' alt="illustration" />
          <p className="  text-3xl text-black fixed top-[3%] pl-[270px] font-size-[px] ">Trouvez tout ce qui vous interésse avec une meilleure expérience !  </p>
          
    </div>
    
    
    
  );
}


export default InfoPage;