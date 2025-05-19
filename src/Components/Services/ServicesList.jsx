import {
  Code,
  Brush,
  BarChart3,
  Smartphone,
  Globe2,
  Layers3,
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    icon: Code,
    description:
      'Modern, responsive websites built for performance, scalability, and user experience.',
  },
  {
    title: 'UI/UX Design',
    icon: Brush,
    description:
      'Human-centered design systems that deliver beauty, usability, and consistency.',
  },
  {
    title: 'Digital Strategy',
    icon: BarChart3,
    description:
      'We help define goals and roadmap digital success aligned to your business needs.',
  },
  {
    title: 'Mobile App Design',
    icon: Smartphone,
    description:
      'Designing sleek mobile-first experiences your users will love across all devices.',
  },
  {
    title: 'SEO & Web Optimization',
    icon: Globe2,
    description:
      'Optimized for discoverability and speed to drive organic traffic and user retention.',
  },
  {
    title: 'Brand Identity',
    icon: Layers3,
    description:
      'Logo, typography, color systems and brand collateral built to resonate and scale.',
  },
];

const ServicesList = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-950 px-6"
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
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
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
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <service.icon
              className="text-indigo-600 dark:text-indigo-400 mb-4"
              size={36}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
export default ServicesList;
