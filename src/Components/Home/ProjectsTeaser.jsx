import { motion } from 'framer-motion';
const projects = [
  {
    title: 'TechNova Redesign',
    image: '/images/1.jpg',
    description:
      'We helped TechNova boost engagement by 48% with a new brand and platform.',
  },
  {
    title: 'GlowCare Mobile App',
    image: '/images/2.jpg',
    description:
      'Designed a smooth, wellness-first mobile app experience with React Native.',
  },
  {
    title: 'NovaFin Dashboard UI',
    image: '/images/3.jpg',
    description:
      'Created a dashboard interface with real-time charts for a fintech client.',
  },
];

const ProjectsTeaser = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A quick look at the work we’ve done for forward-thinking brands.
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
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
            href="/portfolio"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsTeaser;
