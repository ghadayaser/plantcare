import React from 'react'
import style from './Home.module.css'
import bg from '../../assets/images/background_home.jpeg'
export default function Home() {

  return <>  <div
    className=" relative w-full h-screen flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative text-center text-white w-11/12 md:w-3/4 lg:w-2/3 px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
        Because every plant tells a story, care for it smartly!
      </h2>
      <p className="text-lg md:text-xl font-light">
        Give your plants the best care with smart technology.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button
          className="px-6 py-3 bg-green-700 text-white rounded-lg text-lg font-semibold hover:bg-green-900 transition-all duration-300"
          aria-label="Log in to your account"
        >
          Log in
        </button>
        <button
          className="px-6 py-3 bg-green-700 text-white rounded-lg text-lg font-semibold hover:bg-green-900 transition-all duration-300"
          aria-label="Sign up for a new account"
        >
          Sign up
        </button>
        <button
          className="px-6  py-3 bg-teal-700 text-white rounded-lg text-lg font-semibold hover:bg-teal-900 transition-all duration-300"
          aria-label="Learn more about our plant care solutions"
        >
          Learn more!
        </button>
      </div>
    </div>
  </div>


  </>
}
