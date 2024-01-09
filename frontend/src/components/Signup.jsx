import { useFormik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(4,'Name is too short'),
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().required('Password is required').min(8,'Password is too short'),
//   .matches(/[a-zA-Z]\d/, 'password must include uppercase and lowercase letter'),
   confirm:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('confirm password is required')
});

const Signup = () => {

  const navigate = useNavigate();

    const signupForm = useFormik({
        initialValues:{
            name:'',
            email: '',
            password: '',
            confirm: ''
        },
        onSubmit:async (values,{setSubmitting,resetForm})=>{
            console.log(values);

            setSubmitting(false);
            const res = await fetch('http://localhost:3000/user/add',{
              method:'POST',
              body:JSON.stringify(values),
              headers:{
                'Content-Type':'application/json'
              }
            })
            setSubmitting(true);
            if(res.status===200){
              enqueueSnackbar('Register Successfully', {variant:'success'})
              resetForm();
              navigate('/signin');
            }
            else{
              enqueueSnackbar('Something went Wrong', {variant:'error'})
            }
        },
        validationSchema:SignupSchema
    })


  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={signupForm.handleSubmit}>
        <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mukesh Khanna"
              required=""
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
            />
            <span className='ms-4 fs-6 text-red-400'>{signupForm.touched.name && signupForm.errors.name}</span>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="mukesh@gmail.com"
              required=""
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
            />
            <span className='ms-4 fs-6 text-red-400'>{signupForm.touched.email && signupForm.errors.email}</span>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
            />
            <span className='ms-4 fs-6 text-red-400'>{signupForm.touched.password &&  signupForm.errors.password}</span>
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={signupForm.handleChange}
              value={signupForm.values.confirm}
            />
            <span className='ms-4 fs-6 text-red-400'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
          </div>
          {/* <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div> */}
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <NavLink to='/signin'
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Signup