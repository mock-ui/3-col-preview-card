import React from "react";
import sedansvg from "./icon-sedans.svg";
import suvsvg from "./icon-suvs.svg";
import luxurysvg from "./icon-luxury.svg";
function App() {
  return (
    <React.Fragment>
      <div className="mx-52 my-24">
        <div className="grid grid-cols-3">
          <div className="custom-col-1 rounded-tl-xl rounded-bl-xl pb-12">
            <img src={sedansvg} className="w-16 object-contain my-12 mx-12" />
            <h1
              className="uppercase font-bold text-white text-3xl mx-12 font-sans"
              // style={{ fontFamily: "Big Shoulders Display" }}
            >
              Sedans
            </h1>
            <p
              className="my-12 mx-12 text-white font-bold font-sans"
              style={{}}
            >
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>

            <div className="">
              <button className="bg-white rounded-full mx-12 p-2 px-6 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="custom-col-2 ">
            <img src={suvsvg} className="w-16 object-contain my-12 mx-12" />
            <h1
              className="uppercase font-bold text-white text-3xl mx-12"
              style={{ fontFamily: "Big Shoulders Display" }}
            >
              SUVs
            </h1>
            <p className="my-12 mx-12 text-white">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <div className="">
              <button className="bg-white rounded-full p-2 mx-12 px-6">
                Learn More
              </button>
            </div>
          </div>

          <div className="custom-col-3 rounded-tr-xl rounded-br-xl">
            <img src={luxurysvg} className="w-16 object-contain my-12 mx-12" />
            <h1
              className="uppercase font-bold text-white text-3xl mx-12"
              style={{ fontFamily: "Big Shoulders Display" }}
            >
              Luxury
            </h1>
            <p className="my-12 mx-12 text-white">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <div className="">
              <button className="bg-white rounded-full p-2 px-6 mx-12">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Fakabbir Amin</a>.
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
