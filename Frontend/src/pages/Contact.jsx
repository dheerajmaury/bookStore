import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="container mx-auto py-20 px-6 text-center">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold">Get in Touch</h1>
        <p className="mt-3 text-lg">We’d love to hear from you! Reach out with any questions or feedback.</p>
      </div>

      {/* Contact Details */}
      <div className="mt-10 grid md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400">
          <FaEnvelope className="text-4xl text-blue-500 transition-colors duration-300 hover:text-blue-700" />
          <h3 className="text-xl font-semibold mt-3">Email Us</h3>
          <p className="mt-2">dheerajmaurya1906@gmail.com</p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-green-500 dark:hover:border-green-400">
          <FaPhone className="text-4xl text-green-500 transition-colors duration-300 hover:text-green-700" />
          <h3 className="text-xl font-semibold mt-3">Call Us</h3>
          <p className="mt-2">9876543210</p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-red-500 dark:hover:border-red-400">
          <FaMapMarkerAlt className="text-4xl text-red-500 transition-colors duration-300 hover:text-red-700" />
          <h3 className="text-xl font-semibold mt-3">Visit Us</h3>
          <p className="mt-2">Deoria,Uttar Pradesh,India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;