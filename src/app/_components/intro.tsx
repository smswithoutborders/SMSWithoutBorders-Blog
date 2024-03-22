import { CMS_NAME } from "@/lib/constants";
import { FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-16 md:mb-12">
      <img src="/assets/blog/logo.png"  alt="Logo" className="h-8 mr-2 flex" />
      <div className="flex">
        <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="25px" className="m-2 mx-3 rounded hover:bg-white hover:blue text-black" />
        </a>

        <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size="25px" className="m-2 mx-3 rounded hover:bg-white hover:blue text-black"/>
          </a>

          <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target="_blank" rel="noopener noreferrer">
          <FaGithub size="25px" className="m-2 mx-3 rounded hover:bg-white hover:blue text-black"/>
          </a>
     
          </div>
    </section>
  );
};