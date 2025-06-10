
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-skill-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <img src="logo2 footer.svg" alt="logo" width="100px" />    
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {/* <div className="w-6 h-6 bg-white rounded-full mr-2"></div> */}
                {/* <div className="w-4 h-4 bg-skill-orange rounded-full -ml-2"></div> */}
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Skill</span>
                <span className="text-skill-orange ml-1">Marc</span>
              </span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Empowering learners worldwide with professional courses in English, Digital Marketing, 
              Graphic Design, and Web Development. Join our community and unlock your potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/courses" className="block text-blue-100 hover:text-white transition-colors">
                Courses
              </Link>
              <Link to="/club" className="block text-blue-100 hover:text-white transition-colors">
                Skill Marc Club
              </Link>
              <Link to="/about" className="block text-blue-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="block text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="mailto:support@skillmarc.com" className="block text-blue-100 hover:text-white transition-colors">
                support@skillmarc.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Skill Marc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
