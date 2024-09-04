import { useState, useEffect } from "react";
import "./sass/style.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { IWeather, IWeatherQuery } from "./interface/weather";
import Header from "./Molecules/Header";
import Sidebar from "./Organisms/Sidebar";
import HeroSection from "./Organisms/HeroSection";
import convertTimeFormat from "./utils/formatDate";
import { fetchData, fetchSearchData } from "./utils/fetchData";

function App() {
  const [weatherData, setWeatherData] = useState<IWeather>({
    location: { name: "N/A", localtime: "0" },
    current: {
      temp_c: 0,
      temp_f: 0,
      condition: { text: "N/A", icon: "", code: 0 },
      wind_kph: 0,
      wind_mph: 0,
      humidity: 0,
      cloud: 0,
    },
  });
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState<IWeatherQuery[]>();

  const cityName = "Kathmandu";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiResponse = await fetchData(cityName);
        setWeatherData(apiResponse);
      } catch (error) {
        showToast("Failed to load weather data", "error");
      }
    };

    fetchWeatherData();
  }, [cityName]);

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
    try {
      const response = await fetchSearchData(event.target.value);
      setSearch(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      try {
        const response = await fetchData(location);
        setWeatherData(response);
        showToast("Weather Updated Successfully", "success");
      } catch (error) {
        showToast("Failed to fetch weather data. Please try again.", "error");
      }
    }
  };

  const showToast = (message: string, status: string) => {
    if (status === "success") {
      toast.success(`${message}`);
    } else if (status === "error") {
      toast.error(`${message}`);
    } else {
      toast(message);
    }
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header
        handleOnChange={handleOnChange}
        value={location}
        handleOnKeyDown={handleOnKeyDown}
        search={search}
      />

      <div className="wrapper">
        <HeroSection
          location={weatherData.location.name || "Unknown Location"}
          iconUrl={weatherData.current.condition.icon || ""}
          temp_c={weatherData.current.temp_c}
          time={convertTimeFormat(weatherData.location.localtime)}
          value={location}
        />
        <Sidebar
          condition={weatherData.current.condition.text || "No data"}
          humidity={weatherData.current.humidity}
          cloud={weatherData.current.cloud}
          winds={weatherData.current.wind_kph}
        />
      </div>
    </>
  );
}

export default App;
