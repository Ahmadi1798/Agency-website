import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900 text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From concept to execution — we craft scalable, strategic digital
          solutions to help your business grow.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
