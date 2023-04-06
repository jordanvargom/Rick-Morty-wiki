import style from "./Presentation.module.css";
import { useNavigate } from "react-router-dom";
function Presentation() {
  const navigte = useNavigate();
  return (
    <div className={style.container}>
      <img src="/Home-2.jpg" alt="Home" className={style.image} />
      <div className={style.textContainer}>
        <h1>The Rick and Morty Wiki</h1>
        <p className={style.description}>
          If you are a fan of Rick and Morty, then you are going to love this
          app. With its sleek design and user-friendly interface, you'll have
          everything you need to immerse yourself in the world of Rick and
          Morty.{" "}
        </p>
        <button
          className={style.button}
          onClick={() => {
            navigte("/character");
          }}
        >
          ARE YOU READY?
        </button>
      </div>
    </div>
  );
}

export default Presentation;
