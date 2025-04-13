import { useEffect, useState } from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-scroll';
import { X, Menu } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Services', path: 'services' },
    { link: 'About', path: 'about' },
    { link: 'Portfolio', path: 'portfolio' },
    { link: 'Blog', path: 'blog' },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 px-4 lg:px-14 ${
          isSticky
            ? 'sticky top-0 right-0 left-0 border-b bg-white duration-300 '
            : ''
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#">
            <img className="w-40" src={logo} alt="" />
          </a>

          {/* Nav Items for md screen size  */}
          <ul className="hidden md:flex space-x-12 items-center">
            {navItems.map(({ link, path }) => {
              return (
                <Link
                  className="block text-base text-primary-text hover:text-accent-blue cursor-pointer active:text-accent-blue"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                >
                  {link}
                </Link>
              );
            })}
          </ul>
          <div className="hidden md:flex space-x-2">
            <a
              href="#"
              className="text-base bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Contact
            </a>
            <button onClick={toggleTheme} className="cursor-pointer">
              {isLight ? <Sun /> : <Moon />}
            </button>
          </div>
          {/* menu for Mobile Screen Size */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-primary-text focus:outline-none focus:outline-border-color"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* nav Items for mobile menu */}
        <div
          className={`md:hidden space-y-4 mt-16 py-7 px-2 text-primary bg-blue-500 ${
            isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => {
            return (
              <Link
                className="block text-base hover:text-primary-text text-primary cursor-pointer"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
