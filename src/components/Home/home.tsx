import ImageContainer from "../imageContainer/ImageContainer";
import Presentation from "../Presentation/Presentation";
import style from "./home.module.css";
function Home() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Presentation />
        <ImageContainer />
      </div>
    </div>
  );
}

export default Home;
