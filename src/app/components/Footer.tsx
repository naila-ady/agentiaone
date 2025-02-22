import { Bot } from "lucide-react";
import { Github, Linkedin, Twitter, Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-5 sm:px-8 md:px-12 lg:px-16  border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Company Info */}
        <div className="flex flex-col lg:w-1/3">
          <div className="justify-center items-center px-2 py-4 gap-2">
            <div className="inline-flex items-center">
              <h1>
                <Bot className="w-8 h-8 text-purple-500 text-xl" />
              </h1>
              <h1 className="text-xl font-bold text-[#fffffF] font-serif">
                Agentia World
              </h1>
            </div>

            <div className="font-serif font-medium text-lg text-[#9CA3AF]">
              <p>
                Next-generation AI agents powering the future of enterprise
                intelligence.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex mt-4 gap-5">
            <div className="text-3xl">
              <Link href={"https://github.com/panaversity"} className="ml-3 text-[#e5e7eb]">
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

        {/* Links */}
        <div className="flex flex-col lg:w-1/3">
          <h3 className="text-lg font-medium mb-4 text-[#FFFFFF]">Product</h3>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Features
            </Link>
            <Link
              href="#ChoosePlan"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Price
            </Link>
            <Link
              href="#Features"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Documentation
            </Link>
            <Link
              href="#AdvancedAi"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Api
            </Link>
          </nav>
        </div>

        {/* Company */}
        <div className="flex flex-col lg:w-1/3">
          <h3 className="text-lg font-medium mb-4 text-[#FFFFFF]">Company</h3>
          <nav className="flex flex-col gap-4">
            <Link
              href="#Features"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              About
            </Link>
            <Link
              href="#AdvancedAi"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Blog
            </Link>
            <Link
              href="#Aisolutions"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Career
            </Link>
            <Link
              href="#Contact"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="flex flex-col lg:w-1/3">
          <h3 className="text-lg font-medium mb-4 text-[#FFFFFF]">Legal</h3>
          <nav className="flex flex-col gap-4">
            <Link
              href="#Features"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Privacy
            </Link>
            <Link
              href="#ChoosePlan"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Terms
            </Link>
            <Link
              href="#Aisolutions"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Security
            </Link>
            <Link
              href="/Contact"
              className="text-sm text-[#9CA3AF] hover:text-purple-300"
            >
              Compliance
            </Link>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 inline-flex text-sm text-[#9CA3AF] justify-center">
        <Copyright />
        <p className="text-sm text-[#9CA3AF]">
          2025 Agentia World. Powered by Panaversity. All rights reserved.<br/>
          Developer:Naila Adnan
        </p>
      </div>
    </footer>
  );
}
