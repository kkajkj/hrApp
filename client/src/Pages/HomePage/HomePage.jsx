import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Welcome to YourHR</h1>
    <Link to="/signup" className="text-blue-500 hover:underline">
      Sign Up to Submit Your Resume
    </Link>
  </div>
);

export default HomePage;
