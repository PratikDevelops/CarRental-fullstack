import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      location: "Mumbai, India",
      testimonial:
        "The entire rental experience was smooth and hassle-free. Highly impressed with the service quality!",
    },
    {
      name: "Priya Iyer",
      location: "Chennai, India",
      testimonial:
        "Excellent cars and even better customer support! They made my trip extremely comfortable.",
    },
    {
      name: "Rohit Verma",
      location: "Delhi, India",
      testimonial:
        "Reliable, affordable, and premium quality service. I recommend them to everyone looking for car rentals.",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

      <Title
        title="What Our Customers Say"
        subTitle="See why travelers across India trust us for a premium and reliable travel experience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            {/* Avatar */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {item.name.charAt(0)}
                </span>
              </div>

              <div>
                <p className="text-xl">{item.name}</p>
                <p className="text-gray-500">{item.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img key={i} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>

            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{item.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
