import { motion } from 'framer-motion';
const features = [
  'Proven experience with modern tech stacks',
  'Human-centered, design-first thinking',
  'Speed, responsiveness, and clean code',
  'Collaborative and transparent communication',
];

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Why Choose KarFamSoft?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We bring clarity, design, and code together to help you build
          experiences that matter.
        </motion.p>
        <motion.ul
          className="grid gap-6 md:grid-cols-2 text-left text-gray-700 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="mr-3 mt-1 text-indigo-600">✓</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
