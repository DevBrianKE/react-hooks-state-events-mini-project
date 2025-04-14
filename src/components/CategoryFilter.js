import React from "react";

function CategoryFilter({ onButton, selectedButton, categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {/* Render <button> elements for each category in the 'categories' array */}
      {categories.map((category, index) => (
        <button
          // If the category is the selected one, add the 'selected' class
          className={onButton === category ? 'selected' : ''}

          // The 'key' prop is required for efficient rendering of list items
          key={index}

          // When a button is clicked, call the 'selectedButton' function with the selected category
          onClick={() => { selectedButton(category) }}
        >
          {/* Display the category name inside the button */}
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
