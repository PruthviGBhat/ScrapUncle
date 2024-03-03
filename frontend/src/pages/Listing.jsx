import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ImBin2 } from "react-icons/im";

const Listing = () => {
    const [userListings, setUserListings] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    let navigate = useNavigate()
    const { id } = useParams();
    const handleListing = async () => {
        try { 
          const res = await fetch(`/api/user/listings/${currentUser._id}`);
          const data = await res.json();
          if (data.success === false) {
            return;
          }
          setUserListings(data);
          toast.info('Your listings have been loaded below!',{position:"top-center"});
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
    <div className=" justify-center items-center">
    <Link to="/create-listing"><button type="submit" className="my-5 w-1/2 px-5 py-2.5 mx-80 text-white bg-cyan-700 font-medium rounded-lg text-sm text-center">Schedule A Pickup</button></Link>
            <button  className="w-1/2 text-white bg-black font-medium rounded-lg text-sm mx-80 px-5 py-2.5 text-center" onClick={handleListing}>Show My Listing</button>
    </div>
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

export default Listing
