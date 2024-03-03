import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import png4 from '../images/png4.png';
import { toast } from 'react-toastify';

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    address: '',
    wastetype: '',
    date: '',
    condition: '',
  });
  

  const handleChange = (e) => {
    {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const res = await fetch('/api/listing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
     
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${currentUser._id}`);
      toast.success('Pickup Scheduled!!!!', {
        position: "top-center"});
    } catch (error) {
      setError(error.message);
     
    }
  };
  
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mt-10">
    <div className="text-black p-5 w-full lg:w-2/3 ">
      <h1 className="text-black font-bold text-2xl text-center">Create Listing</h1>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row mb-2 border-solid rounded-md gap-y-4 lg:gap-x-4">
        <div className="flex flex-col w-5/6 lg:w-1/2 mx-5">
          <label htmlFor="name" className="mt-8 mb-2">Full Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className=" border-black border-2 text-black rounded-xl p-2"/>
          
          <label htmlFor="address" className="mt-8 mb-2">Address</label>
          <input type="text" id="address" name="address" onChange={handleChange} value={formData.address} className=" border-black border-2 text-black rounded-xl p-2"/>
          
          <label htmlFor="phonenumber" className="mt-8 mb-2">Phone Number</label>
          <input type="text" id="phonenumber" name="phonenumber" onChange={handleChange} value={formData.phonenumber} className=" border-black border-2 text-black rounded-xl p-2" />
          <button type="submit" className="bg-yellow-300 text-black rounded-lg p-2 mt-10">Schedule A Pickup</button>
        </div>
        <div className="flex flex-col w-5/6 lg:w-1/2 mx-5">
          <label htmlFor="wastetype" className="mt-8 mb-2">Waste Type</label>
          <select id="wastetype" onChange={handleChange} value={formData.wastetype} className=" border-black border-2 text-black rounded-xl p-2">
            <option value="ewaste" >E-Waste</option>
            <option value="plastics">Plastics</option>
            <option value="metals" >Metals</option>
            <option value="glass">Glass</option>
            <option value="paper">Paper</option>
            <option value="clothing">Clothings</option>
          </select>
          
          <label htmlFor="date" className="mt-8 mb-2">Date</label>
          <input type="date" id="date" onChange={handleChange} name="date" value={formData.date} className=" border-black border-2 text-black rounded-xl p-2"/>
          
          <label htmlFor="condition" className="mt-8 mb-2">Condition</label>
          <select id="condition" onChange={handleChange} value={formData.condition} className=" border-black border-2 text-black rounded-xl p-2">
            <option value="new">New</option>
            <option value="good">Good</option>
            <option value="bad" >Bad</option>
            <option value="damaged">Damaged</option>
          </select>
        </div>
        <div >
          
        </div>
      </form>
    </div>
    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
      <img src={png4} alt="" className="w-full"/>
    </div>
  </section>
  
  );
}
