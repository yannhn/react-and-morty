import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import { useState, useEffect } from "react";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url);
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setPersons(data.results);
    }
  }, []);

  return (
    <>
      <Header></Header>;
      {persons.map(({ id, image, name, status, species, type, gender }) => {
        return (
          <Card
            key={id}
            image={image}
            name={name}
            status={status}
            species={species}
            type={type}
            gender={gender}
          />
        );
      })}
      <Footer></Footer>;
    </>
  );
}

export default App;

/*

  return (
    <div className="App">
      <Header></Header>

<Footer></Footer>
    </div>
  );

*/
