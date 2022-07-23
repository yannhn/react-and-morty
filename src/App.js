import Header from "./components/header";
import Footer from "./components/footer";
import { Card } from "./components/card";

import { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url);
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      const fetchedCharacters = data.results.map((character) => {
        const newCharacter = {
          ...character,
          isBookmarked: false,
        };
        return newCharacter;
      });
      setCharacters(fetchedCharacters);
    }
  }, []);

  const newBookmarks = (id, newBookmark) => {
    const newCharacters = [...characters];
    newCharacters.map((character) => {
      if (id === character.id) {
        return (character.isBookmarked = newBookmark);
      }
      return character.isBookmarked;
    });
    setCharacters(newCharacters);
  };

  return (
    <>
      <Header></Header>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            type={character.type}
            gender={character.gender}
            isBookmarked={character.isBookmarked}
            newBookmarks={(newValue) => newBookmarks(character.id, newValue)}
          />
        );
      })}
      <toggleButton></toggleButton>
      <Footer></Footer>;
    </>
  );
}

export default App;
