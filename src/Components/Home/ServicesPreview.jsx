import { Code, Brush, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    icon: Code,
    description:
      'High-performance websites using modern stacks like React and Tailwind.',
  },
  {
    title: 'UI/UX Design',
    icon: Brush,
    description:
      'User-first designs that balance aesthetics and functionality.',
  },
  {
    title: 'Digital Strategy',
    icon: BarChart3,
    description:
      'Clear and actionable strategies to launch and grow your product.',
  },
];

const ServicesPreview = () => {
  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-950 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We help brands build user-focused digital experiences with scalable
          design and code.
        </motion.p>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <service.icon
                className="text-indigo-600 dark:text-indigo-400 mb-4"
                size={32}
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/services"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default ServicesPreview;
