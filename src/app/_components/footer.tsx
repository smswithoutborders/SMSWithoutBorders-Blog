import Container from "@/app/_components/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/assets/SWOB.png" alt="swob" className="h-10 lg:h-12 mb-4" />
            <ul className="flex items-center space-x-4 mb-4">
              <li><a href="https://github.com/smswithoutborders" className="hover:text-gray-300"><FontAwesomeIcon icon={faGithub} size="sm" />Github</a></li>
              <li><a href="https://twitter.com/smswithoutborders" className="hover:text-gray-300"><FontAwesomeIcon icon={faTwitter} size="sm" /> Twitter</a></li>
              <li><a href="https://linkedin.com/smswithoutborders" className="hover:text-gray-300"><FontAwesomeIcon icon={faLinkedin} size="sm" />LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-2">Read More About Swob</h3>
            <ul>
              <li><a href="https://smswithoutborders.com" className="btn">Swob</a></li>
              <li><a href="https://deku.com" className="btn">Deku sms</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
