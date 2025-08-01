'use client';

import { HandCoins , ArrowRight,GlobeLock,Atom,Bubbles  } from 'lucide-react';
import Image from 'next/image';

const blogs = [
  {
    icon: <HandCoins  className="w-5 h-5 text-[#2E8AE0]" />,
    title: 'Content Writing',
    heading: 'Creating A Successful Blog For Your eCommerce',
    description: 'Learn strategies to build trust and convert readers into loyal customers.',
    image: '/img/blog1.jpg',
  },
  {
    icon: <Atom className="w-5 h-5 text-[#2E8AE0]" />,
    title: 'Social Media',
    heading: 'Creating an Effective Social Media Marketing Campaign',
    description: 'Build a consistent voice that speaks your brand’s soul to the audience.',
    image: '/img/blog2.jpg',
  },
  {
    icon: <Bubbles  className="w-5 h-5 text-[#2E8AE0]" />,
    title: 'SEO',
    heading: 'How to Optimize Content for SEO : A Quick Guide',
    description: 'Use these proven techniques to boost engagement and sales copy results.',
    image: '/img/blog3.jpg',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <GlobeLock  className="text-[#2E8AE0] w-5 h-5" />
          <h2 className="text-xl font-semibold text-[#2E8AE0]">Our Blog</h2>
          <div className="w-20 h-[2px] bg-[#2E8AE0] rounded-full"></div>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black">Latest Blog & Articles</h3>
        <p className="text-gray-600 text-md md:text-lg">
          Stay updated with the latest trends, strategies, and creative ideas from our writing experts.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-md bg-white"
          >
            {/* Image */}
            <Image
              src={blog.image}
              alt={blog.heading}
              width={500}
              height={300}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hidden Overlay that shows on hover */}
           <div className="absolute inset-x-0 bottom-0 h-52 bg-white translate-y-full group-hover:translate-y-0 transition-all duration-500 p-5">
  <div className="flex items-center gap-2 mb-1">
    {blog.icon}
    <span className="text-sm font-medium text-[#2E8AE0]">{blog.title}</span>
  </div>
  <h4 className="text-lg font-semibold text-black mb-1">{blog.heading}</h4>
  <p className="text-sm text-gray-600 mb-4">{blog.description}</p>

  <button className="inline-flex items-center gap-2 text-sm font-medium text-[#2E8AE0] border border-[#2E8AE0] rounded-full px-4 py-1 transition-all duration-300 hover:text-white hover:bg-gradient-to-r from-[#2E8AE0] to-[#124576]">
    Read More
    <ArrowRight className="w-4 h-4" />
  </button>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
