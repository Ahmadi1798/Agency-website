import { motion } from 'framer-motion';

const projects = [
  {
    title: 'TechNova Redesign',
    image: '/images/1.jpg',
    description:
      'Full website redesign + SEO optimization. Increased engagement by 48%.',
  },
  {
    title: 'GlowCare App UI',
    image: '/images/2.jpg',
    description:
      'Mobile app design for a wellness startup. Built with Figma + React Native.',
  },
  {
    title: 'NovaFin Dashboard',
    image: '/images/3.jpg',
    description:
      'Custom dashboard UI with Tailwind and chart integrations for a fintech product.',
  },
  {
    title: 'Brand Identity for Clover',
    image: '/images/4.jpg',
    description:
      'Logo, typography, and print collateral for a sustainable clothing brand.',
  },
  {
    title: 'Analytics Dashboard for InsightPro',
    image: '/images/5.jpg',
    description:
      'Custom admin panel with live data integration and KPIs for executives.',
  },
  {
    title: 'UX Collaboration Platform',
    image: '/images/6.jpg',
    description:
      'Built a real-time interface for designers and PMs to co-edit mockups.',
  },
];

const ProjectsGallery = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-950 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
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
    </motion.section>
  );
};
export default ProjectsGallery;
