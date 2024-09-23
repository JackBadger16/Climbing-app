import React from 'react'

const WeatherCard = ({location, temperature, description, icon}) => {
  return (
    <div className="p-4 max-w-xs rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{location}</h2>
      <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={description} className="mx-auto mb-2" />
      <div className="flex items-center">
        <span className="text-3xl font-bold">{temperature}</span>
        <span className="text-gray-500 ml-2">°C</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default WeatherCard