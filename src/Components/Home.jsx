import { Carousel, createTheme, ThemeProvider } from 'flowbite-react';
import illustration from '../assets/Illustrations/website1.svg';
import illustration1 from '../assets/Illustrations/slide2.svg';
const customTheme = createTheme({
  carousel: {
    indicators: {
      active: {
        off: 'bg-white/20 hover:bg-white dark:bg-accent-blue/50 dark:hover:bg-accent-blue',
        on: 'bg-white dark:bg-accent-blue',
      },
    },
    control: {
      base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-100/30 dark:group-hover:bg-gray-100/60 dark:group-focus:ring-gray-100/70',
      icon: 'h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-transparent',
    },
  },
});

const Home = () => {
  return (
    <div className="bg-primary" id="home">
      <div className="mx-auto h-screen min-h-screen max-w-screen-2xl px-4 lg:px-14">
        <ThemeProvider theme={customTheme}>
          <Carousel className="w-full mx-auto">
            {/* Slide 1 */}
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
              <div>
                {/* Illustration  */}
                <img src={illustration} alt="website illustration" />
              </div>
              {/* content */}
              <div className="md:1/2 px-2">
                <h1 className="text-5xl font-semibold mb-4 text-primary-text md:w-3/4 leading-snug ">
                  Crafting Digital Experiences{' '}
                  <span className="text-accent-blue leading-snug">
                    That Drive Success
                  </span>
                </h1>
                <p className="text-base text-secondary-text mb-8 ">
                  We specialize in creating responsive, user-centric websites
                  that elevate your brand and engage your audience.
                </p>
                <button className="primary-btn">View Our Portfolio</button>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
              <div>
                {/* Illustration  */}
                <img src={illustration1} alt="website illustration" />
              </div>
              {/* content */}
              <div className="md:1/2 px-2">
                <h1 className="text-5xl font-semibold mb-4 text-primary-text md:w-3/4 leading-snug capitalize">
                  Transforming Ideas into{' '}
                  <span className="text-accent-blue leading-snug">
                    Digital Reality
                  </span>
                </h1>
                <p className="text-base text-secondary-text mb-8 ">
                  Our team delivers cutting-edge web solutions tailored to your
                  business goals, ensuring a strong online presence.
                </p>
                <button className="primary-btn">View Our Portfolio</button>
              </div>
            </div>
          </Carousel>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default Home;
