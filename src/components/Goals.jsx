import React, { useState, useEffect } from "react";

const Goals = () => {
  const [goals, setGoals] = useState(
    localStorage.getItem('goals')
      ? JSON.parse(localStorage.getItem('goals'))
      : []
  );

  const [newGoal, setNewGoal] = useState(
    localStorage.getItem('newGoal')
      ? JSON.parse(localStorage.getItem('newGoal'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem('newGoal', JSON.stringify(newGoal));
  }, [newGoal]);

  const handleAddGoal = (event) => {
    event.preventDefault();
    if (newGoal.trim() !== "") {
      const newGoalObject = {
        id: goals.length + 1,
        title: newGoal,
        completed: false,
      };
      setGoals([...goals, newGoalObject]);
      setNewGoal("");
    }
  };

  const handleToggleCompleted = (id) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id === id) {
          return { ...goal, completed: !goal.completed };
        }
        return goal;
      })
    );
  };

  const handleDeleteCompleted = () => {
    setGoals(goals.filter((goal) => !goal.completed));
  };

  return (
    <div className="pt-[300px]">
      <h1 className="text-3xl font-bold mb-4">Goal List</h1>
      <form onSubmit={handleAddGoal} className="flex mb-4">
        <input
          type="text"
          value={newGoal}
          onChange={(event) => setNewGoal(event.target.value)}
          placeholder="Add a new goal"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Goal
        </button>
      </form>
      <ul className="list-none mb-0">
        {goals.map((goal) => (
          <li key={goal.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => handleToggleCompleted(goal.id)}
              className="mr-2"
            />
            <span className="text-lg">{goal.title}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleDeleteCompleted}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete Completed Goals
      </button>
    </div>
  );
};

export default Goals;
