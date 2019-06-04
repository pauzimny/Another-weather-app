import React, { useState, useEffect } from "react";
import Result from "../components/Result.js";
import Form from "../components/Form.js";
import NotFound from "../components/NotFound";
import IsAlready from "../components/IsAlready";

const HomePage = props => {
  const APIKEY = "1ea9d8ecd83d43c9a0801ba96a6b4ae1";
  let tempArray = [];
  let initialResults = JSON.parse(localStorage.getItem("cities")) || [];

  const [error, setError] = useState(false);
  const [isAlready, setIsAlready] = useState(false);
  const [units, setUnits] = useState("metric");
  const [input, setInput] = useState("");
  const [results, setResults] = useState([...initialResults]);
  const [getData, setGetData] = useState(false);
  console.log(error);

  console.log(props);
  console.log(getData);
  console.log(units);

  useEffect(() => {
    console.log(units);
    if (props.location.state !== undefined) {
      setUnits(props.location.state.units);
    }
    if (getData) {
      const index = results.findIndex(
        city => city.name.toLowerCase() === input.toLowerCase()
      );
      if (index === -1) {
        const API = `http://api.openweathermap.org/data/2.5/forecast?q=${input}&lang=pl&units=${units}&appid=${APIKEY}`;

        console.log(input);
        fetch(API)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            setError(true);
            throw Error(`Nie mozna pobrać danych dla miasta ${input}`);
          })
          .then(data => {
            data.list.forEach(measure => {
              tempArray.push(measure.main.temp);
            });
            const sumTemp = tempArray.reduce((a, b) => a + b, 0);
            const averageTemp = sumTemp / tempArray.length;
            const city = {
              name: input.toLocaleLowerCase(),
              id: input,
              temp: Math.round(averageTemp),
              units,
              lon: data.city.coord.lon,
              lat: data.city.coord.lat
            };
            console.log(city);
            setResults([...results, city]);
            console.log(results);
            setInput("");
            setGetData(false);
            console.log(results);
            console.log("sent");
          })

          .catch(() => {
            setInput("");
          });
      } else {
        setIsAlready(true);
        setInput("");
        setError(false);
        setGetData(false);
      }
    }
    localStorage.setItem("cities", JSON.stringify(results));
  }, [getData]);

  const handleChange = e => {
    setInput(e.target.value);
    setIsAlready(false);
    setError(false);
    setGetData(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setGetData(true);
  };

  const handleDelete = id => {
    localStorage.clear();
    const cities = [...results];
    const index = cities.findIndex(city => city.id === id);
    cities.splice(index, 1);
    setResults([...cities]);
    window.localStorage.setItem("cities", JSON.stringify(cities));
  };

  console.log(results);
  console.log(initialResults);

  const citiesResults = results.map(result => (
    <Result
      id={result.id}
      key={result.name}
      number={result.id}
      city={result.name}
      temp={result.temp}
      delete={handleDelete}
      lat={result.lat}
      lon={result.lon}
      units={result.units}
      err={result.err}
    />
  ));
  return (
    <div>
      <Form submit={handleSubmit} change={handleChange} value={input} />
      {error && <NotFound />}
      {isAlready && <IsAlready />}
      <ol className="resultList">{citiesResults}</ol>
    </div>
  );
};

export default HomePage;