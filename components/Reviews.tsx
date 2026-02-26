import React from 'react';
import review1 from './img/review1.png';
import review2 from './img/review2.png';
import review4 from './img/review4.png';


// These URLs can be replaced with actual screenshots of Google reviews later
const reviewImages = [
  {
    id: 1,
    src: review1, 
    alt: "Google Review Screenshot 1"
  },
  {
    id: 2,
    src: review2,
    alt: "Google Review Screenshot 2"
  },
  {
    id: 3,
    src: review4,
    alt: "Google Review Screenshot 3"
  }
];

const Reviews: React.FC = () => {
  const googleReviewUrl = "https://www.google.com/search?rlz=1C5BAPC_enIN1171IN1172&sca_esv=3d809e212879af3d&sxsrf=AE3TifOlnJNM4KbOfcoWYb9It9Tv0BJqyA:1767334660640&q=CHERUPUSHPAM+AGENCY,+Cherupushpam+Building,+Old+Market+Road&spell=1&sa=X&ved=2ahUKEwjW-5XVmuyRAxXYhGMGHfEZERUQBSgAegQIFhAB&biw=1440&bih=812&dpr=1";

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">
        
        {/* Google Reviews Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-xl font-black text-black mb-1 uppercase tracking-tight">EXCELLENT</h2>
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[#fbbc04] fill-current text-3xl">star</span>
            ))}
          </div>
          <p className="text-sm font-bold text-black mb-4">Based on <span className="underline">100 reviews</span></p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
            alt="Google" 
            className="h-8 w-auto mb-8"
          />
        </div>

        {/* Review Images Grid - Background and border removed as requested */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {reviewImages.map((image) => (
              <div 
                key={image.id} 
                className="group rounded-2xl overflow-hidden border border-gray-200" >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto block cursor-default"
                />
              </div>
            ))}

            {/* Next Button Overlay (Visual only as per UI ref) */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 hidden lg:flex">
               <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg text-gray-400 hover:text-black transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
               </button>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="flex justify-center mt-12">
          <a 
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#513dbb] text-white px-10 py-3 rounded-md font-bold text-sm hover:brightness-110 transition-all shadow-lg active:scale-95 inline-block"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;