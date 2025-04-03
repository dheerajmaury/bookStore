import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome here to learn something
              <span className="text-pink-500"> new every day!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Every day is a new opportunity to grow, explore, and embrace knowledge. Expand your mind, challenge your limits, and step into a world where learning never stops. Let's make today another step toward greatness!
            </p>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg text-white text-lg font-semibold shadow-md">
              "The beautiful thing about learning is that no one can take it away from you."
            </div>
          </div>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            alt="Learning Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;