import teamImage from '../../assets/Images/team-working.jpg';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            KarFamSoft Agency is a team of strategists, designers, and
            developers who believe in the power of purposeful creativity. We
            blend aesthetics with functionality to deliver digital solutions
            that are both visually compelling and strategically sound.
            <br />
            <br />
            Whether we're building a product from scratch or refining a
            platform, we bring full ownership, deep collaboration, and real
            curiosity to every project.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teamImage}
            alt="KarFamSoft team working"
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
