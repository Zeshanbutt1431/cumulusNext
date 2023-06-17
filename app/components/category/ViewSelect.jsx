'use client'
import { useState } from "react";
const ViewSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <select value={selectedOption} onChange={handleChange} className="ViewSelect" >
      <option value="">Default</option>
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="80">80</option>
      <option value="All">All</option>
    </select>
  );
};

export default ViewSelect;