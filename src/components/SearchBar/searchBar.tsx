import DropDown from "../Dropdown/dropDown";
import style from "./searchBar.module.css";
import { useState, useEffect } from "react";
import { useStore } from "../../store/charactersStore";

const SearchBar: React.FC<{
  buscador: string;
  setBuscador: (value: string) => void;
  setPagina: (value: number) => void;
}> = ({ buscador, setBuscador, setPagina }) => {
  const {
    alphabeticalOrder,
    getLocation,
    locations,
    filterLocation,
    filterOrigin,
  } = useStore();
  const [alphabeticalOrderSelected, setAlphabeticalOrderSelected] =
    useState<string>("");
  const [alphabeticalOrderInitialValue, setAlphabeticalOrderInitialValue] =
    useState<string>("Alphabetical Order");
  const [alphabeticalOrderOptions, setAlphabeticalOrderOptions] = useState<
    string[]
  >(["A-Z", "Z-A"]);
  const alphabeticalOrderSelect = (order: string) => {
    setAlphabeticalOrderSelected(order);
    alphabeticalOrder && alphabeticalOrder(order);
  };

  const [originSelected, setOriginSelected] = useState<string>("");
  const [originInitialValue, setOriginInitialValue] =
    useState<string>("All Origins");
  const filterOriginSelected = (origin: string) => {
    setOriginSelected(origin);
    filterOrigin(origin);
    setPagina(1);
  };

  const [locationSelected, setLocationSelected] = useState<string>("");
  const [locationInitialValue, setLocationInitialValue] =
    useState<string>("All Location");
  const filterLocationSelected = (location: string) => {
    setLocationSelected(location);
    filterLocation(location);
    setPagina(1);
  };
  function handleChange(e: any) {
    setBuscador(e.target.value);
    setPagina(1);
  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.Wrapper}>
        <div>
          <div className={style.form}>
            <input
              value={buscador}
              className={style.input}
              autoComplete="false"
              placeholder="Name"
              type="text"
              onChange={handleChange}
            />
            <span className={style.input_border}></span>
          </div>
        </div>{" "}
        <div className={style.filtros}>
          <DropDown
            initialValue={originInitialValue}
            otions={[originInitialValue, ...locations]}
            selected={originSelected}
            setSelected={filterOriginSelected}
          />
          <DropDown
            initialValue={locationInitialValue}
            otions={[locationInitialValue, ...locations]}
            selected={locationSelected}
            setSelected={filterLocationSelected}
          />
          <DropDown
            otions={alphabeticalOrderOptions}
            selected={alphabeticalOrderSelected}
            setSelected={alphabeticalOrderSelect}
            initialValue={alphabeticalOrderInitialValue}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
