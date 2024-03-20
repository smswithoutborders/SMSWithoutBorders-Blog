import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";


export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
         <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/">
        
            <img src="/assets/SWOB.png" alt="swob" className="h-10 lg:h-12 mr-2" />
         
        </Link>
        <h3 className="text-lg font-bold">{CMS_NAME}</h3>
      </div>
      <div className="hidden md:block">
        <Link href="/" className="ml-4">Home
        </Link>
        <Link href="/about" className="ml-4">About
        </Link>

        <Link href="/contact" className="ml-4">Contact
        </Link>
      </div>
    </nav>
    </section>
  );
}
