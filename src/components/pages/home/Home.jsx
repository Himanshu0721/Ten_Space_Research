import React, { useState } from "react";
import Card from "../../Card/Card";

function Home() {
  const objs = [
    {
      img: "https://images.pexels.com/photos/586061/pexels-photo-586061.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "TEN semi-cryogenic engine-powered single-stage rocket. Agnibaan SOrTeD will lift off vertically and follow a predefined trajectory while executing a well planned series of maneuvers throughout flight, in contrast to conventional sounding rockets that launch from guide rails.",
    },
    {
      img: "https://images.pexels.com/photos/9592034/pexels-photo-9592034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "The autopilot is one of the devices that distinguishes real flight from an engine ground test fire. At our own in-loop facility, we have described the gimbaling technology that the autopilot uses to rotate the thrust.",
    },
    {
      img: "https://pbs.twimg.com/media/GeBzCZ0a0AMjPet?format=jpg&name=large",
      text: "Our mission control room at SDSC SHAR is replicated in the mission control room design, which is based on the rehearsals we conducted in a standalone arrangement.",
    },
  ];
  const [data, setData] = useState(objs);

  return (
    <>
      <div className="w-full h-screen relative">
        <video className="h-screen w-screen object-cover" autoPlay loop muted>
          <source src="/src/assets/rocket.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="lg:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white  md:text-4xl  sm: text-4xl">
            SubOrbital Technological Demonstrator
          </h1>
        </div>
      </div>
      <div className="px-16 my-10 max-sm:px-8">
        <p>
          The launch of the TEN SOrTeD Mission-01 from Noida, Uttar Pradesh,
          India, marked a crucial turning point in our aerospace history. This
          mission demonstrated TEN capabilities with its precise execution,
          advanced propulsion, and careful planning. We view this achievement as
          a strong foundation for future space developments, reinforcing our
          commitment to making space accessible to everyone and offering
          reasonably priced, cutting-edge aerospace technology.
        </p>
      </div>
      <div className="h-full flex gap-10 px-4 justify-around w-full mt-5 mb-10 flex-wrap max-lg:gap-5 ">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
