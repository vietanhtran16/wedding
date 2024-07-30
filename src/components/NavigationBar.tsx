import React, { useState } from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className="fixed top-6 right-6">
      <ul className="flex gap-4">
        <li>Schedule</li>
        <li>Suggest a song</li>
        <li>RSVP</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
