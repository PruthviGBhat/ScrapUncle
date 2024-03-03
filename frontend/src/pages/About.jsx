import React from 'react'
import png18 from '../images/png18.jpg';
import png19 from '../images/png19.jpg';
import png20 from '../images/png20.jpg';
import png17 from '../images/png17.jpeg';
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <>
       <section class="text-black body-font">
   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
     <div class="lg:w-1/2 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Handovering it.
         <br class="hidden lg:inline-block" />
       </h1>
       <p class="mb-8 leading-relaxed">After diligently collecting one ton of waste, we transport it to a specialized refining company located in New Zealand. There, the waste will undergo a
        meticulous process to extract valuable resources and ensure responsible disposal.</p>
       
     </div>
     <div class="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
       <img class="w-3/4  m-auto object-center rounded h-full border-8 nannashadow" alt="hero" src={png18} />
     </div>
   </div>
 </section>
    <section class="text-black body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
        <img class="w-3/4 m-auto object-center rounded h-full border-2 nannashadow" alt="hero" src={png19} />
      </div>
      <div class="lg:w-1/2 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Skilled Professionals.
          <br class="hidden lg:inline-block" />
        </h1>
        <p class="mb-8 leading-relaxed">In the hands of skilled professionals, the waste undergoes a transformation. Advanced technology extracts hidden potential, breathing new life into what was once discarded. Here, experience meets innovation,
        ensuring each discarded item finds a responsible second act.</p>     
      </div>
    </div>
  </section>

  <section class="text-black body-font">
   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
     <div class="lg:w-1/2 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Responsible  Disposal.
         <br class="hidden lg:inline-block" />
       </h1>
       <p class="mb-8 leading-relaxed">Responsible recycling starts here. We ensure your waste is processed safely and sustainably, minimizing environmental impact and promoting a greener future.</p>
       
     </div>
     <div class="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
       <img class="w-3/4  m-auto object-center rounded h-full border-8 nannashadow" alt="hero" src={png17} />
     </div>
   </div>
 </section>
 <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3  sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">123.7K</h2>
        <p class="leading-relaxed">Users base</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">412</h2>
        <p class="leading-relaxed">Partner Companies</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">4876k</h2>
        <p class="leading-relaxed">Successful Transactions</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="flex items-center gap-3 title-font font-sm text-3xl text-gray-900">4.8<FaStar className="text-base"/></h2>
        <p class="leading-relaxed">Customer Ratings</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-5/6 h-full" src={png20} alt="stats"/>
    </div>
  </div>
</section>
   </>
  )
}

export default About
