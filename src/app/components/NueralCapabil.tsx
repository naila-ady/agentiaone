import React from 'react'
import { Brain ,MessageSquare ,ChevronsRight ,Shield } from 'lucide-react'

const NueralCapabilities = () => {
  return (
    
  
<section className="text-gray-600 body-font bg-black" id="Features">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-2/3 mx-auto flex flex-col text-center w-full mb-20">
     <h1 className=" text-5xl font-bold font-sans mb-4 text-purple-600">
     Neural Capabilities

      </h1>
      

      <p className="lg:w-2/3 mx-auto  text-3xl leading-7 text-[#9CA3AF] font-sans">
      Powered by next-generation artificial intelligence

</p>
    </div>

    {/* card sections */}
     <div className="flex flex-wrap -m-4 text-center">
       {/* 1st box */}
    <div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out 
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <Brain className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start ">Autonomous Learning
    </h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning


    </p>
  </div>
</div>
  {/* 2nd box */}
<div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out 
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <MessageSquare  className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start "> Multi-Modal Intelligence
    </h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Advanced agents capable of processing text, voice, and visual data for comprehensive understanding


    </p>
  </div>
</div>
{/* 3rd box */}
<div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out 
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
     transition-transform duration-300 ease-in-out hover:rotate-45">
        <ChevronsRight className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start ">Cognitive Integration</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Seamless integration with existing systems through advanced cognitive APIs and neural bridges
    </p>
  </div>
</div>
{/* 4th box */}
     
      <div className="p-4 xl:w-1/4  sm:w-1/2 w-full">
  <div className="border-2 p-6 rounded-xl shadow-lg hover:shadow-xl shadow-transparent ease-in-out 
    border-purple-500 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform
     hover:scale-105 ">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white rounded-xl 
      transition-transform duration-300 ease-in-out hover:rotate-45">
        <Shield className="w-8 h-8"/>
      </div>
    </div>
    <h2 className="font-sans font-semibold text-2xl text-[#FFFFFF] text-start ">Ethical AI Framework</h2>
    <p className="leading-relaxed title-font font-semibold text-md text-[#FFFFFF] text-start mt-2">
    Built-in ethical guidelines and safety protocols ensuring responsible AI deployment


    </p>
  </div>
</div>


    </div>
  </div>
  

</section>
)
}

export default NueralCapabilities