import React from 'react';

const GetStarted = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get Started with Interakt Today</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Engage & Re-engage Prospects</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Drive Sales</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Deliver higher CSAT</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Support at Scale</span>
          </div>
        </div>
        <button className="bg-[#05A68B] text-white px-6 py-3 text-lg font-semibold transition duration-300">
          Try Interakt for Free
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
