// FAQ.js

import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    },
    {
      question: 'How do I install Tailwind CSS in my project?',
      answer: 'You can install Tailwind CSS using npm or yarn. Refer to the official documentation for detailed instructions.',
    },
    {
      question: 'How do I install Tailwind CSS in my project?',
      answer: 'You can install Tailwind CSS using npm or yarn. Refer to the official documentation for detailed instructions.',
    },
    {
      question: 'How do I install Tailwind CSS in my project?',
      answer: 'You can install Tailwind CSS using npm or yarn. Refer to the official documentation for detailed instructions.',
    },
    // Add more FAQ items as needed
  ];

  const [openItems, setOpenItems] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-4 h-auto">
      <h2 className="text-[45px] font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <button
                className="text-blue-500 focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                {openItems[index] ? 'Hide' : 'Show'}
              </button>
            </div>
            {openItems[index] && (
              <div className="mt-4">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
