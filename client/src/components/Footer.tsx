import { Link } from 'wouter';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="mr-2 text-primary text-2xl">
                <i className="fas fa-mobile-alt" aria-hidden="true"></i>
              </div>
              <h2 className="text-xl font-nunito font-bold">DigiLearn</h2>
            </div>
            <p className="text-neutral-400 max-w-md">
              Helping beginners master digital skills through interactive, game-based learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-nunito font-bold mb-4">Learn</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><Link href="/"><a className="hover:text-white transition-colors">Getting Started</a></Link></li>
                <li><Link href="/characters"><a className="hover:text-white transition-colors">Characters</a></Link></li>
                <li><Link href="/learning-map"><a className="hover:text-white transition-colors">Learning Map</a></Link></li>
                <li><Link href="/mini-games"><a className="hover:text-white transition-colors">Mini-Games</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-nunito font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-nunito font-bold mb-4">Connect</h3>
              <div className="flex space-x-4 text-neutral-400">
                <a href="#" className="hover:text-white transition-colors text-xl">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-white transition-colors text-xl">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-white transition-colors text-xl">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-white transition-colors text-xl">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
              
              <div className="mt-4">
                <h3 className="font-nunito font-bold mb-2">Language</h3>
                <LanguageSwitcher variant="dark" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} DigiLearn. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
