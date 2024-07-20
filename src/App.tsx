import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-indigo-400 p-8">
      <div className="max-w-md bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          You're Invited!
        </h1>
        <div className="text-center mt-4">
          <p className="text-xl text-gray-700">
            Amber Thao Pham & Viet Anh Tran
          </p>
          <p className="text-md text-gray-600">Wednesday, 23th October 2024</p>
          <p className="text-md text-gray-600">at 11:30 AM</p>
        </div>
        <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
          <h2 className="text-lg text-gray-800 font-semibold text-center">
            Wedding Ceremony
          </h2>
          <address className="not-italic text-md text-gray-600 mt-2 text-center">
            37 Hung Vuong, Ba Dinh, Hanoi
          </address>
        </div>
        <p className="text-md text-gray-600 mt-4 text-center">
          We hope you can join us on our special day.
        </p>
        <div className="text-center mt-6">
          <a
            href="RSVP_LINK"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            RSVP Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
