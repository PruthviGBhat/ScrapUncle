import React from 'react'
import png8 from '../images/png8.jpeg';
import png5 from '../images/png5.png';
import png7 from '../images/png7.png';
import png1 from '../images/png1.png';
import png11 from '../images/png11.png';
import png12 from '../images/png12.png';
import png13 from '../images/png13.png';
import png14 from '../images/png14.png';
import png15 from '../images/png15.png';
import png16 from '../images/png16.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Waste not, want not. We collect it!</h1>
        <p class="mb-8 leading-relaxed">Turn your trash into a cleaner future,Responsible waste collection, one bin at a time.<br/>
         Recycle right, make a difference with every pickup.</p>
        <div class="flex w-full md:justify-start justify-center items-end">
        <Link to="/create-listing"><button class="inline-flex my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Schedule A Pickup</button></Link>
        </div>
       
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded-3xl" alt="hero" src={png8}/>
      </div>
    </div>
  </section>
  <div class="flex justify-center">
   <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
       <div class="overflow-hidden w-3/4 md:w-1/3  rounded-xl m-4 shadow-sm flex flex-col justify-center nannashadow nannascale border-2">
           <div class="h-48 w-full overflow-hidden"> <img src={png5} alt="" class="object-contain w-full  h-full" /> </div>
           <div class="font-bold text-lg text-black m-2"> Choose Green, Choose Clean: Our Eco-Friendly Commitment</div>
           <div class="text-gray-500 m-2 text-sm"><a href="">We understand the impact our actions have on the planet. That's why we prioritize eco-friendly practices in everything we do, from using recycled materials in our trucks 
           to partnering with sustainable waste processing facilities. By choosing us, you're choosing a greener future.</a></div>
       </div>
       <div class="overflow-hidden w-3/4 md:w-1/3  rounded-xl m-4 shadow-sm flex flex-col justify-center nannashadow nannascale border-2">
           <div class="h-48 w-full overflow-hidden"> <img src={png7} alt="" class="object-contain w-full h-full" /> </div>
           <div class="font-bold text-lg text-black m-2">Recycle Right, Live Light: Transforming Waste into Resources</div>
           <div class="text-gray-500 m-2 text-sm"><a href="">Recycling isn't just a trend, it's a necessity. By properly sorting and recycling your waste, you're conserving valuable resources, reducing greenhouse gas emissions, and creating new products. We make recycling easy with clear instructions and convenient pick-up options.</a></div>
       </div>
       <div class="overflow-hidden w-3/4 md:w-1/3  rounded-xl m-4 shadow-sm flex flex-col justify-center nannashadow nannascale border-2">
           <div class="h-48 w-full overflow-hidden"> <img src={png1} alt="" class="object-contain w-full h-full" /> </div>
           <div class="font-bold text-lg text-black m-2"> Don't Trash Our Future: The Dangers of Improper Waste Disposal</div>
           <div class="text-gray-500 m-2 text-sm"><a href=""> Throwing away hazardous materials or dumping waste illegally can have devastating consequences for our environment and health. Toxic chemicals can contaminate soil and water, harming wildlife and ecosystems. Improper disposal can also lead to fires, explosions</a></div>
       </div>
   </div>
</div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 className="justify-center flex items-center text-3xl font-bold mb-5">How it works?</h1>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative nannashadow ">
          <img alt="gallery" class="absolute inset-0 object-center h-full object-contain  w-1/2" src={png12}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:bg-green-700 hover:text-white">
            <h2 class="tracking-widest text-sm title-font font-medium hover:text-white mb-1">Step-1</h2>
            <h1 class="title-font text-lg font-medium hover:text-white mb-3">Schedule  A Pickup</h1>
            <p class="leading-relaxed">
Let us handle the haul! Schedule a convenient pickup for your recyclable waste - we'll be there in a flash.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative nannashadow ">
          <img alt="gallery" class="absolute inset-0 h-full object-contain object-center w-1/2" src={png11} />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:bg-green-700 hover:text-white">
            <h2 class="tracking-widest text-sm title-font font-medium hover:text-white mb-1">Step-2</h2>
            <h1 class="title-font text-lg font-medium hover:text-white mb-3">Pickup at your location.</h1>
            <p class="leading-relaxed">Skip the hassle! We offer pickups directly at your location, making recycling a breeze.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative nannashadow ">
          <img alt="gallery" class="absolute inset-0 h-full object-contain object-center w-1/2" src={png13}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:bg-green-700 hover:text-white">
            <h2 class="tracking-widest text-sm title-font font-medium hover:text-white mb-1">Step-3</h2>
            <h1 class="title-font text-lg font-medium hover:text-white mb-3">Receive payments</h1>
            <p class="leading-relaxed">
             Turn your recyclables into rewards! We offer cash payouts for accepted materials</p>
          </div>
        </div>
      </div>
      
  
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="justify-center flex items-center text-3xl font-bold mb-5">Why Us?</h1>
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
        <div className="w-3/4 md:w-1/3 rounded-xl m-4 shadow-sm flex flex-col justify-center nannashadow nannascale border-2">
          <div className="h-48 w-full overflow-hidden">
            <img src={png14} alt="" className="object-contain w-full h-full" />
          </div>
          <div className="font-bold text-lg text-black m-2 text-center my-5">Best Rates</div>
          <div className="text-gray-500 m-2 text-sm">
            <a href="">Unlock unbeatable value with us – where scrap meets top-notch rates. Your recycling journey just got more rewarding with our best-in-class rates.We provide the best value for your scrap from our network of Recyclers.</a>
          </div>
        </div>

        <div className="w-3/4 md:w-1/3 rounded-xl m-4 shadow-sm flex flex-col justify-center nannashadow nannascale border-2">
          <div className="h-48 w-full overflow-hidden">
            <img src={png15} alt="" className="object-contain w-full h-full" />
          </div>
          <div className="font-bold text-lg text-black m-2 text-center my-5">Convenience</div>
          <div className="text-gray-500 m-2 text-sm">
            <a href="">Experience convenience redefined! Our doorstep pickup service is tailored to your schedule, making recycling effortless and stress-free. Your convenience, our commitment.</a>
          </div>
        </div>

        <div className="w-3/4 md:w-1/3 rounded-xl m-4 shadow-sm flex flex-col justify-center nannashadow nannascale border-2">
          <div className="h-48 w-full overflow-hidden">
            <img src={png16} alt="" className="object-contain w-full h-full" />
          </div>
          <div className="font-bold text-lg text-black m-2 text-center my-5">Trust</div>
          <div className="text-gray-500 m-2 text-sm">
            <a href="">Trust in excellence! Our dedicated team of trained professionals, coupled with Swapeco's Smart Weighing Scale, ensures transparency and reliability at every step. Your trust, our priority.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="mx-5 my-5">
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Waste Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Condition
                </th>
                <th scope="col" class="px-6 py-3">
                    Weight
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    E-waste
                </th>
                <td class="px-6 py-4">
                    Good
                </td>
                <td class="px-6 py-4">
                    1-KG
                </td>
                <td class="px-6 py-4">
                    $50
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Glass
                </th>
                <td class="px-6 py-4">
                    Good
                </td>
                <td class="px-6 py-4">
                    1-KG
                </td>
                <td class="px-6 py-4">
                    $10
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Metals
                </th>
                <td class="px-6 py-4">
                    Good
                </td>
                <td class="px-6 py-4">
                    1-KG
                </td>
                <td class="px-6 py-4">
                    $10
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Plastic
                </th>
                <td class="px-6 py-4">
                    Good
                </td>
                <td class="px-6 py-4">
                    1-KG
                </td>
                <td class="px-6 py-4">
                    $2
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Paper
                </th>
                <td class="px-6 py-4">
                   Good
                </td>
                <td class="px-6 py-4">
                    1-KG
                </td>
                <td class="px-6 py-4">
                    $2
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Clothing
                </th>
                <td class="px-6 py-4">
                    Good
                </td>
                <td class="px-6 py-4">
                    1-KG
                </td>
                <td class="px-6 py-4">
                    $5
                </td>
            </tr>
        </tbody>
    </table>
</div>

      </section>


  </>
  )
}

export default Home
