const Footer = () => {
  return (
    <footer className="bg-card-dark text-text-dark" id="contact">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">La REZ</h3>
            <p className="text-text-muted-dark">
              11 Grande Rue
              <br />
              91600 Savigny-sur-Orge
              <br />
              France
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-text-muted-dark hover:text-white" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-text-muted-dark hover:text-white" href="#rooms">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-text-muted-dark hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-text-muted-dark hover:text-white" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a className="text-text-muted-dark hover:text-white" href="#">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
              <a className="text-text-muted-dark hover:text-white" href="#">
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85C2.253 3.854 3.732 2.31 6.984 2.163 8.25 2.11 8.63 2.102 12 2.102zM12 0c-3.264 0-3.648.014-4.921.072C2.999.22 1.481 1.537.331 4.095-.084 6.134 0 6.64 0 12s.084 5.866.331 7.905c1.15 2.558 2.668 3.875 5.748 4.022C7.352 23.988 7.736 24 12 24s4.648-.012 5.921-.072c3.08-.147 4.598-1.464 5.748-4.022.415-2.039.331-2.545.331-7.905s-.084-5.866-.331-7.905C22.519 1.537 21.001.22 18.253.072 16.979.014 16.264 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-text-muted-dark">
          <p>© 2024 La REZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
