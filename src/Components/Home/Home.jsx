import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './Home.module.css';
import bg from '../../assets/images/background_home.jpeg';

export default function Home() {
  return (
    <div className="bg-[#050F02] text-[#e5d5c5] font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
        >
          <motion.img
            src={bg}
            alt="Plant Care Background"
            className="w-full h-[600px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-[#8c826d] mb-6 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Keeping Your Plants Healthy
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="mb-16 max-w-4xl mx-auto text-center p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl text-[#8c826d] mb-6 tracking-wide font-bold">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Lrafdiago Service */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-[#253221] via-[#40502f] to-[#050F02] text-[#e5d5c5] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#8c826d] mb-4">Leafdiagnosis</h3>
            <p className="mb-4">Comprehensive diagnosis for plant health.</p>
            <NavLink to={'/Leafdiagnosis'} className="text-[#8c826d] font-bold text-xl hover:text-[#bab09b]">
              Learn More →
            </NavLink>
          </motion.div>
          
          {/* Water Analysis Service */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-[#253221] via-[#40502f] to-[#050F02]text-[#e5d5c5] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#8c826d] mb-4">Water Analysis</h3>
            <p className="mb-4">Ensuring the best water quality for your plants.</p>
            <NavLink to={'/Wateranalysis'}className="text-[#8c826d] text-xl font-bold hover:text-[#bab09b]">
              Learn More →
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
