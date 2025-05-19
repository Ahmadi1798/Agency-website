import logo from '../assets/Images/logo.png';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#" className="mb-6 lg:mb-0">
            <img className="w-36" src={logo} alt="KarFamSoft Logo" />
          </a>
          <ul className="flex gap-5">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaXTwitter size={20} />
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 text-sm text-gray-600 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {i === 0 && (
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                    Company
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:underline">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Meet the Team
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {i === 1 && (
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                    Helpful Links
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:underline">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {i === 2 && (
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                    Legal
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:underline">
                        Accessibility
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {i === 3 && (
                <div>
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
                    Stay in the Loop
                  </h4>
                  <p className="mb-4 text-sm">
                    Get updates on our latest work and projects.
                  </p>
                  <form className="flex items-center">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 text-sm rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-r-lg hover:bg-indigo-700 transition">
                      Subscribe
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          &copy; 2025 KarFamSoft. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
