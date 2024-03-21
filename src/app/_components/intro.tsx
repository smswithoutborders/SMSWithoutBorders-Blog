import { CMS_NAME } from "@/lib/constants";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-16 md:mb-12">
      <h6 className="text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">
        SMSWithoutBorders
      </h6>
      <div className="flex">
      <FaFacebook size="25px" className="m-2"/>
          <FaXTwitter size="25px" className="m-2" />
          <a
              href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              GitHub
            </a>
          </div>
    </section>
  );
}
