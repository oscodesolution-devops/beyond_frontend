// AboutSection.js

import React from 'react';

const AboutSection = () => {
  return (
    <div className="max-w-screen px-4 md:px-40 mx-auto mt-6 md:mt-10 py-6 md:py-8 bg-white rounded-md shadow-md">
      <h2 className="text-[28px] md:text-[40px] font-bold mb-4 md:mb-6 text-center md:text-start">
        About Our French Language Courses
      </h2>

      {/* Image */}
      {/* <img
    src={frenchClassroomImage}
    alt="French Classroom"
    className="mb-6 rounded-md shadow-md w-full"
  /> */}

      {/* Why The French Language Course in Delhi? */}
      <div className="mb-4 md:mb-6">
        <h3 className="text-md md:text-lg font-semibold mb-2 text-center md:text-start">
          Why The French Language Course in Delhi?
        </h3>
        <p className="text-sm md:text-base text-gray-700 text-justify">
          Choosing to learn the French language in Delhi opens doors to a world of opportunities. Our courses blend cultural immersion with linguistic proficiency, providing an unparalleled learning experience. Beyond Excellence stands out for its dynamic teaching methods, fostering a supportive environment that ensures your success in mastering French.
        </p>
      </div>

      {/* Why Should I Learn the French Language? */}
      <div>
        <h3 className="text-md md:text-lg font-semibold mb-2 text-center md:text-start">
          Why Should I Learn the French Language?
        </h3>
        <p className="text-sm md:text-base text-gray-700 text-justify">
          The French language is not just a means of communication; it's a cultural passport. Beyond the practical advantages, such as enhanced travel experiences and increased job prospects, learning French enriches your understanding of literature, arts, and philosophy. It's a skill that transcends borders and connects you to a global community.
        </p>
      </div>
    </div>

  );
};

export default AboutSection;
