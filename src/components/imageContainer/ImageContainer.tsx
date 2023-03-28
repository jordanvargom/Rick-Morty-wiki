import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ImageContainer.module.css";
const ImageContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.comtainer}>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
        onClick={() => navigate("/character/1")}
      />
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Morty Smith"
        onClick={() => navigate("/character/2")}
      />
      <img
        src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        alt="Summer Smith"
        onClick={() => navigate("/character/3")}
      />
      <img
        src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        alt="Beth Smith"
        onClick={() => navigate("/character/4")}
      />
      <img
        src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        alt="Jerry Smith"
        onClick={() => navigate("/character/5")}
      />
    </div>
  );
};

export default ImageContainer;
