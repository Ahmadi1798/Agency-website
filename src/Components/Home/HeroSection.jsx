// Replace with your own
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen flex items-center">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            Building Brands with{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              Exceptional
            </span>{' '}
            Digital Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At KarFamSoft, we design and develop scalable, user-focused websites
            that help businesses thrive in the digital age.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition text-sm font-medium">
                View Portfolio
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white dark:bg-gray-900 border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition text-sm font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <motion.img
            src="/images/heroImage.png"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
