import { useState } from "react";
import Card from "../../Card/Card";

const Technology = () => {
  const objs = [
    {
      id: 1,
      img: "https://preview.redd.it/kivs1nhm60a11.jpg?width=1080&crop=smart&auto=webp&s=d194680b745249dc81da1dc7c993291c0ddabf39",
      title: "Hot Fire Testing",
      text: "It is one thing to realize that the engine is semi-cryogenic. Another is to fire it. Engines have been operating since September 2018.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW0QZbZzPWFtEb0Y0ta-iCLqOLasBgIOt1g&s",

      title: "TEN: A semi-cryogenic, single-piece, 3D-printed engine.",
      text: "We have a special TEN engine. It is one piece and fully 3D printed. This single piece of hardware has thousands of meticulously engineered pieces. It propels our Agnibaan's upper stage and has a thrust capacity of around 3kN at sea level. The miracle of 3D printing! ",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsG-DJRm5ksHHcs1X4rH5ZFCsP-lyFKaSRA&s",
      title: "vessels under pressure",
      text: "We store liquid pressurants and propellants at high pressures in our stages. In order to wrap our pressure vessels with fiber and enable thin-walled tanks to withstand these massive pressures, we have developed novel designs, materials, and adhesives. Although the technology is not new to the business, no one has ever done it the way we do, at a fraction of the time and expense.",
    },
    {
      id: 4,
      img: "https://content.instructables.com/FVJ/MUMH/K1HXAZ2Q/FVJMUMHK1HXAZ2Q.jpg?auto=webp&fit=bounds&frame=1&width=1024",
      title: "3D Printed Components.",
      text: "We use 3D printing extensively to manufacture the critical parts of space research such as engines, pumps, motor casings and package casing. The parts are being manufactured at our own facility called TEN Rocket Factory - 1. The facility has the ability to produce two rocket engines every week which could enable the production of one launch vehicle every month.",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DXRdeyXms7elR78J--PgcAbS9Id1BGP9mQ&s",
      title: "Launchpad",
      text: "At Sriharikota, ISRO's most popular launchpad, TEN has set up India's first private launchpad. As a result, our clients may now use one more spaceport in India.",
    },
    {
      id: 6,
      img: "https://www.tsd-space.it/wp-content/uploads/2019/09/Attitude-Control-System-IF-and-Housekeeping-Boards-for-Satellite-Platform-Data-System-1024x768.png?x65472",
      title: "Avionics.",
      text: "Internally built avionics packages and onboard computers power our space research.",
    },
  ];
  const [data, setData] = useState(objs);

  return (
    <>
      <div className="w-full h-full ">
        <div className="h-32 my-14 flex items-center justify-center flex-col  bg-white w-full ">
          <h1 className="text-3xl  font-semibold  mb-4">Technology</h1>
          <p className="text-center w-full  text-lg  text-gray-500 max-sm:px-2 ">
            At the core of what we wish to provide our clients is engineering.
            Read more about some of our software and hardware here.
          </p>
        </div>
        <div className="h-full flex gap-10 px-4 justify-around w-full mt-5 mb-10 flex-wrap max-lg:gap-5">
          {data.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Technology;
