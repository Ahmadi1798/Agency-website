import { Lightbulb, Layout, Zap, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreValues = () => {
  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-950 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          What We Stand For
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          At KarFamSoft Agency, we’re guided by values that shape our work and
          relationships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {[Lightbulb, Layout, Zap, HeartHandshake].map((Icon, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Icon
              className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
              size={36}
            />
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              {['Craftsmanship', 'Clarity', 'Agility', 'Long-Term Vision'][i]}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {
                [
                  'We obsess over the details that elevate good work to great experiences.',
                  'We value honest, simple communication — no fluff, no jargon.',
                  'We adapt fast and build lean — because that’s what real impact requires.',
                  'We care about growth that lasts — in your brand, and our relationship.',
                ][i]
              }
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreValues;
