// import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, } from 'firebase/auth'
import { app } from '../firebase';

const OAuth = () => {

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth,provider);
            console.log(result);
            console.log(result.user.displayName);

            const res = await fetch('http://localhost:3000/user/add',{
                method:'POST',
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await res.json();
            console.log(data);
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