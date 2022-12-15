import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import  { Context } from "../../../../shared/context/ContextProvider";

export default function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const { data, setData } = useContext(Context) as any;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  const imgSrc = process.env.REACT_APP_ICON_URL;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position: any) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${apiUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      {data.length !== 0 ? (
        <>
          <img src={`${imgSrc}`} alt="weather" />
          <Link to="/weather">
            <p>{data.name}</p>
          </Link>
        </>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}
