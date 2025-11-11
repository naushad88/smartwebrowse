'use client';

import React from 'react';
import { motion } from 'framer-motion';

const countries = [
  { name: 'United States', icon: 'fas fa-star', color: 'from-blue-500 to-blue-600' },
  { name: 'United Kingdom', icon: 'fas fa-crown', color: 'from-purple-500 to-purple-600' },
  { name: 'European Union', icon: 'fas fa-euro-sign', color: 'from-green-500 to-green-600' },
  { name: 'Ireland', icon: 'fas fa-leaf', color: 'from-emerald-500 to-emerald-600' },
  { name: 'Gulf Region', icon: 'fas fa-mosque', color: 'from-amber-500 to-amber-600' },
  { name: 'Japan', icon: 'fas fa-torii-gate', color: 'from-red-500 to-red-600' },
  { name: 'Australia', icon: 'fas fa-map-marker-alt', color: 'from-indigo-500 to-indigo-600' }
];

export default function WorldMap() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            <i className="fas fa-globe mr-2"></i>
            Global Reach
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Global Reach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Serving clients across 7 countries with localized expertise and 24/7 support
          </motion.p>
        </div>

        {/* Simple Country Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto mb-8"
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${country.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${country.icon} text-xl md:text-2xl text-white`}></i>
              </div>
              <p className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                {country.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">7</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
