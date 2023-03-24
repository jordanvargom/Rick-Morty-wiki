import style from "./Presentation.module.css";
import TypeWriterEffect from "react-typewriter-effect";

function Presentation() {
  return (
    <div className={style.container}>
      <img src="/Home-2.jpg" alt="Home" className={style.image} />
      <div className={style.textContainer}>
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#e1e1e1",
            fontWeight: 1000,
            fontSize: "3em",
          }}
          startDelay={2000}
          cursorColor="#3F3D56"
          multiText={["The Rick and Morty Wiki"]}
          multiTextLoop={true}
          multiTextDelay={1000}
          typeSpeed={200}
        />
        <p className={style.description}>
          If you are a fan of Rick and Morty, then you are going to love this
          app. With its sleek design and user-friendly interface, you'll have
          everything you need to immerse yourself in the world of Rick and
          Morty.{" "}
        </p>
        <button className={style.button}>ARE YOU READY?</button>
      </div>
    </div>
  );
}

export default Presentation;
