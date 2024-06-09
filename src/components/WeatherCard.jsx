import React, { useEffect, useRef, useState } from 'react'
import search1 from '../assets/icons/search.svg'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import sun from '../assets/icons/sun.png'
import windy from '../assets/icons/windy.png'
import cloud from '../assets/icons/cloud.png'
import humidity from '../assets/icons/humidity.png'
import wind from '../assets/icons/wind.png'



const WeatherCard = () => {


  const inputRef = useRef()

  const [weatherData, setWeatherData] = useState(false);
  const allIcons = {
    "01d": sun,
    "01n": sun,
    "02d": cloud,
    "02n": cloud,
    "03d": storm,
    "03n": storm,
    "04d": rain,
    "04n": rain,
    "09d": fog,
    "09n": fog,
    "10d": windy,
    "10n": windy,
    "13d": snow,
    "13n": snow,
  };

  


  const search = async(city)=>{

    if (city === "") {
      alert("Enter a city name")
      return;
    }


    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
        
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] 
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed : data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })

    } catch (error) {
      setWeatherData(false);
      console.error("error in fetching weather data");
    }
  }

 

useEffect(()=>{
  search("New york");
},[])

const currentDate = new Date();
const formattedDate = `${currentDate.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).replace(/\//g, '/')} ${currentDate.toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12:true,
})}`;



  return (
    <div className="container h-[100vh] w-[100vw] flex items-center  justify-center sm:overflow-hidden ">
 <div
        className="card w-full sm:rounded-md sm:w-[496px] md:w-[400px] lg:w-[600px] h-[700px] lg:h-[700px] md:h-[700px] md:w-[600px] 
        sm:mt-[0px] place-self-center p-[40px] rounded-[10px] bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center flex-col md:h-screen md:w-screen ">  
            <div className="searchBar flex items-center justify-center gap-[12px] w-full sm:w-[250px] md:w-[300px] lg:w-[400px]">
        <input
          className="h-[50px] w-full sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-[40px] outline-none pl-[25px] border-none text-[#626262] bg-[#ebfffc]"
          type="text"
          placeholder="Search Here..."
          ref={inputRef}
        />
        <div className="searchbtn w-[50px] h-[50px] flex items-center justify-center bg-[#ebfffc] cursor-pointer rounded-[50%]">
          <img className="w-[30px] h-[30px]" src={search1} alt="search-icon" onClick={() => search(inputRef.current.value)} />
        </div>
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="" className="mt-10 h-[200px] sm:h-[150px] md:h-[180px] lg:h-[200px]" />
          <div className="text-[#fff] text-5xl line-clamp-1 relative top-7">{weatherData.temperature}°C</div>
          <p className="text-[#fff] text-2xl relative top-[54px]">{weatherData.location}</p>
          <p className="text-[#fff] text-sm relative top-[60px]">{formattedDate}</p>

          <div className="weather-data w-full sm:w-[250px] md:w-[300px] lg:w-[400px] mt-[180px] text-[#fff] flex justify-between gap-[60px]">
            <div className="col flex gap-3 text-xl items-center">
              <img src={humidity} alt="" />
              <div className="">
                <p>{weatherData.humidity}%</p>
                <span className="block text-xl">Humidity</span>
              </div>
            </div>
            <div className="col flex gap-3 text-xl items-center">
              <img src={wind} alt="" />
              <div className="">
                <p>{weatherData.windSpeed} km/h</p>
                <span className="block text-xl">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  </div>
   
  )
}

export default WeatherCard

