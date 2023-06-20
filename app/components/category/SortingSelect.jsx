'use client'
import { useState } from "react";
const SortingSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
    <label htmlFor="sorting">Sort:</label>
    <select value={selectedOption} onChange={handleChange} className="SortingSelect" id="sorting">
      <option value="">Default</option>
      <option value="NameAsc">Name (A - Z)</option>
      <option value="NameDes">Name (Z - A)</option>
      <option value="NameAsc">Price (Low - High)</option>
      <option value="NameDes">Name (High - Low)</option>
      <option value="brands">Brands</option>
    </select>
    </>
  );
};

export default SortingSelect;
