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
        placeholder="New Tick"
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
            className="bg-blue-500 text-white py-2 mb-2 w-full rounded "
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
              className="bg-red-500 flex  text-white py-3 px-6 round hover:bg-red-600 rounded-md"
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
 function DeletedTicksGrid({ removedTicks }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {removedTicks.map((tick) => (
        <div key={tick.id} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold">{tick.title}</h2>
          {tick.description.length > 0 && (
            <p className="text-gray-700">{tick.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}


// Main TicklistApp Component
export default function Ticklist() {
  const [newClimb, setNewClimb] = useState({});
  const [removedTicks, setRemovedTicks] = useState([]);
  const [allTicks, setAllTicks] = useState(localStorage.getItem('ticks') ? JSON.parse(localStorage.getItem('ticks')) : []);

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
        <DeletedTicksGrid removedTicks={removedTicks}/>
      </div>
    </main>
  );
}
