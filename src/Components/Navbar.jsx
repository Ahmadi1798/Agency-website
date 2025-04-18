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
                  className="block text-base text-primary-text hover:text-accent-blue cursor-pointer"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                >
                  <button className="focus:text-accent-blue cursor-pointer hover:border-b-2 hover:border-accent-blue transition duration-300">
                    {' '}
                    {link}
                  </button>
                </Link>
              );
            })}
          </ul>
          <div className="hidden md:flex space-x-3">
            <a
              href="#"
              className="text-base bg-accent-blue text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
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
          className={`md:hidden space-y-4 mt-16 py-7 px-2 text-primary transition-all duration-500 bg-accent-blue/98 ${
            isMenuOpen ? 'block fixed  top-0 left-0 right-0' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => {
            return (
              <Link
                onClick={handleMenuToggle}
                className="block text-base hover:opacity-80 text-primary cursor-pointer pl-3"
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
              >
                <button className=" cursor-pointer hover:border-b-2 hover:border-white transition duration-300">
                  {' '}
                  {link}
                </button>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
