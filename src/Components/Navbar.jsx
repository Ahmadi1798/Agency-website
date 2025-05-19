import { useEffect, useState } from 'react';
import logo from '../assets/Images/logo.png';
import { X, Menu, Moon, Sun } from 'lucide-react';
import { links } from '../../utils/Links';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => setIsSticky(window.scrollY > 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm'
          : isAboutPage
          ? 'bg-transparent dark:bg-transparent'
          : 'bg-white dark:bg-gray-900'
      }`} 
    >
      <nav
        className={`transition-all duration-300 px-4 lg:px-14 py-4 ${
          isSticky
            ? 'sticky top-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/">
            <img className="w-36" src={logo} alt="KarFamSoft Logo" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10 items-center text-sm font-medium">
            {links.map(({ text, path }) => (
              <NavLink
                key={text}
                to={path}
                className={({ isActive }) =>
                  `transition hover:text-indigo-600 ${
                    isActive
                      ? 'text-indigo-600'
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {text}
              </NavLink>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm transition">
                Contact
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 px-4 pt-6 pb-4 space-y-4 bg-white dark:bg-gray-900 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {links.map(({ text, path }) => (
            <NavLink
              key={text}
              to={path}
              onClick={handleMenuToggle}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive
                    ? 'text-indigo-600'
                    : 'text-gray-700 dark:text-gray-300'
                }`
              }
            >
              {text}
            </NavLink>
          ))}
          <Link to="/contact">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm mt-4">
              Contact
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
