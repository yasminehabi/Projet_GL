
import {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import jwt_decode from  "jwt-decode";
import { createSearchParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation,Navigate } from 'react-router-dom';
import AddUser from './AddUser';
import AjouterAnn from './AjouterAnn';

export default function Verify() {
  const [userExists,setUserExixts]=useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  //const location = useLocation()
  //const data  = location.state
  const [notFound,setnotFound]=useState('');
  
  console.log("verify",state);
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/adduser/');
  };
  const openprofile=(id) =>{
    navigate({pathname:"/adduser",search:createSearchParams({
        id:"hello"
    }).toString()});
  };
  useEffect(() =>{
   
    console.log('Fetching...');
    setUserExixts(null)
    fetch('http://127.0.0.1:8000/api/connect/'+state.user.email
    )
    .then((response) =>{
        if(response.status === 404) {
            setnotFound(true);
        }
        
        return response.json()
    }
    )
    .then((data) =>{
        console.log("data",data);
        setUserExixts(data);
        console.log("userExists",userExists);
    })
    .catch((e) =>{
        console.log(e);

    });
} ,[]);


  
  


 return (
    <>
      
      {notFound ? <AddUser/> :<AjouterAnn/>}
      
      

    </>
  );
}


