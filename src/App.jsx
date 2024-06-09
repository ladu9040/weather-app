import React from 'react'
import WeatherCard from './components/WeatherCard'
import BackgroundLayoutMode from './components/BackgroundLayoutMode'
import './App.css'

const App = () => {



  return (
    <div className='app ' >
     <div className="bglayout ">
     <BackgroundLayoutMode/>
     </div>
      
      
      <div className= 'weather-card-container '>
     
       <WeatherCard/>
     
      </div>
    </div>
  )
}

export default App
