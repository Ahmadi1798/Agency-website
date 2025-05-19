import { motion } from 'framer-motion';

const PortfolioHero = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900 px-6 text-center"
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
          Our Work
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real results, creative execution, and scalable design — here’s what
          we’ve built for brands that trust us.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PortfolioHero;
