import { useStore } from "../../store/charactersStore";
import react, { useEffect } from "react";
import Cards from "../Cards/cards";
function Character() {
  const { characters, getCharacters } = useStore();
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {characters?.map((character) => (
        <Cards char={character} />
      ))}
    </div>
  );
}

export default Character;
