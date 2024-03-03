import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {updateUserSuccess, updateUserFailure , deleteUserFailure,deleteUserSuccess} from '../redux/userSlice.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import png9 from '../images/png9.jpeg';
import png10 from '../images/png10.jpg';
import { ImBin2 } from "react-icons/im";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [userListings, setUserListings] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: '',
  });
  const dispatch = useDispatch();
  let navigate = useNavigate()
  const { id } = useParams();

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`/api/user/update/${currentUser._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(updateUserFailure(data.message));
      return;
    }

    dispatch(updateUserSuccess(data));
    toast.success("updated successfully",{position:"top-center"});
  } catch (error) {
    dispatch(updateUserFailure(error.message));
  }
};
const handleDeleteUser = async () => {
  try {
    const res = await fetch(`/api/user/delete/${currentUser._id}`, {
      method: 'DELETE',
    });
    console.log(res)
    const data = await res.json();
    console.log(data)
    if (data.success === false) {
      dispatch(deleteUserFailure(data.message));
      return;
    }
    dispatch(deleteUserSuccess(data));
    toast.warn('Account Deleted Successfully!', {position: "top-center"})
  } catch (error) {
    dispatch(deleteUserFailure(error.message));
  }
};
const handleSignOut = async () => {
  try {
    const res = await fetch('/api/auth/signout');
    const data = await res.json();
    if (data.success === false) {
      dispatch(deleteUserFailure(data.message));
      return;
    }
    dispatch(deleteUserSuccess(data));
    toast.info('Logged out successfully', { position:'top-center'})
  } catch (error) {
    dispatch(deleteUserFailure(data.message));
  }
};

const handleListing = async () => {
  try { 
    const res = await fetch(`/api/user/listings/${currentUser._id}`);
    console.log(res)
    const data = await res.json();
    if (data.success === false) {
      return;
    }
    setUserListings(data);
    toast.info('Your listings have been loaded below!',{position:"top-center"});
    // navigate(`/listing/${currentUser._id}`);
  } catch (error) {
    toast.error('Error getting user listings from server: ', error);
  }
};

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
}
const handleListingDelete = async (listingId) => {
  try {
    const res = await fetch(`/api/listing/delete/${listingId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.success === false) {
      console.log(data.message);
      return;
    }

    setUserListings((prev) =>
      prev.filter((listing) => listing._id !== listingId)
    );
    toast.error('Deleted Listing',{position:"top-center"});
  } catch (error) {
    toast.error(error.message);
  }
};
  return (
    <>
<section className="flex flex-col-reverse md:flex-row justify-between items-center">
  <div className="w-full md:w-1/2">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black mb-5">
        Your Profile
      </h1>
      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 bg-gray-700 border-gray-700 nannashadow">

        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

          <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
              <input type="text" name="username" id="username" className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-800 text-white" required="" onChange={handleChange} value={formData.username} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" name="email" id="email" className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600 text-white" required="" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" name="password" id="password" className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600 text-white" required="" onChange={handleChange} />
            </div>

            <button type="submit" className="w-full text-white bg-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>

            <Link to="/create-listing"><button type="submit" className="mt-5 w-full text-white bg-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Schedule A Pickup</button></Link>
            <button  className="w-full text-cyan-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleListing}>Show My Listing</button>
            <div className="flex flex-col md:flex-row justify-between">
              <button className="text-red-600 font-bold text-sm mt-4 md:mt-0" onClick={handleDeleteUser}>Delete Account</button>
              <button className="text-red-600 font-bold text-sm mt-4 md:mt-0" onClick={handleSignOut}>Logout</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  

              
  <div className="w-full md:w-1/2">
    <img src={png10} alt="" className="w-full md:w-3/4 rounded-2xl nannashadow" />
  </div>
</section>
{userListings && userListings.length > 0 && (
  <div className='flex flex-col gap-4'>
    <h1 className='text-center mt-7 mb-7 text-3xl font-semibold'>
      Your Listings
    </h1>
    <section className="text-gray-600 body-font flex flex-col justify-center">
    <div className="flex -m-4 gap-5">
      {userListings.map((listing) => (
        <div key={listing._id} className="p-4 lg:w-1/3 md:w-full gap-40">
          <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col nannashadow ">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex flex-col  ">
              <h2 className="text-gray-900 text-xl title-font font-medium mb-3"><span>Name : </span>{listing.name}</h2>
              <p className="leading-relaxed "><span className="font-bold text-lg">Date of Delivery : </span>{formatDate(listing.date)}</p>
              <p><span className="font-bold text-lg">Condition : </span>{listing.condition}</p>
              <p><span className="font-bold text-lg">Waste Type : </span>{listing.wastetype}</p>
            </div>
            <div className="ml-10 ">
              <button className="bg-indigo-500 p-3 m-5 rounded-md text-white"  onClick={() => handleListingDelete(listing._id)}><ImBin2 /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  


  </div>
)}
    </>
  )
}

export default Profile
