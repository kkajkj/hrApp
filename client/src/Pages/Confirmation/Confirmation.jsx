import React from "react";

const Confirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md text-center">
        {/* Header with a thank you message */}
        <h2 className="text-2xl font-bold text-green-500 mb-4">Thank you for signing up!</h2>
        {/* Informative text about the submission */}
        <p className="text-gray-700">We have received your resume. We will get back to you soon.</p>
      </div>
    </div>
  );
};

export default Confirmation;
