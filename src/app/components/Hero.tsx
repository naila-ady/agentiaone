// import React from 'react'
// import { Bot, ChevronRight } from "lucide-react"
// // import Typewriter from 'typewriter-effect'
// import dynamic from 'next/dynamic';



// const Typewriter = dynamic(() => import('typewriter-effect'), {
//   ssr: false,  // This disables server-side rendering for the Typewriter component
// });

// const Hero = () => {
//   return (
    
//    <section className=" relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black
//     to-slate-950
//     pt-20">
//     <div className=" max-w-6xl mx-auto text-center transform transition-all duration-1000
//      translate-y-0 opacity-100">
//         <div className=" inline-flex items-center space-x-2 bg-black px-4 py-2
//          rounded-full mb-6">
//         <div className=" w-2 h-2 rounded-lg bg-purple-500 animate-pulse">
//             </div>
//             <span className=" text-sm text-purple-400">POWERED BY PANAVERSITY</span>
//             </div>
//             <h1 className=" text-5xl md:text-7xl font-bold mb-8 text-blue-500">
//                 Enterprise AI Agents
//                 <span className=" block text-white mt-2">for the Future</span>
//                 </h1>
//                 <div className=" max-w-2xl mx-auto bg-black rounded-xl p-6 mb-12  border
//                  border-purple-100">
//                 <div className=" flex items-start space-x-4">
//                     <div className=" w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex 
//                     items-center justify-center">
//                         <Bot/>
//                                          </div>
//                         <div className=" flex-1 text-left">
//                             <div className=" bg-gray-800 rounded-lg p-4">
//                             <p className=" text-gray-300">
                                
//                                 Hello! I'm your AI agent. How can I enhance your business today?
//                                 <span className=" inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse">
//                                     </span>
//                                     </p>
//                                     <p className=" text-gray-300">
//                                 Let me aassist you with advance data analytics?
//                                 <span className=" inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse">
//                                     </span>
//                                     </p>
                           
//                                     </div>
//                                     </div>
//                                     </div>
//                                     </div>
//                                 <div className=" flex flex-col md:flex-row gap-6 justify-center items-center">
//                                     <button className=" group bg-gradient-to-r from-purple-600 to-blue-600
//                                      px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-all 
//                                      duration-300 transform hover:scale-105 hover:[#9333ea] flex items-center">
//                                         Deploy Your AI Agent<ChevronRight/>
//                                   </button>
//                                     <button className=" px-8 py-4 rounded-xl text-lg font-bold border
//                                      border-purple-200 hover:border-purple-500 transition-all
//                                       duration-300 hover:shadow-[#9333ea] bg-black text-[#ffffff]">
//                                         Watch Demo</button>
//                                       </div>
//                                       </div>
//             <div className=" absolute bg-purple-50 rounded-full ">

//             </div>
//             <div className="text-center lg:w-2/3 w-full">
//       <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bolder text-[#dbaca4]">
//         I'm <br/>
//                 Naila Adnan
//         <br className="hidden lg:inline-block"/>
//         <Typewriter
//   options={{
//     strings: ['Front-end Web Developer','UI & UX Designer'],
//     autoStart: true,
//     loop: true,
//   }}
// />
//       </h1>
//       </div>
                                                  
//   </section>
  
    
        
      
        
//   )
// }

// export default Hero
"use client"
import React from 'react';
import { Bot, ChevronRight } from "lucide-react";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black to-slate-950 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-black px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 rounded-lg bg-purple-500 animate-pulse"></div>
          <span className="text-sm text-purple-400">POWERED BY PANAVERSITY</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-blue-500">
          Enterprise AI Agents
          <span className="block text-white mt-2">for the Future</span>
        </h1>
        <div className="max-w-2xl mx-auto bg-black  rounded-xl p-6 mb-12 border border-purple-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex 
            items-center justify-center">
              <Bot className='text-[#ffff]'/>
            </div>
            <div className="flex-1 text-left">
              <div className="bg-gray-800 rounded-lg p-4">
              <h1 className="title-font sm:text-lg text-4xl mb-4 text-[#ffff]">
                  <Typewriter
              options={{
                strings: [ 'Hello! I m your AI agent. How can I enhance your business today?',
                    'I can help optimize your work using nueral networks.','Let me analyze you with data analytics.',
                    'Would you like to explore our AI integration solutions.' 
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
                              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg text-lg font-bold 
          hover:opacity-90 transition-all duration-300 transform hover:scale-105 inline-flex">
            Deploy Your AI Agent<ChevronRight />
          </button>
          <button className="px-8 py-4 rounded-xl text-lg font-bold border border-purple-200 hover:border-purple-500 transition-all duration-300 hover:shadow-[#9333ea] bg-black text-[#ffffff]">
            Watch Demo
          </button>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
