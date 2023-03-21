import { useStore } from "../../store/charactersStore";
import { useEffect, useState } from "react";
import { character } from "../../store/types";
import Cards from "../Cards/cards";
import style from "./character.module.css";
import SearchBar from "../SearchBar/searchBar";
import Paginacion from "../Paginacion/index";
function Character() {
  const [buscador, setBuscador] = useState<string>("");
  const [pagina, setPagina] = useState<number>(1);
  const [cantidad, setCantidad] = useState<number>(12);
  const { characters, getCharacters, getLocation, locations } = useStore();
  console.log(characters);
  const render = search(buscador, characters);
  const maximo = render.length / cantidad;
  useEffect(() => {
    getCharacters();
    getLocation();
  }, []);
  return (
    <div className={style.Container}>
      <SearchBar buscador={buscador} setBuscador={setBuscador} />
      <div className={style.cards_Container}>
        {characters &&
          render
            .slice((pagina - 1) * cantidad, (pagina - 1) * cantidad + cantidad)
            .map((character) => <Cards char={character} key={character.id} />)}
      </div>
      {render.length && (
        <Paginacion maximo={maximo} pagina={pagina} setPagina={setPagina} />
      )}
    </div>
  );
}
function search(buscador: string, characters: character[]) {
  const filtered = characters.filter((car) =>
    car.name.toLowerCase().includes(buscador.toLowerCase())
  );
  return filtered;
}

export default Character;
