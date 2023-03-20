import { useStore } from "../../store/charactersStore";
import { useEffect } from "react";
import Cards from "../Cards/cards";
import style from "./character.module.css";
import SearchBar from "../SearchBar/searchBar";

function Character() {
  const { characters, getCharacters } = useStore();
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className={style.Container}>
      <SearchBar />
      <div className={style.cards_Container}>
        {characters?.map((character) => (
          <Cards char={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}

export default Character;
