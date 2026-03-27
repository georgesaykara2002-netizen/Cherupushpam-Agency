import React, { useState } from 'react';
import { usePageSEO } from '../pages/hooks/usePageSEO';

const blogPosts = [
  {
    id: 1,
    category: "Buying Guide",
    date: "March 15, 2024",
    title: "Top 5 Features to Look for in a 4K Smart TV",
    excerpt: "With so many options in the market, choosing the right TV can be overwhelming. We break down the essentials from OLED vs QLED to HDR standards.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop",
    author: "Electronics Desk"
  },
  {
    id: 2,
    category: "Forex Tips",
    date: "March 10, 2024",
    title: "Best Practices for Carrying Currency Abroad",
    excerpt: "Should you carry cash or a travel card? Learn how to manage your foreign exchange efficiently while traveling internationally from Pala.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
    author: "Forex Specialist"
  },
  {
    id: 3,
    category: "Maintenance",
    date: "March 05, 2024",
    title: "How to Extend the Life of Your Washing Machine",
    excerpt: "Simple maintenance tips that can save you thousands in repair costs. From cleaning the filter to balanced loads.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop",
    author: "Service Team"
  },
  {
    id: 4,
    category: "Smart Home",
    date: "February 28, 2024",
    title: "Why Inverter ACs are the Future of Home Cooling",
    excerpt: "Understanding the energy efficiency of inverter technology and how it can significantly reduce your monthly electricity bills in Kerala's climate.",
    image: "https://images.unsplash.com/photo-1614631446506-6927d3326177?q=80&w=2070&auto=format&fit=crop",
    author: "Tech Corner"
  },
  {
    id: 5,
    category: "Finance",
    date: "February 20, 2024",
    title: "Understanding Inward Remittance for NRIs",
    excerpt: "A guide for families in Kottayam on how to receive money from abroad safely and at the best possible exchange rates.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    author: "Financial Advisor"
  },
  {
    id: 6,
    category: "Kitchen Tech",
    date: "February 12, 2024",
    title: "The Ultimate Mixer Grinder Buying Guide",
    excerpt: "From wattage to jar types, find out what makes a great mixer grinder for traditional Indian cooking.",
    image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?q=80&w=1974&auto=format&fit=crop",
    author: "Kitchen Expert"
  }
];

const BlogPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  usePageSEO(
    'Blog | Electronics Tips, Forex News & Buying Guides | Cherupushpam Agency',
    'Read the latest articles on home appliances, forex tips, buying guides and NRI remittance from Cherupushpam Agency — Pala, Kottayam, Kerala.',
    '/blog'
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16 text-gray-900">
      <div className="layout-container mx-auto px-4 md:px-8 xl:px-40">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-4">
            <span className="material-symbols-outlined text-sm">article</span>
            Cherupushpam Insights
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#111814] mb-6">
            Our Latest Articles
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends in electronics, home appliances, and global currency news.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 group cursor-pointer relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                {blogPosts[0].category}
              </span>

              <h2 className="text-2xl md:text-3xl font-black text-[#111814] mb-4 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-sm font-bold">{blogPosts[0].author}</p>
                  <p className="text-xs text-gray-500">{blogPosts[0].date}</p>
                </div>

                <button className="flex items-center gap-2 text-primary font-bold text-sm">
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-[10px] font-black text-primary uppercase tracking-wider shadow">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="text-gray-500 text-xs mb-3">
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-[#111814] mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-bold">{post.author}</span>

                  <button className="text-primary font-bold text-xs flex items-center gap-1">
                    Read Story
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-[#002b4d] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Don't miss a beat
          </h2>

          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive offers and the latest news from Pala's premier agency.
          </p>

          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            {subscribed ? (
              <p className="text-green-300 font-bold w-full text-center py-3">
                ✓ Thank you! You're subscribed.
              </p>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 rounded-xl bg-white text-black outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;