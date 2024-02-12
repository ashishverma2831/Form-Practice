// import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, } from 'firebase/auth'
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {

    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth,provider);
            console.log(result);
            console.log(result.user.displayName);

            const res = await fetch('http://localhost:3000/user/oauth',{
                method:'POST',
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await res.json();
            // console.log("Hello"+data); 
            if(res.status===200){
                console.log('Register Successfully');
                navigate('/home');
            }
            else{
                console.log('Something went Wrong');
            }
        } catch (error) {
            console.log('Error in Google Signin', error);
        }
    }

  return (
    <>
        <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white w-full rounded-lg py-2 hover:opacity-90'>Connect with Google</button>
    </>
  )
}

export default OAuth