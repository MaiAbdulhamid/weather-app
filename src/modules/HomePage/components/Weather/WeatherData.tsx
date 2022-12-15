import { Card, CardContent, CardHeader } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../../shared/context/ContextProvider";

const WeatherData = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const { data, setData } = useContext(Context) as any;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL + "/forecast";

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position: any) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${apiUrl}?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, long, data]);

  return (
    <Card>
      {data &&
        data?.list?.slice(0, 5).map((d: any, index: number) => (
          <CardContent key={`weather-${index}`}>
            <p>Temprature: {d?.main?.temp}</p>
            <p>Description: {d?.weather[0]?.description}</p>
          </CardContent>
        ))}
    </Card>
  );
};

export default WeatherData;
