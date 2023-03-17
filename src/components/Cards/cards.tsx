import style from "./cards.module.css";
interface character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: [string];
  url: string;
  created: string;
}

const Cards: React.FC<{ char: character }> = ({ char }) => {
  const { name, image } = char;
  return (
    <div className={style.card}>
      <b></b>
      <img src={image} alt={name} className={style.image} />

      <div className={style.content}>
        <p className={style.title}>{name}</p>
      </div>
    </div>
  );
};

export default Cards;
