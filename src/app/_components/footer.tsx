import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t text-white border-neutral-200 bg-gray-900">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <h3 className="text-3l font-bold leading-tight text-center py-5 lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            SMSWithoutBorders Blog
          </h3>


          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-3 lg:w-1/2">
          <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="25px" className="m-2 mx-3 rounded hover:bg-white hover:blue text-white" />
        </a>

        <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size="25px" className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"/>
          </a>

          <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target="_blank" rel="noopener noreferrer">
          <FaGithub size="25px" className="m-2 mx-3 rounded hover:bg-white hover:blue text-white"/>
          </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
