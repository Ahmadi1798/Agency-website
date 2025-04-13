import loginImg from '../assets/Illustrations/login.svg';
import productImg from '../assets/Images/product.jpg';

const Portfolio = () => {
  return (
    <div>
      <div
        className="mx-auto px-4 lg:px-14 max-w-screen-2xl my-16 "
        id="portfolio"
      >
        {/* flex Container */}
        <div className="flex flex-col  space-y-6 md:space-y-0 md:space-x-14 justify-between md:flex-row">
          <div className="md:w-2/5">
            <img src={loginImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto my-4 md:pl-5">
            <h2 className="font-semibold text-neutral-700 text-2xl md:text-4xl mb-4 md:w-4/5">
              Our Process: Designing With Purpose
            </h2>
            <p className="md:w-4/6 text-base text-secondary-text mb-8 tracking-wide ">
              We don’t just design interfaces — we craft seamless digital
              experiences. From mobile-first layouts to component-based
              architecture, our design decisions are driven by strategy, not
              guesswork. Every pixel, every click, every scroll is intentional.
            </p>
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
      {/* Company Stats */}
      <div className="w-full bg-neutral-100">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-primay py-16">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:w-1/3 ">
              <img
                src={productImg}
                className="h-80 object-cover w-full rounded-md shadow"
                alt="product image"
              />
            </div>
            {/* Stats */}
            <div className="md:w-2/3 mx-auto">
              <div>
                <p className="text-secondary-text text-lg leading-7 mb-6 md:w-3/4 ">
                  We were amazed by the clarity and speed of execution. From
                  onboarding to delivery, the team was proactive, strategic, and
                  always one step ahead. The results exceeded expectations.
                </p>
                <h5 className="text-2xl text-accent-blue mb-2">
                  Joseph Alston
                </h5>
                <p className="capitalize text-secondary-text">
                  <strong> Founder, Alston Creative Studio</strong>
                </p>
                <div className="flex flex-col space-y-5 items-center justify-between md:space-y-0 md:flex-row  md:space-x-20  mt-10">
                  <div className="flex items-center justify-between gap-8 sm:flex-wrap  md:w-3/4">
                    <img
                      src="/logos/bilibili.svg"
                      className="w-10 cursor-pointer"
                      alt="company logo"
                    />
                    <img
                      src="/logos/snowflake.svg"
                      className="w-10 cursor-pointer"
                      alt="company logo"
                    />
                    <img
                      src="/logos/r.svg"
                      className="w-10 cursor-pointer"
                      alt="company logo"
                    />
                    <img
                      src="/logos/spacy.svg"
                      className="w-10 cursor-pointer"
                      alt="company logo"
                    />
                    <img
                      src="/logos/matomo.svg"
                      className="w-10 cursor-pointer"
                      alt="company logo"
                    />
                    <img
                      src="/logos/ubuntu.svg"
                      className="w-10 cursor-pointer"
                      alt="company logo"
                    />
                  </div>
                  <div className="md:w-1/4">
                    <a href="/" className="flex items-center  text-accent-blue">
                      Meet all customers{' '}
                      <img src="/logos/arrow.svg" className="w-5 ml-2" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
