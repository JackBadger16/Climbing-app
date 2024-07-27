import React, { useState, useEffect } from 'react';

const RoutesList = () => {
  const [routes, setRoutes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
//   const [filteredRoutes, setFilteredRoutes] = useState([]);


  useEffect(() => {
    fetch('/routes.json')
      .then(response => response.json())
      .then(data => setRoutes(data));
  }, []);

  const filteredRoutes = routes.filter(route =>
    route.route_name.toLowerCase().includes(searchQuery.toLowerCase())
    || route.area.toLowerCase().includes(searchQuery.toLowerCase())
    || route.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
    <h1>Climbing Routes</h1>
    <input
      type="text"
      placeholder="Search routes..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
    <ul>
      {filteredRoutes.map((route, index) => (
        <li key={index}>
          <strong>{route.route_name}</strong> - {route.area} - {route.grade}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default RoutesList;
