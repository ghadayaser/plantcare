import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import bg1 from '../../assets/images/bg-1.jpeg';
import bg2 from '../../assets/images/bg-2.jpeg';
import bg3 from '../../assets/images/bg-4.jpg';

export default function Home() {
  const backgrounds = [bg1, bg2, bg3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050F02] text-[#e5d5c5] font-oswald min-h-screen py-16 px-6 md:px-20 lg:px-32 relative">
      {/* Hero Section */}
      <section className="text-center mb-20 relative mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Background Image with Smooth Fade Transition */}
          <div className="relative w-full h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={backgrounds[index]} // Key ensures new animation on change
                src={backgrounds[index]}
                alt="Plant Care Background"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Overlay Text */}
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
          {/* Leaf Diagnosis Service */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-[#253221] via-[#40502f] to-[#050F02] text-[#e5d5c5] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#8c826d] mb-4">Leaf Diagnosis</h3>
            <p className="mb-4">Comprehensive diagnosis for plant health.</p>
            <NavLink to={'/Leafdiagnosis'} className="text-[#8c826d] font-bold text-xl hover:text-[#bab09b]">
              Learn More →
            </NavLink>
          </motion.div>

          {/* Water Analysis Service */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-[#253221] via-[#40502f] to-[#050F02] text-[#e5d5c5] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#8c826d] mb-4">Water Analysis</h3>
            <p className="mb-4">Ensuring the best water quality for your plants.</p>
            <NavLink to={'/Wateranalysis'} className="text-[#8c826d] text-xl font-bold hover:text-[#bab09b]">
              Learn More →
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
