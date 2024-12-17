import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative bg-gradient-to-r from-black via-gray-800 to-black text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-20 mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 sm:mt-8 lg:mt-0">
            Bringing Space Within <span className="text-green-500">Everyone's Reach</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 tracking-wide">
            Going to space shouldn’t be the hardest part of utilizing, living in, or working from space. So, why not design & build a product that makes the earth-to-space journey as simple, as quick, and as affordable as possible?
          </p>
          <a
            href="#"
            className="inline-block text-white font-semibold hover:underline mt-4"
          >
            Check out Ten Space
          </a>
        </div>
      </div>

      {/* Rocket Section */}
      <div className="bg-white py-6 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Rocket is a highly customizable, 2 stage launch vehicle.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Capable of taking up to 100 kg to orbits around 700 km high, Rocket can access both low and high inclination orbits and is completely mobile – designed for accessing more than 10 launchports.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Driven by LOX/Kerosene engines in all its stages, Rocket is configurable by the customer. Yes, Rocket doesn’t fly with the same number of engines all the time. The mission, the satellite, and the launchport itself would decide how many engines go on the first stage.
            </p>
            <a
              href="#"
              className="text-sm sm:text-base font-semibold hover:underline text-gray-600 "
            >
              Tell me more
            </a>
          </div>

          {/* Image Section */}
          <div className="relative overflow-hidden w-full lg:w-1/3 flex items-center justify-center sm:block hidden">
  <div className="relative h-96 w-64">
    <img
      src="https://agnikul.in/static/media/home-agni.cc387bed4312c9ebd8ce.jpg"
      alt="Agnibaan Rocket"
      className="object-cover transition-transform duration-[4000ms] ease-in-out hover:translate-y-[-70%]"
    />
  </div>
</div>








        </div>
      </div>

      {/* Facts & Figures */}
      <div className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-left">
            Facts & Figures
          </h2>
          <p className="text-left text-gray-600 text-base sm:text-lg lg:text-xl mt-4">
            Rocket first stage could have 4 / 5 / 6 or 7 engines. An optional third “baby” stage might be available for select missions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { title: "5", desc: "Configuration", hoverText: "A first stage with 4 / 5 / 6 or 7 engines. A “baby” stage could be made available for select missions." },
              { title: "2", desc: "Weeks", hoverText: "Payload integration to launch won’t take more than a fortnight. Yes, launch-when-you-want." },
              { title: "10+", desc: "Launch Ports", hoverText: "Access to 10+ launchports today. Access to 25+ coming soon. Yes, launch-where-you-want." },
              { title: "100kg", desc: "Mass", hoverText: "Same price per kg for any payload in the 25-100 kg range. Yes, pay-for-what-you-launch." },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50 shadow-lg rounded-lg py-8 text-center relative group"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.desc}</p>
                <div className="absolute inset-0 bg-green-700 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg shadow-lg">
                  <p className="text-sm sm:text-base text-center">{card.hoverText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 py-16"
        style={{
          backgroundImage: "url('https://agnikul.in/static/media/form-back.5e6628f16d8f506b363b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
          Ready To Launch?
        </h2>
        <p className="text-gray-500 text-base sm:text-lg lg:text-2xl mt-8">
          Yes, Rocket is configurable (if you have not picked that up already). So, let's go to space together.
        </p>
        <Link to="/book-launch">
          <button className="mt-8 sm:mt-16 text-sm sm:text-lg bg-gray-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>BOOK A LAUNCH</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
