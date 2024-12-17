import React from "react";

const Home = () => {
  return (
    <div className="relative my-8 bg-gradient-to-r from-black via-gray-800 to-black text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-20 mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 sm:mt-8 lg:mt-0">
            Bringing Space Within{" "}
            <span className="text-green-500">Everyone's Reach</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-lg text-gray-300 tracking-wide">
            Going to space shouldn’t be the hardest part of utilizing, living
            in, or working from space. So, why not design & build a product that
            makes the earth-to-space journey as simple, as quick, and as
            affordable as possible?
          </p>
          <a
            href="#"
            className="inline-block text-white font-semibold hover:underline mt-4">
            Check out Ten Space
          </a>
        </div>
      </div>
      <div className="bg-white py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-2/3 space-y-6">
            {/* Icon and Title */}
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl  lg:text-4xl font-bold text-black">
                Agnibaan is a highly customizable, 2 stage launch vehicle.
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg">
              Capable of taking up to 100 kg to orbits around 700 km high,
              Agnibaan can access both low and high inclination orbits and is
              completely mobile – designed for accessing more than 10
              launchports.
            </p>

            <p className="text-gray-400 text-lg">
              Driven by LOX/Kerosene engines in all its stages, Agnibaan is
              configurable by the customer. Yes, Agnibaan doesn’t fly with the
              same number of engines all the time. The mission, the satellite,
              and the launchport itself would decide how many engines go on the
              first stage.
            </p>

            <p className="text-gray-400 text-lg">
              How is this possible? What about controllability? Assembly?
            </p>

            {/* Link */}
            <a
              href="#"
              className="text-gray-400 font-semibold hover:underline ">
              Tell me more
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 py-16 mt-8 overflow-hidden">
            <div className="relative">
              <img
                src="https://agnikul.in/static/media/home-agni.cc387bed4312c9ebd8ce.jpg" // Replace with your rocket image URL
                alt="Agnibaan Rocket"
                className="w-96 h-96 object-cover transform hover:-translate-y-10 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-left space-y-4">
            {/* <div className="flex justify-left">
            <img
              src="https://example.com/icon.png" // Replace with your flame icon URL
              alt="Flame Icon"
              className="w-8 h-8"
            />
          </div> */}
            <h2 className="text-3xl lg:text-4xl text-left font-bold text-black">
              Facts & Figures
            </h2>
            <p className=" text-left text-2xl text-gray-600">
              Agnibaan’s first stage could have 4 / 5 / 6 or 7 engines. An
              optional third “baby” stage might be available for select
              missions.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-gray-50 shadow-lg rounded-lg py-8 text-center relative group">
              <h3 className="text-3xl font-bold text-green-700">5</h3>
              <p className="text-gray-600">Configuration</p>
              {/* Hidden content that becomes visible on hover */}
              <div className="absolute inset-0 bg-green-700 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-lg shadow-lg">
                <h1 className="text-center">
                  A first stage with 4 / 5 / 6 or 7 engines. A “baby” stage
                  could be made available for select missions.
                </h1>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 shadow-lg rounded-lg py-8 text-center relative group">
              <h3 className="text-3xl font-bold text-green-700">2</h3>
              <p className="text-gray-600">Weeks</p>
              {/* Hidden content that becomes visible on hover */}
              <div className="absolute inset-0 bg-green-700 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-lg shadow-lg">
                <h1 className="text-center">
                  Payload integration to launch won’t take more than a
                  fortnight. Yes, launch-when-you-want.
                </h1>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 shadow-lg rounded-lg py-8 text-center relative group">
              <h3 className="text-3xl font-bold text-green-700">10+</h3>
              <p className="text-gray-600">Launch Ports</p>
              {/* Hidden content that becomes visible on hover */}
              <div className="absolute inset-0 bg-green-700 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-lg shadow-lg">
                <h1 className="text-center">
                  Access to 10+ launch ports today. Access to 25+ coming soon.
                  Yes, launch-where-you-want.
                </h1>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 shadow-lg rounded-lg py-8 text-center relative group">
              <h3 className="text-3xl font-bold text-green-700">100kg</h3>
              <p className="text-gray-600">Mass</p>
              {/* Hidden content that becomes visible on hover */}
              <div className="absolute inset-0 bg-green-700 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-lg shadow-lg">
                <h1 className="text-center">
                  Same price per kg for any payload in the 25-100 kg range. Yes,
                  pay-for-what-you-launch.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-white relative text-center px-4"
        style={{
          backgroundImage:
            "url('https://agnikul.in/static/media/form-back.5e6628f16d8f506b363b.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0  opacity-30 pointer-events-none"></div>

        <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mt-2">
          Ready To Launch?
        </h2>

        <p className="text-gray-500 text-2xl mt-8 max-w-full">
          Yes, Agnibaan is configurable (if you have not picked that up
          already). So, let's go to space together.
        </p>

        <button className="mt-20 text-lg bg-gray-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>BOOK A LAUNCH</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
