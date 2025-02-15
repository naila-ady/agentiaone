import React from 'react'
import Link from 'next/link'
import { Bot, Menu } from "lucide-react"
import { Button } from "@/components/ui/button";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
    return (

        //header
        <header className='max-w-[1280px] flex justify-between items-center mx-auto fixed top-0 left-0 right-0 z-50
     transition-all duration-300 bg-black/80 backdrop-blur-md shadow-lg shadow-purple-500/10'>
            {/* Agentia Ai heading */}
            <div className='max-w-[175px] flex justify-center items-center px-2 py-4 gap-2 '>
                <h1>
                    <Bot className='w-8 h-8 text-purple-500 text-xl' />
                </h1>

                <h1 className='text-xl font-bold text-[#ffffff] font-serif'>
                    Agentia World
                </h1>
            </div>

            {/* Links and Search section */}
            <div className=' flex flex-row justify-between
       px-2 ml-2  items-center '>

                {/* Links section */}
                <ul className='max-w-[600px] h-[64px] py-4 text-[16px] text-[#FFFFFF] hidden md:flex gap-2 list-none '>
                    <Link href={"/"} className="px-4 text-1xl hover:text-[#D1D5Db]">
                        Features
                    </Link>
                    <Link href={"../techonolgy"} className="px-4 text-1xl hover:text-[#D1D5Db]">
                        Techonolgy
                    </Link>
                    <Link href={"../agents"} className="px-4 text-1xl hover:text-[#D1D5Db]">
                        Agents
                    </Link>
                    <Link href={"../pricing"} className="px-4 text-1xl hover:text-[#D1D5Db]">
                        Pricing
                    </Link>
                    <Link href={"../contact"} className="px-4 text-1xl hover:text-[#D1D5Db]">
                        Contact
                    </Link>
                    <Link href={""}>
                 <Button className='max-w-[148px] h-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600
               rounded-lg font-medium hover:opacity-90 transition-all duration-300 '>
                         Launch Console
                        </Button> 
                        </Link>
                             </ul>
            </div>
            <Sheet>
                <SheetTrigger className="sm:hidden text-[#D1D5DB] ">
                    <Menu />
                </SheetTrigger>
                <SheetContent className='bg-black/80'>
                    <ul className="flex flex-col gap-4 list-none ">
                        <Link href={"/"} className="px-4 text-1xl text-purple-500 hover:text-[#D1D5Db]">
                            Features
                        </Link>
                        <Link href={"./techonology"} className="px-4 1xl text-purple-500 text-1xl hover:text-[#D1D5Db]">
                            Techonolgy
                        </Link>
                        <Link href={"../agents"} className="px-4 1xl text-purple-500 text-1xl hover:text-[#D1D5Db]">
                            Agents
                        </Link>
                        <Link href={"../pricing"} className="px-4 1xl text-purple-500 text-1xl hover:text-[#D1D5Db]">
                            Pricing
                        </Link>
                        <Link href={"./contact"} className="px-4 1xl text-purple-500 text-1xl hover:text-[#D1D5Db]">
                            Contact
                        </Link>
                <Button className='max-w-full h-12  bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 
                rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center'>
                    Launch Console
                </Button>
                    </ul>

                </SheetContent>
            </Sheet>
            <div>
            </div>
        </header >
    )

}

export default Header