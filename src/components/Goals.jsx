import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Goals = ({ isAuthenticated }) => {
  const [goals, setGoals] = useState(
    localStorage.getItem("goals")
      ? JSON.parse(localStorage.getItem("goals"))
      : []
  );
  

  const [newGoal, setNewGoal] = useState(
    localStorage.getItem("newGoal")
      ? JSON.parse(localStorage.getItem("newGoal"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("newGoal", JSON.stringify(newGoal));
  }, [newGoal]);
  const navigate = useNavigate()
  const handleAddGoal = (event) => {
    event.preventDefault();
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
      alert("You need to be logged in to add a Goal.");
      navigate("/login");
    }
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
    <div className="pt-[340px] w-full h-screen bg-[#0a192f] pb-40 ">
      <div className="max-w-[1000px] mx-auto px-8  justify-center h-full w-full ">
        <h1 className="bg-[#0a192f] text-4xl font-bold inline border-b-4 max-w-[400px] text-gray-300  border-pink-600 ">
          Goal List
        </h1>
        <form
          onSubmit={handleAddGoal}
          className="flex mb-4 justify-between max-w-3xl pt-4"
        >
          <input
            type="text"
            value={newGoal}
            onChange={(event) => setNewGoal(event.target.value)}
            placeholder="Add a new goal"
            className="rounded-md border-2 outline-none focus:border-cyan-400 focus:bg-slate-50 p-2 mb-2 flex-1 mr-4"
          />
          {/* in button added conditional save feature ? it works as expected */}
          <button
            type="submit"
            className="bg-gradient-to-r from-slate-500  text-white py-3 px-8 flex rounded-full shadow-[#040c16] shadow-sm hover:scale-110 duration-500"
            onClick={handleAddGoal}
          >
            Add Goal
          </button>
        </form>
        <ul className="list-none mb-0 ">
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
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Delete Completed Goals
        </button>
      </div>
    </div>
  );
};

export default Goals;
