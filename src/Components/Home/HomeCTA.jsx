import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const HomeCTA = () => {
  return (
    <motion.section
      className="bg-indigo-600 dark:bg-indigo-700 py-16 px-6"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to bring your vision to life?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let’s collaborate on something impactful and innovative.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Start a Project
        </motion.a>
      </div>
    </motion.section>
  );
};
export default HomeCTA;
