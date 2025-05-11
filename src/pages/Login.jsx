import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-400 relative">
      {/* Top Blue Header */}
      <div className="bg-[#2E4482] h-[40vh] md:h-[50vh] w-full flex justify-between items-start p-4 md:p-6">
        <img src="/logo.png" alt="Heli Pakistan" className="h-10 md:h-14" />
        <div className="text-white h-[50vh] text-right">
          <h1 className="text-2xl md:text-xl font-bold">KZK</h1>
          <p className="text-xs md:text-sm">ESTB-1994</p>
        </div>
      </div>

      {/* Login Card */}
      <div className="absolute  top-1/2 left-1/2 w-[90%] sm:w-[80%] md:w-[400px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-xl font-bold text-center mb-2">Login to your account</h2>
        <p className="text-center text-gray-500 mb-6 text-sm md:text-base">
          Welcome back! Time to login for continue.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address*</label>
          <input
            type="email"
            placeholder="info@helipakistan.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Password*</label>
          <input
            type="password"
            placeholder="enter password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center text-xs md:text-sm mb-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
        </div>

        <button className="w-full bg-[#344B91] hover:bg-blue-900 cursor-pointer text-white py-2 rounded-md font-semibold text-sm md:text-base">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
