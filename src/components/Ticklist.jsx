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
              className="bg-red-500 text-white py-1 px-3 round hover:bg-red-600 rounded-md"
            >
              X
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
  const [allTicks, setAllTicks] = useState([]);

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

 

  // DeletedTicksGrid Component style with tailwind
  // const deletedTicksGridStyle = {
  //   gridTemplateColumns: "repeat(2, 1fr)",
  //   gap: "1rem",
  //   };
  //   return (
  //     <div className="container mx-auto p-4 pt-6 md:p-6 lg:p
  //     -12">
  //       <h1 className="text-3xl font-bold mb-4">Climbing Log
  //       </h1>
  //       <form onSubmit={handleCreateTick}>
  //         <input
  //         type="text"
  //         value={newClimb.title}
  //         onChange={(e) =>
  //           setNewClimb((prev) => ({ ...prev, title: e.target.value }
  //             )}
  //             placeholder="Enter climb title"
  //             className="w-full p-2 pl-10 text-sm text-gray-700"
  //             />
  //             <button
  //             type="submit"
  //             className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px
  //             -4 rounded"
  //             >
  //               Add Climb
  //               </button>
  //               </form>
  //               <div className="flex justify-between mb-4">
  //                 <h2 className="text-2xl font-bold">All Climbs
  //                 </h2>
  //                 <button
  //                 onClick={handleToggleRemovedTicks}
  //                 className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px
  //                 -4 rounded"
  //                 >
  //                   {showRemovedTicks ? "Hide Removed" : "Show Removed"}  Climbs
  //                   </button>
  //                   </div>
  //                   <div className="grid grid-cols-1 gap-4 mb-4">
  //                     {allTicks.map((tick) => (
  //                       <TickCard
  //                       key={tick.id}
  //                       tick={tick}
  //                       onDelete={handleDeleteTick}
  //                       onEdit={handleEditTick}
  //                       />
  //                       ))}
  //                       </div>
  //                       {showRemovedTicks && (
  //                         <div style={deletedTicksGridStyle}>
  //                         <h2 className="text-2xl font-bold">Removed Climbs
  //                         </h2>
  //                         <div className="grid grid-cols-1 gap-4 mb-4">
  //                         </div>
  //                   </div>
  //                 </button>
  //               </div>
  //             </button>
  //       </form>
  //     </div>
  // const DeletedTicksGrid = () => {
  //   return (
  //     <div>
  //       <h2>Deleted Ticks</h2>
  //       <ul>
  //         {removedTicks.map((tick) => (
  //           <li key={tick.id}>
  //             {tick.title} - {tick.grade}
  //             </li>
  //             ))}
  //             </ul>
  //             </div>
  //             );
  //             };

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
