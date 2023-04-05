import React, { useState } from "react";
import style from "./CharacterEpisode.module.css";
type ep = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};
const CharacterEpisode: React.FC<{ episodes: string[] }> = ({ episodes }) => {
  const [charEpisodes, setCharEpisodes] = useState<ep[]>();
  const promises = episodes.map((url) => {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  });

  !charEpisodes &&
    Promise.all(promises)
      .then((data) => setCharEpisodes(data))
      .catch((error) => console.error(error));
  console.log(charEpisodes && charEpisodes[0]);
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Episode Appearances: {charEpisodes?.length}
      </h1>

      {charEpisodes?.map((e) => (
        <div className={style.episodeContainer}>
          <h2>Episode: {e.name}</h2>
          <p>
            Season: {e.episode[1] + e.episode[2]} - Episode:{" "}
            {e.episode[4] + e.episode[5]}
          </p>
          <p>Air date: {e.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterEpisode;
