import React from 'react';

const reviewData = [
  {
    id: 1,
    name: "Shenjin Thomas",
    initial: "S",
    color: "bg-purple-700",
    rating: 4.5, // The code will now use this number to color the stars
    text: "Pricing was perfect, as well as had a great customer service. Did get a call after purchase to make sure, everything went smooth, which I experienced for the first time"
  },
  {
    id: 2,
    name: "renjith raghavan nair",
    initial: "R",
    color: "bg-blue-500",
    rating: 5,
    text: "Best customer service I ever had. Moreover, once you buy a product from Cherupishpam , I promise that you are in for a positive and promising relationship with Cherupishpam for the rest of your life , that is what my experience so far."
  },
  {
    id: 3,
    name: "Agnes Ann Linto",
    initial: "A",
    color: "bg-blue-800",
    rating: 4.5,
    text: "Excellent service,good selection,Excellent customer care. Must visit!!!"
  }
];

const Reviews: React.FC = () => {
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => {
      const starValue = i + 1;
      let iconName = 'star';
      let textColor = 'text-[#fbbc04]'; // Default Gold

      if (rating < starValue && rating > i) {
        iconName = 'star_half';
      } else if (rating < starValue) {
        iconName = 'star';
        textColor = 'text-gray-300'; // Unfilled Star
      }

      return (
        <span key={i} className={`material-symbols-outlined ${textColor} !text-xl fill-current`}>
          {iconName}
        </span>
      );
    });
  };

  return (
    <section className="py-16 bg-white overflow-hidden font-display">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header with Overall Rating */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-xl font-extrabold text-black mb-1 uppercase tracking-tighter">EXCELLENT</h2>
          <div className="flex gap-0.5 mb-1">
            {renderStars(4.8)} {/* Dynamic overall rating */}
          </div>
          <p className="text-sm font-bold text-black mb-4 tracking-tight">
            Based on <span className="underline decoration-2">100 reviews</span>
          </p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
            alt="Google" 
            className="h-8 w-auto mb-8"
          />
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {reviewData.map((review) => (
            <div key={review.id} className="p-8 rounded-3xl border border-gray-100 bg-white flex flex-col shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
              
              <div className="flex items-center gap-4 mb-5">
                <div className={`${review.color} h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner`}>
                  {review.initial}
                </div>
                <h3 className="font-bold text-slate-900 text-base border-b-2 border-slate-100 pb-1">
                  {review.name}
                </h3>
              </div>

              {/* Dynamic Stars for each review */}
              <div className="flex gap-0.5 mb-4">
                {renderStars(review.rating)}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#513dbb] text-white px-12 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;