import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const logos = [
  '/logos/bilibili.svg',
  '/logos/bitdefender.svg',
  '/logos/gradleplaypublisher.svg',
  '/logos/matomo.svg',
  '/logos/openaigym.svg',
  '/logos/r.svg',
  '/logos/snowflake.svg',
  '/logos/spacy.svg',
  '/logos/travisci.svg',
  '/logos/ubuntu.svg',
];

const LogoCarousel = () => {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center">
              <img
                src={src}
                alt={`Logo ${i}`}
                className="h-12 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 ease-in-out text-blue-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;

// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';

// const LogoCarousel = () => {
//   useEffect(() => {
//     const slider = new Glide('.glide-09', {
//       type: 'carousel',
//       autoplay: 1,
//       animationDuration: 4500,
//       animationTimingFunc: 'linear',
//       perView: 3,
//       classes: {
//         nav: {
//           active: '[&>*]:bg-wuiSlate-700',
//         },
//       },
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//           gap: 36,
//         },
//       },
//     }).mount();

//     return () => {
//       slider.destroy();
//     };
//   }, []);

//   return (
//     <>
//       {/*<!-- Component: Testimonial carousel --> */}
//       <div className="glide-09 relative w-full">
//         {/* <!-- Slides --> */}
//         <div data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/*<!-- End Testimonial carousel --> */}
//     </>
//   );
// };
// export default LogoCarousel;
