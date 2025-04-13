const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      image: '/blogs/image1.jpg',
    },
    {
      id: 2,
      title:
        'What are your Safeguarding responsibilities and how can you manage them?',
      image: '/blogs/image2.jpg',
    },
    {
      id: 3,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      image: '/blogs/image3.jpg',
    },
  ];
  return (
    <div className="px-4 lg:px-14 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center mx-auto md:w-1/2" id="blog">
        <h2 className="text-4xl text-neutral-700 font-semibold mb-4">
          Caring is the new Markinting
        </h2>
        <p className="text-sm text-secondary-text tracking-wide mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel officiis
          commodi tempore itaque veritatis est cum et, blanditiis ipsum
          voluptate cupiditate voluptas consequuntur aliquam mollitia nulla
          eligendi eum eos aperiam.
        </p>
      </div>
      {/* Blog Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative mb-12 cursor-pointer mx-auto">
            <img
              src={blog.image}
              className="w-96 h-[22rem] rounded-2xl object-cover hover:scale-95 transition-all duration-300"
              alt="blog post"
            />
            <div
              className="text-center flex flex-col items-center
               space-y-1 mx-auto md:w-3/4 text-neutral-700 bg-white/80 shadow-md px-4 py-8 absolute left-0 right-0
             -bottom-8 rounded-md hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <h3>{blog.title}</h3>
              <div>
                <a
                  href="/"
                  className="flex items-center font-bold text-accent-blue"
                >
                  Learn More{' '}
                  <img src="/logos/arrow.svg" className="w-5 ml-2" alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
