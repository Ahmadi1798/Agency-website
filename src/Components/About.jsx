import about from '../assets/Illustrations/about.svg';
import { UsersRound, CreditCard, Calendar, Club } from 'lucide-react';
const About = () => {
  return (
    <div>
      <div className="mx-auto px-4 lg:px-14 max-w-screen-2xl my-10 " id="about">
        {/* flex Container */}
        <div className="flex flex-col  space-y-6 md:space-y-0 md:space-x-14 justify-between md:flex-row">
          <div className="md:w-2/5">
            <img src={about} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto my-4 md:pl-5">
            <h2 className="font-semibold text-neutral-700 text-4xl mb-4 md:w-4/5">
              The unseen of Spending three years at KarfamSoft
            </h2>
            <p className="md:w-4/6 text-sm text-secondary-text mb-8 tracking-wide ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              efficitur venenatis justo non pulvinar. Curabitur maximus urna
              vehicula mi accumsan ultricies. Nam ac nunc a purus pellentesque
              commodo eu vel lorem. Fusce vehicula gravida mauris, id volutpat
              ante pulvinar a. Mauris fringilla tempus nibh, in sodales ligula
              mollis eget.
            </p>
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
      {/* Company Stats */}
      <div className="w-full bg-neutral-100">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-primay py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-1/2 pt-5">
              <h2 className="font-semibold text-neutral-700 text-4xl mb-2 md:w-2/3">
                Helping a local <br />
                <span className="text-blue-500">business reinvent itself</span>
              </h2>
              <p className=" text-base text-secondary-text mb-8 tracking-wide ">
                we reached here with our hard work and dedication
              </p>
            </div>
            {/* Stats */}
            <div className="flex-col flex md:flex-row space-y-8 md:space-y-0 md:space-x-16 lg:space-x-24  items-center ">
              <div className="flex flex-col items-start space-y-8">
                {/* 1st stat */}
                <div className="flex items-center space-x-4">
                  <UsersRound className="text-accent-blue" size={50} />
                  <div>
                    <h4 className="text-2xl text-primary-text font-semibold">
                      1,234,541
                    </h4>
                    <p className="text-base text-neutral-700">Members</p>
                  </div>
                </div>
                {/* 2nd stat */}
                <div className="flex items-center space-x-4">
                  <Calendar className="text-accent-blue" size={50} />
                  <div>
                    <h4 className="text-2xl text-primary-text font-semibold">
                      821,756
                    </h4>
                    <p className="text-base text-neutral-700">Event Booking</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-8 justify-center">
                {/* 3rd stat */}
                <div className="flex items-center space-x-4">
                  <Club className="text-accent-blue" size={50} />
                  <div>
                    <h4 className="text-2xl text-primary-text font-semibold">
                      541,341
                    </h4>
                    <p className="text-base text-neutral-700">Clubs</p>
                  </div>
                </div>
                {/* 4th stat */}
                <div className="flex items-center space-x-4">
                  <CreditCard className="text-accent-blue" size={50} />
                  <div>
                    <h4 className="text-2xl text-primary-text font-semibold">
                      1,872,671
                    </h4>
                    <p className="text-base text-neutral-700">Payments</p>
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
export default About;
