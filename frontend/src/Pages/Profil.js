//import Navbar from '../components/Navbar';
import { useState,useEffect  } from 'react';
import Ellipse1 from '../images/Ellipse1.png'
import Mesann from '../Components/Mesann';


export default function Profil(props) {
 //const [Annonces,setAnnonces] = useState(
  //[{title :'My new website1',body :'lorum ipsum',author:'mario', id : 1 ,price:'5euro'},{title :'My new website2',body :'lorum ipsum',author:'juini', id : 2,price:'5euro' },{title :'My new website3',body :'lorum ipsum',author:'mario', id : 3,price:'5euro', }]
  //);
  const [Annonces, setAnnonces] = useState();
  const [user, setuser] = useState('');

  useEffect(() =>{
   console.log('Fetching...');
   fetch('http://127.0.0.1:8000/api/connect/'+props.state)
   .then((response) =>response.json())
   .then((data) =>{
       console.log(data);
       setuser(data.user);
       console.log("User profil",user)
   });
} ,[]);

  useEffect(() =>{
   console.log('Fetching...');
   fetch('http://127.0.0.1:8000/api/annonces/'+props.state)
   .then((response) =>response.json())
   .then((data) =>{
       console.log(data);
       setAnnonces(data.annonces);
       console.log("Annonces",Annonces)
   });
} ,[]);
  //<Navbar/>
   
  const handleDelete =(id)=>{
     const newAnnonces = Annonces.filter(Annonce => Annonce.id !== id);
     setAnnonces(newAnnonces);
  }

return(
 <div class='w-full h-screen bg-white '>
   
   
   <div class=' flex flex-row w-full bg-zinc-300 h-48 shadow-md border-b border-grey-500 drop-shadow-lg'>
    <div class='flex flex-row w-full h-40  mt-28  '>
    
     <img src={Ellipse1} class=' ml-2 sm:ml-20'></img>
     <div class='flex flex-col ml-4 mt-1  '>
     <h1 class='text-blue-400  '>{user.name }, {user.lastname}</h1>
     <p class='text-blue-400 font-bold text-xl'>{user.phonenumber},{user.useraddress} <br /> {user.email}</p>
     </div>
     <button class='rounded-md bg-blue-300 font-bold text-white text-xs drop-shadow-lg sm:text-base h-10 w-40 ml-2 sm:ml-[13%] lg:ml-[40%] 
     xl:ml-[55%] 
     mt-24'>Modifier profil</button>
      
    </div>

   </div>
    <div class='mt-28 mx-6  mb-6 '>
    <Mesann Annonces={Annonces} title='Mes Annonces' handleDelete={handleDelete} email={props.state}/>
    </div>


   

 </div>
);

}

