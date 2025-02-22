import React from 'react'
import { Earth ,Server ,Shield } from 'lucide-react'

const Aisolutions = () => {
  return (
    
  
<section className="text-gray-600 body-font bg-black" id="Aisolutions">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-2/3 mx-auto flex flex-col text-center w-full mb-20">
     <h1 className=" text-5xl font-bold font-sans mb-4 text-purple-600">
     AI Solutions


      </h1>
      

      <p className="lg:w-2/3 mx-auto  text-3xl leading-7 text-[#9CA3AF] font-sans">
      Transforming industries with intelligent agents

</p>
    </div>

    {/* card sections */}
     <div className="flex flex-wrap -m-4 text-center ">
       {/* 1st box */}
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <Earth className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start ">Enterprise AI

    </h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Custom AI agents designed for enterprise-scale operations and decision-making




    </p>
  </div>
</div>
  {/* 2nd box */}
<div className="p-4 md:w-1/3 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <Server  className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start ">Neural Operations

    </h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Automated workflow optimization through distributed neural networks 



    </p>
  </div>
</div>
{/* 3rd box */}
<div className="p-4 md:w-1/3 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <Shield className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start ">Secure Intelligence</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Privacy-first AI solutions with military-grade security protocols
    </p>
  </div>
</div>

     
     


    </div>
  </div>
  

</section>
)
}

export default Aisolutions