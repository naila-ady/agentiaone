import React from 'react'
import { CircleCheck  } from 'lucide-react'

const ChoosePlan = () => {
  return (
    <div className='bg-black'>
        <section className="text-[#ffffff] body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-2/3 mx-auto flex flex-col text-center w-full mb-20">
     <h1 className=" text-5xl font-bold font-sans mb-4 text-purple-600">
     Choose Your Plan
      </h1>
          <p className="lg:w-2/3 mx-auto  text-3xl leading-7 text-[#9CA3AF] font-sans">
      Scale your AI capabilities with our flexible pricing
</p>
    </div>
    {/* box1 */}
    <div className="flex flex-wrap -m-4">
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full ">
        <div className="h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden border-purple-200
         hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[#9333ea]">
          <h2 className="text-3xl mb-1 font-bold text-[#ffffff]">
          Starter
          </h2>
          <h1 className="text-4xl text-[#ffffff] pb-4 mb-4 border-b border-gray-200 leading-none">
          $499
          <span className="text-xl text-[#ffffff]">
          /month
          </span>

          </h1>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <CircleCheck className='text-purple-500 ' />
            </span>
            2 AI Agent Instances

          </p>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <CircleCheck className='text-purple-500 ' />
            </span>
            Basic Neural Processing

          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <CircleCheck className='text-purple-500 '/>
            </span>
            24/7 Support
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <CircleCheck className='text-purple-500 ' />
            </span>
            Weekly Analytics
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <CircleCheck className='text-purple-500 ' />
            </span>
            Basic Integration Support
          </p>
                   <button className="flex items-center mt-auto text-white text-xl bg-black\/50 border-2 py-2
                   border-purple-500/30 px-4 w-full focus:outline-none
transform hover:scale-105  transition-transform duration-300 ease-in-out hover:opacity-50 rounded">
            Get Started
                      </button>
         
        </div>
      </div>

      {/* box2 */}
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full  ">
        <div className="h-full bg-gradient-to-r from-purple-900 to-blue-900 p-6 rounded-lg border-2
         border-indigo-500 flex flex-col relative transform hover:scale-105 ease-in-out duration-300">
          
          <h2 className="text-3xl mb-1 font-bold text-[#ffffff]">
          Professional
          </h2>
          <h1 className="text-4xl text-[#ffffff] leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            $999
            <span className="text-xl text-[#ffffff]">
          /month
          </span>
           
          </h1>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />
          
              </span>
               10 AI Agent Instances
          </p>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Advanced Neural Networks
          </p>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <CircleCheck className='text-purple-500 ' />
    
                          </span>
                          Priority Support
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center white rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Real-time Analytics
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Custom Integration
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            API Access
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Advanced Security
          </p>
          <button className="flex text-xl items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full 
          focus:outline-none hover:bg-indigo-600 rounded">
           Get Started
          </button>
                  </div>
      </div>
      {/* box3*/}
      <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden
                 hover:border-purple-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[#9333ea]">
          
          <h2 className="text-3xl mb-1 font-bold text-[#ffffff]">
          Enterprise
          </h2>
          <h1 className="text-4xl font-extrabold text-[#ffffff] leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            
                $Custom
            
           
          </h1>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />
          
              </span>
              Unlimited Agents
          </p>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Full Neural Suite

          </p>
          <p className="flex items-center text-[#ffffff] mb-2">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <CircleCheck className='text-purple-500 ' />
    
                          </span>
                          Dedicated Support Team

          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Advanced Analytics Dashboard

          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-centerrounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Custom Integration
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Custom Development
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Full API Access
          </p>
          <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Enterprise Security
            </p>
            <p className="flex items-center text-[#ffffff] mb-6">
            <span className="w-6 h-6 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <CircleCheck className='text-purple-500 ' />

            </span>
            Custom Training
          </p>          
          <button className="flex items-center mt-auto text-white text-xl bg-black\/50 border-2 py-2
                   border-purple-500/30 px-4 w-full focus:outline-none
transform hover:scale-105  transition-transform duration-300 ease-in-out hover:opacity-50 rounded">
        
           Get Started
          </button>
                  </div>
      </div>
      
      
            </div>

  </div>
  </div>
</section>

    </div>
  )
}

export default ChoosePlan









