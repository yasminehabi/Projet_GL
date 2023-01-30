import { useLocation } from "react-router-dom";

const Navbar = () => {
  
 return ( 
  <nav class="flex p-2 shadow-md w-full min-w-fit m-y-0 m-x-auto items-center border-b border-grey-500 ">
    
    <div class='flex flex-row space-x-10'>
    <h1 class='text-blue-400  text-4xl sm:text-5xl font-body pl-1 pt-1 sm:pl-5 '> FindIn </h1>
   <button class='flex flex-row items-center rounded-md bg-blue-300 font-bold py-0.7 my-2.5 px-2  sm:px-3  cursor-pointer text-white text-xs drop-shadow-lg sm:text-base  '>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
   <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
   </svg>

    déposer Annonce</button>
    </div>
   
   <div class="ml-4  flex flex-row sm:ml-auto ">
   <div class="flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
   </svg>
    <a href="/" class='text-black text-xs  sm:text-base '>Mes notifications</a>
    </div> 

   <div class="flex flex-col items-center">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"   stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
   </svg>
   <a href="/create" class='ml-5 text-black text-xs sm:text-base '>Favoris</a>
   </div>

   <div class="flex flex-col items-center">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
   </svg>
   <a href="/Profil" class='ml-5 text-black text-xs sm:text-base pr-1.5'>Mon profil</a>
   </div>
    
    
   
   


   </div>
  </nav>
  );
}
 
export default Navbar;