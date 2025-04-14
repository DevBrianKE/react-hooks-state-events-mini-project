import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  // State to store the list of tasks
  const [task, setTask] = useState(TASKS);
  
  // State to store the list of categories (unchanging)
  const [categories] = useState(CATEGORIES);
  
  // State to keep track of the selected category filter
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('All');

  // Function to add a new task to the list
  function addNewItemtoList(newItem) {
    // Add the new task to the task list (preserving previous tasks)
    setTask([...task, newItem]);
  }

  // Function to delete a task based on its text value
  function deletedItem(deletedItem) {
    // Filter out the task that matches the deleted item text
    setTask(task.filter((item) => item.text !== deletedItem));
  }

  // Filter the tasks based on the selected category
  const itemDisplayed = task
    .filter((item) => { 
      // If "All" category is selected, show all tasks
      if (selectedCategoryButton === 'All') return true;
      // Otherwise, show tasks matching the selected category
      return selectedCategoryButton === item.category;
    });

  return (
    <div className="App">
      <h2>My tasks</h2>
      
      {/* Category Filter Component */}
      <CategoryFilter
        categories={categories} // Pass the categories to the filter
        onButton={selectedCategoryButton} // Pass the current selected category
        selectedButton={setSelectedCategoryButton} // Function to update selected category
      />
      
      {/* New Task Form Component */}
      <NewTaskForm
        onTaskFormSubmit={addNewItemtoList} // Pass the function to add a new task
        categories={categories} // Pass available categories for the new task
      />
      
      {/* Task List Component */}
      <TaskList 
        deletedItem={deletedItem} // Pass the delete task function
        tasks={itemDisplayed} // Pass the filtered tasks to display
      />
    </div>
  );
}

export default App;
