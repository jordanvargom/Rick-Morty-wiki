import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/charactersStore";
import CharacterEpisode from "../CharacterEpisode/CharacterEpisode";
import CharacterLocation from "../CharacterLocation/CharacterLocation";
import style from "./CharacterDetail.module.css";
function CharacterDetail() {
  const { id } = useParams();
  const { character, getCharacter } = useStore();

  useEffect(() => {
    getCharacter(id);
  }, []);
  return (
    <div>
      {character ? (
        <>
          <div className={style.characterContainer}>
            <img src={character?.image} alt="" />
          </div>
          <CharacterEpisode />
          <CharacterLocation />
        </>
      ) : null}
    </div>
  );
}

export default CharacterDetail;
