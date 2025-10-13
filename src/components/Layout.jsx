import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import logoImage from '../assets/images/logo.png';

const Layout = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="La REZ Logo" className="h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#hero"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#rooms"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Rooms
            </a>
            <a
              href="#amenities"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Amenities
            </a>
            <a
              href="#details"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Details
            </a>
            <a
              href="#contact"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Link
              to="/faq"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2ku593gaxVr6Pb4CBj4AHxBlj5hAyRD2NkUw4QOEohQ4x0w/viewform"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Book Now
            </a>
            <button className="md:hidden ml-4 text-text-light dark:text-text-dark" aria-label="Open menu">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
