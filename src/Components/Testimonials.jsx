import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Product Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "E-Services made managing our tasks so easy and efficient. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Freelancer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The mobile-friendly design lets me stay productive on the go.",
    rating: 4,
  },
  {
    name: "Amina Khan",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Secure, reliable, and simple to use — perfect for my small business needs.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ name, role, photo, text, rating }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col"
            >
              <FaQuoteLeft className="text-purple-400 mb-4 w-8 h-8" />
              <p className="text-gray-700 flex-grow mb-6">"{text}"</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={photo}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-purple-700">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
