import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "ORIXA transformed our outdated website into a modern, high-performing platform. Their web development team delivered exactly what we needed, and the results have been incredible. Our conversion rates improved by 40% within the first month.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      location: "United States",
      initials: "SJ",
      rating: 5
    },
    {
      quote: "The mobile app ORIXA developed for us exceeded all expectations. From initial consultation to launch, their team was professional, communicative, and delivered on time. The app's user experience is outstanding.",
      author: "Michael Rodriguez",
      position: "Founder, AppVenture",
      location: "Canada",
      initials: "MR",
      rating: 5
    },
    {
      quote: "ORIXA's digital marketing strategies helped us increase our online visibility significantly. Their SEO and social media campaigns delivered measurable results. Highly recommend their services!",
      author: "Emma Liu",
      position: "Marketing Director, GrowthCo",
      location: "Australia",
      initials: "EL",
      rating: 5
    },
    {
      quote: "Working with ORIXA on our software development project was a game-changer. Their expertise in enterprise solutions and attention to detail resulted in a robust system that streamlined our operations.",
      author: "David Kim",
      position: "CTO, Enterprise Solutions",
      location: "Singapore",
      initials: "DK",
      rating: 5
    },
    {
      quote: "The graphic design work by ORIXA elevated our brand identity completely. Their creative team understood our vision perfectly and delivered designs that truly represent our company values.",
      author: "Lisa Chen",
      position: "Creative Director, BrandStudio",
      location: "United Kingdom",
      initials: "LC",
      rating: 5
    },
    {
      quote: "ORIXA's video editing services brought our marketing campaigns to life. The quality of their work and attention to detail made our videos stand out in a crowded market.",
      author: "James Wilson",
      position: "Marketing Manager, MediaCorp",
      location: "Germany",
      initials: "JW",
      rating: 5
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of businesses trust ORIXA to power their digital transformation and drive growth.
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -100 * testimonials.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <Card className="h-full">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-sm mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-indigo-600 font-semibold text-sm">{testimonial.initials}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                        <div className="text-xs text-gray-600">{testimonial.position} | {testimonial.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Second row scrolling in opposite direction */}
        <div className="relative mt-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [-100 * testimonials.length, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-80">
                  <Card className="h-full">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-sm mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-indigo-600 font-semibold text-sm">{testimonial.initials}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                        <div className="text-xs text-gray-600">{testimonial.position} | {testimonial.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;