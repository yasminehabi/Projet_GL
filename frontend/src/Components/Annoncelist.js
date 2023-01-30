import { useNavigate } from 'react-router-dom';
import '../../src/App.css'




const Annoncelist = ({Annonces,title,handleDelete} ) => {
   
  const navigate = useNavigate();


 return ( 
  <div >
   <h1 class='font-body text-blue-400'>{title}</h1>
   <div class='mt-3 grid lg:grid-cols-3 auto-cols-max gap-8'> 
   {Annonces.map((Annonce) => (
    <div class=' flex flex-row bg-grey-50 rounded overflow-hidden  border-y-2 border-x-2 border-grey-100 shadow-md relative hover:shadow-xl ' key={Annonce.id} onClick={()=>{navigate('/AfficherAnnonce',{state:{Annonce}})}}>
     <img src={require(`.${Annonce.image_url.substring(21,Annonce.image_url.length)}`)}  alt="image"class='w-32 h-full sm:w-48 object-cover '></img>
     
     <div class='m-2 space-y-0'>
     <p class='text-xl text-blue-400 font-bold'>{Annonce.titreAnn}</p>
     <p class='text-sm text-blue-400 font-bold'>{Annonce.tarif}</p>
    <p class='font-bold'>Par : {Annonce.annonceur}</p>
    <p class='font-bold'>{Annonce.Description}</p>
    <p class='font-bold'>{Annonce.date}</p>
     
   <button className='fav' class='bg-blue-300 rounded-md ml-40 px-1' onClick={() => {
    fetch('http://127.0.0.1:8000/api/annfav/create/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        User: 1,//******************************************************************** */
        titreAnnfav: Annonce.id
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
     </svg>
     </button>
     <button class='bg-blue-300 rounded-md ml-1 px-1' >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
     </svg>


     </button>

     </div>
    
    </div>
    ))
   }
   </div>
  </div>
 );
}
 
export default Annoncelist;