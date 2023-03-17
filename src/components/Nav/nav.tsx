import { useNavigate } from "react-router-dom";
import style from "./nav.module.css";
function Nav() {
  const nav = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.Wrapper}>
        <div className={style.navigate}>
          <p onClick={() => nav("/character")} className={style.button}>
            Characters
          </p>
          <p onClick={() => nav("/")} className={style.button}>
            Home
          </p>
        </div>
        <div className={style.about}>
          <p className={style.button}>about</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
