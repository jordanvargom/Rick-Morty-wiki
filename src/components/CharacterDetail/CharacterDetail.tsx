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
    <div className={style.container}>
      {character ? (
        <>
          <div className={style.characterContainer}>
            <div className={style.imageContainer}>
              <img
                src={character?.image}
                alt={character.name}
                className={style.image}
              />
            </div>
            <div className={style.content}>
              <div className={style.seccion}>
                <h2>{character.name}</h2>
                <span className={style.status}>
                  <span
                    className={
                      character.status === "Alive"
                        ? style.iconAlive
                        : style.iconDeath
                    }
                  ></span>
                  {character.status} - {character.species}
                </span>
              </div>
              <div className={style.seccion}>
                <span className={style.textGray}>
                  Last known location:
                  <h4>{character.location.name}</h4>
                </span>
              </div>
              <div className={style.seccion}>
                <span className={style.textGray}>
                  First seen in:
                  <h4>{character.origin.name}</h4>
                </span>
              </div>
            </div>
          </div>
          <CharacterEpisode />
          <CharacterLocation />
        </>
      ) : null}
    </div>
  );
}

export default CharacterDetail;
