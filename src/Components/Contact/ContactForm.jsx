import { TfiLinkedin } from 'react-icons/tfi';
import { TfiFacebook } from 'react-icons/tfi';
import { RiTwitterXLine } from 'react-icons/ri';
import { LuGithub } from 'react-icons/lu';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center mx-auto bg-gray-50 dark:bg-gray-950 py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Got a project in mind? Fill out the form or reach out via email — we’d
          love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto items-center grid md:grid-cols-2 gap-12 p-10 rounded-2xl shadow-xl bg-white dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Email Address
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            support@karfamsoft.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Office Location
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            703 Bartley-Chester Rd, Virginia, USA
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Phone Number
          </h2>
          <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Social Media
          </h2>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <TfiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <TfiFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <RiTwitterXLine className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <LuGithub className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Devid Wonder"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone number
              </label>
              <input
                type="text"
                placeholder="+009 3342 3432"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Type your subject"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full text-sm transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
export default ContactForm;
