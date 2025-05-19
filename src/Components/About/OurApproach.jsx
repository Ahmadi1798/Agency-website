import { Search, PenTool, Code2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const OurApproach = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900 px-6"
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
          Our Approach
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          We combine strategy, design, and technology in a collaborative process
          that drives clarity, speed, and results.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center"
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
        {[
          {
            icon: Search,
            title: 'Discover',
            description:
              'We listen deeply and define what success looks like — grounded in user needs and business goals.',
          },
          {
            icon: PenTool,
            title: 'Design',
            description:
              'We translate ideas into visual systems and intuitive experiences that elevate your brand.',
          },
          {
            icon: Code2,
            title: 'Develop',
            description:
              'We build scalable, clean, and responsive systems using modern, maintainable technologies.',
          },
          {
            icon: RefreshCw,
            title: 'Deliver & Evolve',
            description:
              'We launch, optimize, and support continuous growth — because good digital never stops.',
          },
        ].map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <Icon
              className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400"
              size={36}
            />
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurApproach;
