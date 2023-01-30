import '../../src/App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState,useEffect  } from 'react';
export default function Mesann(props) {
  const [Annonces, setAnnonces] = useState();
  const [user, setuser] = useState('');
  const [image, setimage] = useState('');
  
  useEffect(()=>{
    console.log("mesann",props.email)
    console.log(props.Annonces)
  })
  

  useEffect(() =>{
   console.log('Fetching...');
   fetch('http://127.0.0.1:8000/api/annonces/'+props.email.email)
   .then((response) =>response.json())
   .then((data) =>{
       console.log(data);
       setAnnonces(data.annonces);
       console.log("Annonces mesann",Annonces)
       
       
   });
} ,[]);
   
 const Navigate = useNavigate();

 
 return ( 
  <div >
    <h1 className=' text-blue-400'>{props.title}</h1>
    <div className='mt-3 grid lg:grid-cols-2 auto-cols-max gap-6'> 
    
   {Annonces
        ? Annonces.map
        ((annonce) => {
            
            return(
                
            <div className=' flex flex-row bg-grey-50 rounded overflow-hidden  border-y-2 border-x-2 border-grey-100 shadow-md relative hover:shadow-xl ' key={annonce.id} onClick={()=>Navigate('/Affichage',{state:{annonce}}) }>
     <img src={require(`.${annonce.image_url}`)}  alt="image " class='w-32 h-full sm:w-48 object-cover '></img>
     
     
     <div className='m-4 space-y-1'>
     <p className='text-xl text-blue-400'></p>
     <p className='text-sm text-blue-400'></p>
    <p>Par : {annonce.annonceur}</p>
    <p>{annonce.tarif}</p>
    <button onClick={()=>props.handleDelete(annonce.id)}>delete Annonce</button>
       

     </div>
    
    </div>
            );
    }) : null}
    
   </div>
              
          
        
  </div>
 );
}
 
