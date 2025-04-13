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
            <h2 className="font-semibold text-neutral-700 text-4xl mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-4/6 text-sm text-secondary-text mb-8 tracking-wide ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              efficitur venenatis justo non pulvinar. Curabitur maximus urna
              vehicula mi accumsan ultricies. Nam ac nunc a purus pellentesque
              commodo eu vel lorem. Fusce vehicula gravida mauris, id volutpat
              ante pulvinar a.Nunc vel ipsum at mauris rhoncus efficitur.
              Curabitur semper nibh id lacus congue eleifend. Proin quis ex et
              metus cursus mattis quis et diam.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc accumsan consequat maximus.
              Donec magna elit, sollicitudin vitae augue eu, venenatis sodales
              nunc. Duis elementum feugiat eleifend.
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
                <p className="text-secondary-text leading-7 mb-6 ">
                  Phasellus elementum faucibus enim, eget molestie elit
                  venenatis nec. Vivamus tempus scelerisque sapien, sed
                  tristique magna vehicula et. Etiam dapibus ex lectus, at
                  condimentum arcu bibendum ut. Praesent ligula lectus, egestas
                  vel iaculis sed, sodales in massa. Duis accumsan turpis lacus,
                  vel blandit velit vulputate sed. Aliquam in neque eget ante
                  ornare cursus. Phasellus non est lacinia dui imperdiet
                  efficitur. Suspendisse risus lacus, venenatis id blandit sed,
                  tempor ut tellus. Curabitur interdum mauris ac est convallis,
                  facilisis convallis est finibus.
                </p>
                <h5 className="text-2xl text-blue-500 mb-2">Josiph Alson</h5>
                <p className="capitalize text-secondary-text">
                  Lorem ipsum dolor sit, adipisicing elit.
                </p>
                <div className="flex items-end md:space-x-20 flex-wrap mt-10">
                  <div className="flex items-center gap-8 flex-wrap">
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
                  <div>
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
