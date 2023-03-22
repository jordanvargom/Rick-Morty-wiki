import ImageContainer from "../imageContainer/ImageContainer";
import style from "./home.module.css";
function Home() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <ImageContainer />
      </div>
    </div>
  );
}

export default Home;
