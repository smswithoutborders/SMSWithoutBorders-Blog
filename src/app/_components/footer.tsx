import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../globals.css";


const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Logo */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img src="./images/logo.png" alt="" className="logo-footer mb-4" />
            <div className="footer-about">
              <p>we code for the people</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="use-links">
              <li><a href="#hero"><i className="fa-solid fa-angles-right"></i> Home</a></li>
              <li><a href="#about"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
              <li><a href="blog.html"><i className="fa-solid fa-angles-right"></i> Blog </a></li>
              <li><a href="#projects"><i className="fa-solid fa-angles-right"></i> Projects</a></li>
              <li><a href="#contact"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
            </ul>
          </div>

          {/* Social Icons Follow Us */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="social-icons">
              {/* <li><a href="https://github.com/smswithoutborders" ><FontAwesomeIcon className='' icon={faGithub} size="xs" /> Github</a></li>
              <li><a href=""><FontAwesomeIcon icon={faTwitter} size="xs" /> Twitter</a></li>
              <li><a href=""><i className="fa-brands fa-linkedin-in"></i> Linkedin</a></li> */}

              <li><a href="https://github.com/smswithoutborders" className="hover:text-gray-300">Github</a></li>
               <li><a href="https://twitter.com/smswithoutborders" className="hover:text-gray-300">Twitter</a></li>   
                         {/* <li><a href="https://linkedin.com/smswithoutborders" className="hover:text-gray-300"><FontAwesomeIcon icon={faLinkedin} size="xs" />LinkedIn</a></li> */}
            </div>
          </div>

          {/* Address Section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <div className="address-links">
              <li className="address1"><i className="fa-solid fa-location-dot"></i> Bamenda Cameroon, Sonac Street</li>
              <li><a href=""><i className="fa-solid fa-phone"></i> +237 650 393 369 </a></li>
              <li><a href=""><i className="fa-solid fa-envelope"></i> info@Afkanerd.com</a></li>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up"></i></a>
    </footer>
  );
}

export default Footer;




















// import Container from "@/app/_components/container";

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <Container>
//         <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div>
//             <img src="/assets/SWOB.png" alt="swob" className="h-10 lg:h-12 mb-4" />
//             <ul className="flex items-center space-x-4 mb-4">
//              
//           </div>
//           <div>
//             <h3 className="text-lg lg:text-xl font-bold mb-2">Read More About Swob</h3>
//             <ul>
//               <li><a href="https://smswithoutborders.com" className="btn">Swob</a></li>
//               <li><a href="https://deku.com" className="btn">Deku sms</a></li>
//             </ul>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;
