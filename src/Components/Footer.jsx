import logo from '../assets/Images/logo.png';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-2xl space-y-4 px-4 py-10 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img className="w-40" src={logo} alt="" />
          </a>
          <ul className="mt-4 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-accent-blue transition hover:opacity-75"
              >
                <FaFacebookF size={20} />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-accent-blue transition hover:opacity-75"
              >
                <FaInstagram size={20} />
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-accent-blue transition hover:opacity-75"
              >
                <FaXTwitter size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 pt-8 gap-8 border-t border-gray-100  sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  About{' '}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  Meet the Team{' '}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  Contact{' '}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  FAQs{' '}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  Accessibility{' '}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  Private Policy{' '}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {' '}
                  Terms & Conditions{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2025. KarFamSoft. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
