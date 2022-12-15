import HomePage from "./modules/HomePage/components";
import { Route, Routes } from "react-router";
import BaseLayout from "./design/layout/BaseLayout";
import "./App.css";
import WeatherData from "./modules/HomePage/components/Weather/WeatherData";

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        }
      />
      <Route
        path="weather"
        element={
          <BaseLayout>
            <WeatherData />
          </BaseLayout>
        }
      />
    </Routes>
  );
}

export default App;
