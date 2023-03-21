import DropDown from "../Dropdown/dropDown";
import style from "./searchBar.module.css";
import { useState, useEffect } from "react";
import { useStore } from "../../store/charactersStore";

const SearchBar: React.FC<{
  buscador: string;
  setBuscador: (value: string) => void;
}> = ({ buscador, setBuscador }) => {
  const { alphabeticalOrder, getLocation, locations, filterLocation } =
    useStore();
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

  const [locationSelected, setLocationSelected] = useState<string>("");
  const [locationInitialValue, setLocationInitialValue] =
    useState<string>("All Location");
  const filterLocationSelected = (order: string) => {
    setLocationSelected(order);
    filterLocation(order);
  };
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
              onChange={(e) => setBuscador(e.target.value)}
            />
            <span className={style.input_border}></span>
          </div>
        </div>{" "}
        <div className={style.filtros}>
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
