

import React from 'react'
import { Github, Linkedin, Twitter, Mail, Earth } from 'lucide-react'
import Link from 'next/link'

const GetInTouch = () => {
  return (
    
      <section className="text-[#ffffff] body-font overflow-hidden  bg-black ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-2/3 mx-auto flex flex-col text-center w-full">
            <h1 className="text-5xl font-bold font-sans mb-4 text-purple-600">
              Get in Touch
            </h1>
            <p className="lg:w-2/3 mx-auto text-2xl leading-4 text-[#9CA3AF] font-sans">
              Ready to transform your business with AI?
            </p>
          </div>
        </div>

        <div className="container px-5 mx-auto flex flex-wrap justify-center ">
          {/* Left Side: Contact Information and Social Media */}
          <div className="lg:w-2/5 md:w-1/2 flex flex-col">
            <h1 className="title-font font-medium text-3xl py-6 text-[#ffffff]">
              Contact Information
            </h1>
            <p className="leading-relaxed mt-4 inline-flex gap-4">
              <Mail className='text-purple-500 w-6 h-6' />
              contact@agentiaworld.com
            </p>
            <p className="leading-relaxed mt-4 inline-flex gap-4">
              <Earth className='text-purple-500 w-6 h-6' />
              www.agentiaworld.com
            </p>

            {/* Social Media Links */}
            <div className="flex py-8 gap-5">
              <div className="text-3xl">
                <Link href={"#"} className="ml-3 text-[#e5e7eb]">
                  <Github />
                </Link>
              </div>
              <div className="text-3xl">
                <Link href={"#"} className="ml-3 text-[#e5e7eb]">
                  <Linkedin />
                </Link>
              </div>
              <div className="text-3xl">
                <Link href={"#"} className="ml-3 text-[#e5e7eb]">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/5 md:w-2/3 flex flex-col w-full">
            {/* Form Box */}
            <div className="rounded-lg p-6 flex flex-col gap-8  ">
              <div className='flex flex-col sm:flex-row gap-6'>
                <div className="max-w-[295px] h-12 relative mb-4 w-full">
                                    <input
                   placeholder='First Name'
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full bg-[#FFFFFF0D] rounded border text-[#ffffff] border-gray-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4 max-w-[295px] h-12">
                 
                  <input
                   placeholder='Last Name'
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full bg-[#FFFFFF0D] rounded border border-gray-900 text-[#ffffff] text-base  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div> 

              <div className="max-w-[415px] relative mb-4 ">
                              
                <input
                placeholder='Email'
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded bg-[#FFFFFF0D] border border-gray-900 text-base outline-none text-[#ffffff] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="max-w-[415px] relative mb-4">
                                <textarea
                placeholder='Your Message'
                  id="text"
                  name="text"
                  className="w-full rounded bg-[#FFFFFF0D] border border-gray-900 text-base outline-none text-[#ffffff] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button className="text-white  h-[48px] bg-indigo-500 border-0 py-2 
              focus:outline-none hover:bg-indigo-600 rounded text-xl">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default GetInTouch
