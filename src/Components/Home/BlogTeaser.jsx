// components/BlogTeaser.jsx

const posts = [
  {
    title: 'The Power of Purposeful Design',
    image: '/blogs/1.jpg',
    date: 'May 2025',
    link: '#',
  },
  {
    title: 'Top 5 Tools We Use to Build Scalable Websites',
    image: '/blogs/2.jpg',
    date: 'April 2025',
    link: '#',
  },
  {
    title: 'Why Every Brand Needs a Design System',
    image: '/blogs/3.jpg',
    date: 'March 2025',
    link: '#',
  },
];

import { motion } from 'framer-motion';

const BlogTeaser = () => {
  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-950 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From the Blog
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insights and ideas from the KarFamSoft team.
        </motion.p>
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mt-2 mb-2">
                  {post.title}
                </h3>
                <a
                  href={post.link}
                  className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/blog"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Visit Blog
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogTeaser;
