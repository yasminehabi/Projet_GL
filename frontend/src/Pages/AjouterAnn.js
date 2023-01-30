import '../App.css'
import Navbar from "../Components/Navbar";

import frame from "../images/Frame.png";
import { useState,useEffect } from 'react';
import Annoncelist from '../Components/Annoncelist';


const AjouterAnn = () => { 
    const [Annonces, setAnnonces] = useState([]);
    const [search, setSearch] = useState('');
    const [module, setModule] = useState('');
    const [wilaya, setWilaya] = useState('');
    const [commune, setCommune] = useState('');
    const [start_date, setstart_date] = useState('');
    const [end_date, setend_date] = useState('');


    const handleDelete =(id)=>{
       const newAnnonces = Annonces.filter(Annonce => Annonce.id !== id);
       setAnnonces(newAnnonces);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/Searchann/?search=${search}&module=${module}&wilaya=${wilaya}&commune=${commune}&start_date=${start_date}&end_date=${end_date}`);
            const data = await response.json();
            setAnnonces(data);
        };
        fetchData();
    }, [search, module, wilaya, commune]);
    
    return ( 

     <div className='AjouterAnn'>
         <Navbar/>

         <div class='flex max-w-full h-20 '>

          <div class='flex border rounded-md flex-row  bg-white-500 my-2   ml-3  sm:ml-[20%] sm:mr-[17%]     items-center shadow-md space-x-0' >
           <div class='flex flex-row items-center  '>
            <p class='mt-3 ml-1 pl-2 border-r bg-zinc-100 pr-1 rounded-l text-base'>Cours </p>
           <input type="text" class="border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block bg-zinc-100 w-[80%] ml-[0%] rounded-r focus:ring-1" placeholder="  Titre" onChange={(e) => setSearch(e.target.value)} />
           <input type="text" class="border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block bg-zinc-100 w-[110%]  mx-[2%] pr-5 rounded focus:ring-1" placeholder="Module" onChange={(e) => setModule(e.target.value)} />

           <input type="text" class="border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block bg-zinc-100 w-[90%]    rounded-l  focus:ring-1" placeholder=" Wilaya" onChange={(e) => setWilaya(e.target.value)}  /> 

           <input type="text" class="border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block bg-zinc-100 w-[90%] ml-0    rounded-r focus:ring-1" placeholder="Commune" onChange={(e) => setCommune(e.target.value)}/>

           <input type="text" class="border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block bg-zinc-100 w-[100%] mx-1  rounded-r focus:ring-1" placeholder="Date*2022-01-01"onChange={(e) => setstart_date(e.target.value)} />

            <input type="text" class="border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block bg-zinc-100 w-[100%] mx-1  rounded-r focus:ring-1" placeholder="Date*2023-1-31"onChange={(e) => setend_date(e.target.value)}/>

           <button class='bg-blue-300 font-bold text-white mx-4 px-3 py-1 ' onClick={() => setAnnonces([])}>Rechercher</button>
           </div> 
           </div> 
         </div>

         <div class='flex flex-row max-w-full h-70 '>
      <div class='flex flex-col items-center'>
      <img src={frame} className="w-[210px] sm:w-[250px] h-[145px] sm:h-[206px] mt-[9%] sm:mt-[0%]  ml-[25%]"  alt="" />
     <div class="flex justify-center">
         <div class="mb-3 xl:w-80 ">
         <select class="form-select form-select-sm appearance-none
            block
            w-full
            px-2
            py-2
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            ml-5
            sm:ml-9
            
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Filtrage:récents</option>
        <option value="1">Wilaya</option>
        <option value="2">Commune d'une Wilaya</option>
        <option value="3">Période entre deux dates de publication</option>
       </select>
        </div>   
    </div> 
  </div>      
        
  <p className="text-black text-2xl sm:text-4xl   font-poppins pl-[10%] sm:pl-[8%] pt-[4%] sm:pt-[5%]" > Explorer notre site , <br />
   chercher les annonces que vous avez besoin,<br />
   Déposer et gagner votre temps....  </p>
  </div>
  
         <div class='max-w-full p-5 mx-auto my-0  italic'>
         
          <Annoncelist Annonces={Annonces} title='Tous les Annonces' handleDelete={handleDelete}/>
         
          
         </div>
     </div>

     );
}
 
export default AjouterAnn;