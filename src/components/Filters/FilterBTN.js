import React, { useState } from 'react';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  const [selectedValue, setSelectedValue] = useState(false);

  const handleRadioChange = () => {
    setSelectedValue(!selectedValue);
    if (!selectedValue) {
      setPageNumber(1);
      task(items);
    } else {
      // Handle deselection if needed
    }
  };

  return (
    <div>
      <style jsx>
        {`
          input[type="radio"] {
            display: none;
          }
          input[type="radio"]:checked + label {
            background-color: #ffc107;
            border-color: #ffc107;
            color: white;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onChange={handleRadioChange}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          checked={selectedValue}
        />
        <label className={`btn btn-outline-warning ${selectedValue ? 'active' : ''}`} htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
