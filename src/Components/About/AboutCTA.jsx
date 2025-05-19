import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const AboutCTA = () => {
  return (
    <motion.section
      className="py-20 bg-indigo-600 dark:bg-indigo-700 text-white px-6"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let’s Build Something Meaningful Together
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you’re launching a new brand, building a product, or
          reimagining your digital experience — KarFamSoft Agency is ready to
          partner with you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact">
            <button className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default AboutCTA;
