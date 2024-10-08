import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// NewTick Component
function NewTick({ newTick, handleChange, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0a192f] p-4 rounded shadow-md flex flex-col"
    >
      <input
        name="title"
        placeholder="New Climb"
        value={newTick.title || ""}
        onChange={handleChange}
        className="rounded-md border-2 outline-none focus:border-cyan-400 focus:bg-slate-50 p-2 mb-2 w-full"
      />
      {!newTick.title ? null : (
        <>
          <textarea
            name="grade"
            placeholder="Grade:"
            value={newTick.grade || ""}
            onChange={handleChange}
            className="rounded-md border-2 outline-none focus:border-cyan-400 focus:bg-slate-50 p-2 mb-2 w-full"
          />
          <textarea
            name="description"
            placeholder="Details..."
            value={newTick.description || ""}
            onChange={handleChange}
            className="rounded-md border-2 outline-none focus:border-cyan-400 focus:bg-slate-50 p-2 mb-2 w-full"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-slate-500  text-white py-3 px-6  flex-auto rounded-full shadow-[#040c16] shadow-sm hover:scale-110 duration-500 max-w-40"
          >
            Add Climb
          </button>
        </>
      )}
    </form>
  );
}

// AddedClimbList Component
function AddedClimbList({ allTicks, handleSent }) {
  return (
    <ul className="space-y-4">
      {allTicks.map(({ title, description = "", id }) => (
        <li key={id} className="bg-white p-4 rounded shadow-md ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold ">{title}</h2>
            <button
              onClick={() => handleSent(id)}
              className="flex shadow-[#040c16] shadow-sm hover:scale-110 duration-500 text-black border-2 border-black py-3 px-4 rounded-full "
            >
              Sent it!
            </button>
          </div>
          {description.length > 0 && (
            <p className="text-gray-700 ">{description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

// SentTicksGrid Component
function SentTicksGrid({
  removedTicks,
  handleEdit,
  handleSaveEdit,
  handleCancelEdit,
  handleDelete,
}) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {removedTicks.map((tick) => (
        <div key={tick.id} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">{tick.title}</h2>
          {tick.description?.length > 0 && (
            <p className="text-gray-700">{tick.description}</p>
          )}
          <div className="flex justify-end">
            <button
              onClick={() => handleEdit(tick)}
              className="border-black border-2  text-black py-3 px-6 flex rounded-full shadow-[#040c16] shadow-sm hover:scale-110 duration-500"
            >
              Edit
            </button>
          </div>
          {tick.editing && (
            <EditTick
              tick={tick}
              handleSave={handleSaveEdit}
              handleCancel={handleCancelEdit}
              handleDelete={handleDelete}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Edit Component
const EditTick = ({ tick, handleSave, handleCancel, handleDelete }) => {
  const [title, setTitle] = useState(tick.title);
  const [description, setDescription] = useState(tick.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave({ id: tick.id, title, description });
  };

  const handleDeleteClick = () => {
    handleDelete(tick.id);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <div className="flex flex-col md:flex-row">
        <input
          name="title"
          placeholder="Edit Climb"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border-2 outline-none focus:border-cyan-400 p-2 mb-2 w-full mr-2"
        />
        <textarea
          name="description"
          placeholder="Edit Details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-md border-2 outline-none focus:border-cyan-400 p-2 mb-2 w-full"
        />
        <div className="flex justify-end w-full md:w-auto">
          <button
            type="submit"
            className="mb-2 md:ml-2 mr-2 bg-green-400 border-2 border-black text-black py-3 px-4 rounded-full shadow-[#040c16] shadow-sm hover:scale-110 duration-500"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="mb-2 md:ml-2 mr-2 bg-blue-400 text-black border-2 border-black py-3 px-4 rounded-full shadow-[#040c16] shadow-sm hover:scale-110 duration-500"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteClick}
            className="mb-2 md:ml-2 bg-red-400 text-black border-2 border-black py-3 px-4 rounded-full shadow-[#040c16] shadow-sm hover:scale-110 duration-500"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  );
};

// Main TicklistApp Component
export default function Ticklist() {
  const [newClimb, setNewClimb] = useState({});
  const [removedTicks, setRemovedTicks] = useState(
    localStorage.getItem("removedTicks")
      ? JSON.parse(localStorage.getItem("removedTicks"))
      : []
  );
  const [allTicks, setAllTicks] = useState(
    localStorage.getItem("ticks")
      ? JSON.parse(localStorage.getItem("ticks"))
      : []
  );

  const handleEdit = (tick) => {
    setRemovedTicks((prev) =>
      prev.map((prevTick) => {
        if (prevTick.id === tick.id) {
          return { ...prevTick, editing: true };
        }
        return prevTick;
      })
    );
  };

  const handleSaveEdit = (updatedTick) => {
    setRemovedTicks((prev) =>
      prev.map((tick) => {
        if (tick.id === updatedTick.id) {
          return { ...updatedTick, editing: false };
        }
        return tick;
      })
    );
  };

  const handleCancelEdit = () => {
    setRemovedTicks((prev) =>
      prev.map((tick) => {
        if (tick.editing) {
          return { ...tick, editing: false };
        }
        return tick;
      })
    );
  };

  const handleDelete = (tickIDToRemove) => {
    setRemovedTicks((prev) =>
      prev.filter((tick) => tick.id !== tickIDToRemove)
    );
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewClimb((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newClimb.title) {
      const isAuthenticated = !!localStorage.getItem("token");
      if (!isAuthenticated) {
        alert("You need to be logged in to add a climb.");
        navigate("/login");
        return;
      }
      setAllTicks((prev) => [newClimb, ...prev]);
      setNewClimb({});
    }
  };

  const handleSent = (tickIDToRemove) => {
    setAllTicks((prev) => {
      const tickToRemove = prev.find((tick) => tick.id === tickIDToRemove);
      if (tickToRemove) {
        setRemovedTicks((removed) => [tickToRemove, ...removed]);
      }
      return prev.filter((tick) => tick.id !== tickIDToRemove);
    });
  };

  // save ticks to local storage whenever allTicks changes
  useEffect(() => {
    localStorage.setItem("ticks", JSON.stringify(allTicks));
  }, [allTicks]);

  // save removed ticks to local storage whenever removedTicks changes
  useEffect(() => {
    localStorage.setItem("removedTicks", JSON.stringify(removedTicks));
  }, [removedTicks]);

  // Load ticks from local storage when component mount
  useEffect(() => {
    const storedTicks = localStorage.getItem("ticks");
    if (storedTicks) {
      setAllTicks(JSON.parse(storedTicks));
    }
    const storedRemovedTicks = localStorage.getItem("removedTicks");
    if (storedRemovedTicks) {
      setRemovedTicks(JSON.parse(storedRemovedTicks));
    }
  }, []);

  // store edited ticks from local storage when component mount
  useEffect(() => {
    const storedTicks = localStorage.getItem("ticks");
    if (storedTicks) {
      setAllTicks(JSON.parse(storedTicks));
    }
  }, [allTicks]);

  return (
    <main className="min-h-screen p-8 bg-[#0a192f] ">
      <div
        name="ticklist"
        className=" min-h-screen max-w-3xl mx-auto pt-[300px] pb-40"
      >
        <h1 className="text-4xl font-bold inline border-b-4 text-gray-300  border-pink-600 ">
          Ticklist
        </h1>
        <NewTick
          newTick={newClimb}
          handleChange={handleChange}
          handleSubmit={(event) => handleSubmit(event)}
        />
        <AddedClimbList allTicks={allTicks} handleSent={handleSent} />
        <SentTicksGrid
          removedTicks={removedTicks}
          handleEdit={handleEdit}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
          handleDelete={handleDelete}
        />
      </div>
    </main>
  );
}
