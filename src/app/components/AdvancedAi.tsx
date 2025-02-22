import React from 'react'
import { Brain ,Cpu ,ChevronsLeftRight ,Earth } from 'lucide-react'

const AdvancedAi = () => {
  return (
    
  <div id="AdvancedAi">
<section className="text-gray-600 body-font bg-black ">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-2/3 mx-auto flex flex-col text-center w-full mb-20">
     <h1 className=" text-5xl font-bold font-sans mb-4 text-purple-600">
      Powered by Advanced AI
      </h1>
      

      <p className="lg:w-2/3 mx-auto text-3xl leading-7 text-[#9CA3AF] font-sans">
      Built on cutting-edge neural architectures

</p>
    </div>

    {/* card sections */}
     <div className="flex flex-wrap -m-4 text-center">
       {/* 1st box */}
    <div className="p-4  xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <Brain className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-center ">Neural Networks</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-center mt-2">
    Advanced neural architectures for complex decision making
    </p>
  </div>
</div>
  {/* 2nd box */}
<div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <Cpu className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-center "> Deep Learning</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-center mt-2">
    Sophisticated deep learning models for pattern recognition
    </p>
  </div>
</div>
{/* 3rd box */}
<div className="p-4  xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <ChevronsLeftRight className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-center ">Advanced ML</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-center mt-2">
    Cutting-edge machine learning algorithms
    </p>
  </div>
</div>
{/* 4th box */}
     
      <div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out  h-72
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
      transition-transform duration-300 ease-in-out hover:rotate-45">
        <Earth className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-center ">Global Scale</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-center mt-2">
      Distributed AI processing across global networks.
    </p>
  </div>
</div>


    </div>
  </div>
  

</section>
</div>
)
}

export default AdvancedAi