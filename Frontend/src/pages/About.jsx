import React from "react";

function About() {
  return (
    <div className="container mx-auto py-20 px-6 text-center">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h1 className="text-4xl font-extrabold">About BookStore</h1>
        <p className="mt-3 text-lg">Your go-to source for books, knowledge, and inspiration.</p>
      </div>

      {/* Mission Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At BookStore, we believe that books are the gateway to knowledge and creativity. Our mission is to connect book lovers with their next great read through a seamless and enjoyable experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Bookstore"
          className="w-3/5 md:w-2/5 lg:w-1/3 h-auto rounded-lg shadow-md object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Wide Collection</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">From bestsellers to classics, we offer books across all genres.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Affordable Prices</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">We provide the best books at competitive prices.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:scale-105">
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Get your favorite books delivered to your doorstep quickly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
