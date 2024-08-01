import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className="fixed top-6 right-6">
      <ul className="flex gap-4">
        <li className="text-lg">Schedule</li>
        <li className="text-lg">Suggest a song</li>
        <li className="text-lg">RSVP</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
