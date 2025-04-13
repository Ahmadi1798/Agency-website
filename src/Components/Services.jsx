import LogoCarousel from './LogoCarousel';

const Services = () => {
  const services = [
    {
      title: 'Membership Organization',
      description:
        'Our membership managment software provides full automation of membership renewals and payments',
      image: '/logos/users.svg',
    },
    {
      title: 'National Associations',
      description:
        'Our membership managment software provides full automation of membership renewals and payments',
      image: '/logos/school.svg',
    },
    {
      title: 'Clubs And Groups',
      description:
        'Our membership managment software provides full automation of membership renewals and payments',
      image: '/logos/boxes.svg',
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 mx-auto max-w-screen-2xl">
      <div className="text-center my-8">
        <h2
          className="text-4xl text-neutral-700 font-semibold mb-4"
          id="services"
        >
          Our Clients
        </h2>
        <p className="text-base text-secondary-text">
          We have been working with some furtune 500+ clients
        </p>
        {/* Logo Carousel */}
        <div className="my-6">
          <LogoCarousel />
        </div>
      </div>
      {/* Service Card */}
      <div className="mx-auto md:w-1/2 mt-20 text-center ">
        <h2 className="text-4xl text-neutral-700 font-semibold mb-4">
          Manage your entire community in a single system
        </h2>
        <p className="text-base text-secondary-text">
          Who is KarFamSoft Suitable for?
        </p>
      </div>
      {/* cards */}
      <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-12 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-center items-center py-8 px-4 text-center mx-auto md:w-[320px] md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-accent-blue transition-all duration-300"
          >
            <div className="space-y-4 ">
              <div className="bg-blue-100/90 mb-4 w-14 h-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                <img src={service.image} className="w-20 -ml-5" alt="" />
              </div>
              <h2 className="text-2xl text-neutral-700 font-bold px-2">
                {service.title}
              </h2>
              <p className="text-sm text-secondary-text tracking-wide">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
