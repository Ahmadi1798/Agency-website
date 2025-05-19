import agencyVideo from '../../assets/videos/agency.mp4';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative h-[100vh] overflow-hidden flex items-center justify-center text-center px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      >
        <source src={agencyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute bg-neutral-300/10 inset-0 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-3xl text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A <span className="text-indigo-500">Creative</span> Partner for the
          Ambitious
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          At KarFamSoft Agency, we create digital experiences that help brands
          grow, adapt, and thrive in a changing world.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutHero;
