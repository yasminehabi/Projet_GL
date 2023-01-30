import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Changeprflinf = () => { 
    const location=useLocation();
    const user=location.state.user
    const [User,setUser]=useState('');
    useEffect(() =>{
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/connect/'+user.email)
        .then((response) =>response.json())
        .then((data) =>{
            console.log(data);
            setUser(data.user);
            console.log("User profil",User)
        });
     } ,[]);

     function UpdateUser(e) {
        e.preventDefault();
        const url = 'http://127.0.0.1:8000/api/connect/' + user.email;
        console.log('To post',User);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify(User),
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
      
     


 return(
  <div class='w-full bg-white'>
   <Navbar/>
   
   <div class='ml-20 mt-20 mr-[80%] mb-20 flex flex-col space-y-16'>
   <form
                        className="w-full max-w-sm"
                        id="user"
                        onSubmit={UpdateUser}
                    >
   <textarea  class='border' type="text" 
    placeholder={User.name}
    value={User.name}
    onChange={(e) => {
        //setChanged(true);
        setUser({
        ...User,
        name: e.target.value,
        });
        }}/>

     <textarea type="text" class='border'
    placeholder={User.lastname}
    value={User.lastname}
    onChange={(e) => {
      //setChanged(true);
      
      setUser({
      ...User,
      lastname: e.target.value,
      });
      }}/>

<textarea type="text" class='border'
    placeholder={User.email}
    value={User.email}
    />
<input type="date" class='border'
    //placeholder={User.birthday}
    value={User.birthday}
    onChange={(e) => {
        //setChanged(true);
        setUser({
        ...User,
        birthday: e.target.value,
        });
        }}/>

<textarea type="text" class='border'
    placeholder={User.useraddress}
    value={User.useraddress}
    onChange={(e) => {
        //setChanged(true);
        setUser({
        ...User,
        useraddress: e.target.value,
        });
        }}/>

<textarea type="text" class='border'
    placeholder={User.phonenumber}
    value={User.phonenumber}
    onChange={(e) => {
        //setChanged(true);
        setUser({
        ...User,
        phonenumber: e.target.value,
        });
        }}/>
    

<button class='bg-blue-400 mb-10'>return</button>


   
   <input class="  text-white font-bold  h-10 px-4 pb-1 ml-5 mt-4	 w-15  rounded-2xl bg-blue-500  " type="submit"/>
   </form>
   </div>
  </div>
 );
}
export default Changeprflinf;