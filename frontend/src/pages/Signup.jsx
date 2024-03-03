import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      }); 
  } 
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          setError(data.message);
          alert(data.message);
          return;
        }
        setError(null);
        navigate('/signin')
      } catch (error) {
        setError(error.message);
        alert(error.message)
      }
  };
  return (
    <>
    <div>
      <section className=" ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     <h1 className="text-black font-bold text-3xl mb-5 ">Sign Up</h1>
      <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium  text-white">Your Username</label>
                      <input type="text"  id="username" className=" border  sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white "  required="" onChange={handleChange}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">Email</label>
                      <input type="email" id="email"  className=" border  sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white " required="" onChange={handleChange}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white"> password</label>
                      <input type="password" id="password" className=" border  sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dtext-white " required="" onChange={handleChange}/>
                  </div>
                  
                  <button className="w-full text-white bg-cyan-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?
                      <Link to='/signin'>
                      <span className="font-medium text-white hover:underline hover:text-cyan-500 ">  Login here</span>
                      </Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
      
    </div>
    </>
  )
}

export default Signup
