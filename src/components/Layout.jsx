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
            <Link
              to="/#hero"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/#rooms"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Rooms
            </Link>
            <Link
              to="/#amenities"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Amenities
            </Link>
            <Link
              to="/#details"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Details
            </Link>
            <Link
              to="/#contact"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2ku593gaxVr6Pb4CBj4AHxBlj5hAyRD2NkUw4QOEohQ4x0w/viewform"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Book Now
            </a>
            <a
              href="https://paypal.me/locaflat?country.x=FR&locale.x=fr_FR"
              target="_blank"
              rel="noreferrer"
              className="bg-[#003087] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#009cde] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M7.2 20.4H4.7a.7.7 0 0 1-.69-.83l2.55-16.2A.9.9 0 0 1 7.45 2h6.92c3.23 0 5.13 1.62 4.75 4.9-.32 2.63-1.62 4.19-3.78 4.86.14.52.2 1.11.12 1.79-.37 3.07-2.3 4.9-5.79 4.9H8.2l-.36 2.3a.9.9 0 0 1-.64.65Z" />
                <path d="M9.1 18.8H7.2l1.7-10.8a.9.9 0 0 1 .88-.76h4.18c3.23 0 5.13 1.62 4.75 4.9-.37 3.07-2.3 6.66-6.87 6.66H9.46a.9.9 0 0 0-.89.76l-.07.44a1.1 1.1 0 0 1-.4.7Z" opacity="0.55" />
              </svg>
              <span>PayPal</span>
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
