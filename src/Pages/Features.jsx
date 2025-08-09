import React from "react";
import { Slide } from "react-awesome-reveal";

const features = [
  "Discover a variety of verified e-services with clear pricing and details.",
  "Filter services by category, price, and delivery speed easily.",
  "Chat securely with service providers before placing an order.",
  "Track your orders and service progress in your dashboard.",
  "Receive instant notifications when your service updates.",
  "Secure payment handling with trusted payment gateways.",
];

const Features = () => {
  return (
    <section
      id="features"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-900 uppercase rounded-full bg-purple-200">
          E-Services Marketplace
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-700 sm:text-4xl md:mx-auto">
          <Slide triggerOnce>
            Seamless E-Services Experience for Everyone
          </Slide>
        </h2>
        <p className="text-base  md:text-lg">
          Explore, compare, and order digital services efficiently from verified providers on our secure, user-friendly platform.
        </p>
      </div>

      <ul className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center p-3 transition-colors duration-200 border rounded shadow group hover:bg-purple-500 hover:border-purple-500"
          >
            <svg
              className="w-6 h-6 transition-colors duration-200 text-purple-500 group-hover:text-white sm:w-8 sm:h-8 mr-3"
              stroke="currentColor"
              viewBox="0 0 52 52"
              aria-hidden="true"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>    
            <span className=" transition-colors duration-200 group-hover:text-white">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
