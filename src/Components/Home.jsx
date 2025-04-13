import { Carousel } from 'flowbite-react';
import illustration from '../assets/Illustrations/website1.svg';
import illustration1 from '../assets/Illustrations/slide2.svg';

const Home = () => {
  return (
    <div className="bg-primary" id="home">
      <div className="mx-auto h-screen min-h-screen max-w-screen-2xl px-4 lg:px-14">
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
                Lesson and Insights{' '}
                <span className="text-blue-500 leading-snug">from 8 years</span>
              </h1>
              <p className="text-base text-secondary-text mb-8 ">
                where to grow your business as a photographer, business owner or
                anyone
              </p>
              <button className="primary-btn">Register</button>
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
                Learn and Earn Money{' '}
                <span className="text-blue-500 leading-snug">In 4 month</span>
              </h1>
              <p className="text-base text-secondary-text mb-8 ">
                where to grow your business as a photographer, business owner or
                anyone
              </p>
              <button className="primary-btn">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
