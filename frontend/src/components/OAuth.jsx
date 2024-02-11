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