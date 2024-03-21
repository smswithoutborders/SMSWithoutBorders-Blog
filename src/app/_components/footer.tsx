import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "../globals.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
         

          {/* Useful Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="use-links">
              <li><a href="https://afkanerd.com" className="text-white hover:text-blue-300">Afkanard.com</a></li>
              <li><a href="#projects" className="text-white hover:text-blue-300">Projects</a></li>
              <li><a href="#contact" className="text-white hover:text-blue-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Icons Follow Us */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="social-icons">
              <a href="https://github.com/smswithoutborders" className="text-white hover:text-blue-300"><FontAwesomeIcon className="h-4 lg:h-8 mb-4 mr-4" icon={faGithub} size="lg" /></a>
              <a href="https://twitter.com/smswithoutborders" className="text-white hover:text-blue-300"><FontAwesomeIcon className="h-4 lg:h-8 mb-4 mr-4" icon={faTwitter} size="lg" /></a>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <div className="address-links">
              <p className="text-white mb-1">Bamenda Cameroon, Sonac Street</p>
              <a href="mailto:info@Afkanerd.com" className="text-white">info@Afkanerd.com</a>
            </div>
          </div>

        </div>
      </div>
      {/* Back to Top */}
      <a href="#" className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700">
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </a>


    </footer>
  );
}

export default Footer;
