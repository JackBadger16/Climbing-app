import React, { useState, useEffect } from "react";

// NewTick Component
function NewTick({ newTick, handleChange, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0a192f] p-4 rounded shadow-md"
    >
      <input
        name="title"
        placeholder="New Climb"
        value={newTick.title || ""}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-2 w-full rounded"
      />
      {!newTick.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newTick.description || ""}
            onChange={handleChange}
            className="border border-gray-300 p-2 mb-2 w-full rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 flex rounded-full hadow-[#040c16] shadow-sm hover:scale-110 duration-500"
          >
            Add Climb
          </button>
        </>
      )}
    </form>
  );
}

// AddedClimbList Component
function AddedClimbList({ allTicks, handleDelete }) {
  return (
    <ul className="space-y-4">
      {allTicks.map(({ title, description = "", id }) => (
        <li key={id} className="bg-white p-4 rounded shadow-md ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold ">{title}</h2>
            <button
              onClick={() => handleDelete(id)}
              className="bg-red-500 flex shadow-[#040c16] shadow-sm hover:scale-110 duration-500 text-white py-3 px-6 rounded-full "
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

// DeletedTicksGrid Component
function DeletedTicksGrid({ removedTicks, handleEdit }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {removedTicks.map((tick) => (
        <div key={tick.id} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">{tick.title}</h2>
          {tick.description?.length > 0 && (
            <p className="text-gray-700">{tick.description}</p>
          )}
          <button
            onClick={() => handleEdit(tick)}
            className="bg-blue-500 text-white py-3 px-6 flex rounded-full hadow-[#040c16] shadow-sm hover:scale-110 duration-500"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

// Edit Component
const EditTick = ({ tick, handleSave, handleCancel }) => {
  const [title, setTitle] = useState(tick.title);
  const [description, setDescription] = useState(tick.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave({ id: tick.id, title, description });
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <input
        name="title"
        placeholder="Edit Climb"
        value={title}
        onChange={(e) => setTitle(e.target)}
        className="border border-gray-300 p-2 mb-2 w-full rounded"
      />
      <textarea
        name="description"
        placeholder="Edit Details..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 p-2 mb-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-red-500 text-white py-3 px-6 flex rounded-full hadow-[#040c16] shadow-sm hover:scale-110 duration-500"
      >
        Save
      </button>
      <div className="py-3"></div>
      <button
        onClick={handleCancel}
        className="bg-blue-500 text-white py-3 px-6 flex rounded-full hadow-[#040c16] shadow-sm hover:scale-110 duration-500"
      >
        Cancel
      </button>
    </form>
  );
};

// Main TicklistApp Component
export default function Ticklist() {
  const [newClimb, setNewClimb] = useState({});
  const [removedTicks, setRemovedTicks] = useState([]);
  const [allTicks, setAllTicks] = useState(
    localStorage.getItem("ticks")
      ? JSON.parse(localStorage.getItem("ticks"))
      : []
  );
  const [editingTick, setEditingTick] = useState(null);

  const handleEdit = (tick) => {
    setEditingTick(tick);
  };
  const handleSaveEdit = (updatedTick) => {
    setRemovedTicks((prev) =>
      prev.map((tick) => (tick.id === updatedTick.id ? updatedTick : tick))
    );
    setEditingTick(null);
  };

  const handleCancelEdit = () => {
    setEditingTick(null);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewClimb((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newClimb.title) return;
    setAllTicks((prev) => [newClimb, ...prev]);
    setNewClimb({});
  };

  const handleDelete = (tickIDToRemove) => {
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
    <main className="min-h-screen p-8 bg-[#0a192f]">
      <div name="ticklist" className="max-w-3xl mx-auto ">
        <h1 className="text-2xl font-bold mb-6">Ticklist</h1>
        <NewTick
          newTick={newClimb}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <AddedClimbList allTicks={allTicks} handleDelete={handleDelete} />
        <DeletedTicksGrid removedTicks={removedTicks} handleEdit={handleEdit} />
        {editingTick && (
          <EditTick
            tick={editingTick}
            handleSave={handleSaveEdit}
            handleCancel={handleCancelEdit}
          />
        )}
      </div>
    </main>
  );
}
