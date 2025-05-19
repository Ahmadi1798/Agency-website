import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCTA = () => {
  return (
    <motion.section
      className="py-20 bg-indigo-600 dark:bg-indigo-700 text-white px-6"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let’s Talk Strategy
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you're building from scratch or scaling up — KarFamSoft Agency
          is ready to partner with you. Let's create something impactful.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact">
            <button className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default BlogCTA;
