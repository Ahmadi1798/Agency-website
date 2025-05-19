import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Power of Purposeful Design',
    excerpt:
      'How intentional design choices improve user engagement and brand trust.',
    image: '/blogs/1.jpg',
    date: 'May 2025',
    link: '#',
  },
  {
    title: 'Top 5 Tools We Use to Build Scalable Websites',
    excerpt: 'From design to deployment, here’s our go-to tech stack in 2025.',
    image: '/blogs/2.jpg',
    date: 'April 2025',
    link: '#',
  },
  {
    title: 'Why Every Brand Needs a Design System',
    excerpt:
      'A design system is more than visuals — it’s your brand’s operating manual.',
    image: '/blogs/3.jpg',
    date: 'March 2025',
    link: '#',
  },
  {
    title: 'Dark Mode Design: Tips for Better UX',
    excerpt:
      'How to design inclusive, legible, and stylish dark interfaces in 2025.',
    image: '/blogs/4.jpg',
    date: 'February 2025',
    link: '#',
  },
  {
    title: 'How We Approach Mobile-First Design',
    excerpt:
      'Learn why starting with mobile changes the way we build for the web.',
    image: '/blogs/5.jpg',
    date: 'January 2025',
    link: '#',
  },
  {
    title: 'Web Performance in 2025: What Actually Matters',
    excerpt:
      'Speed, accessibility, and user flow — the new performance checklist.',
    image: '/blogs/6.jpg',
    date: 'December 2024',
    link: '#',
  },
];

const BlogPosts = () => {
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
        {posts.map((post, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mt-2 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium inline-block mt-4 hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
export default BlogPosts;
