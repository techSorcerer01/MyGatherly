import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImage from "../assets/AboutUs.jpg"; // Replace with an actual image path

function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Gatherly</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            At Gatherly, we believe in the power of bringing people together. 
            Whether you're planning an intimate gathering, a community event, or a global conference, 
            our platform is here to make it simple, seamless, and successful.
          </p>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-center">
          {/* Left Section: Image */}
          <div className="lg:w-1/2">
            <img
              src={AboutImage}
              alt="About Gatherly"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4">
              Our mission is to connect people through events that inspire, engage, and leave a lasting impact. 
              From discovering exciting events in your area to organizing your own, Gatherly makes it effortless 
              to turn moments into memories.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Choose Gatherly?
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">User-friendly platform for event discovery and management.</li>
              <li className="mb-2">Powerful filters to find the events that match your interests.</li>
              <li className="mb-2">Comprehensive tools for event organizers to manage every detail.</li>
              <li className="mb-2">Dedicated to fostering connections and community.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Gatherly was created by a passionate team of innovators dedicated to simplifying event management. 
            We are developers, designers, and dreamers with a shared vision to make event planning as fun as attending them!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
