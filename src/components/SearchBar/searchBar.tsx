import DropDown from "../Dropdown/dropDown";
import style from "./searchBar.module.css";
import { useState } from "react";
function SearchBar() {
  const [selected, setSelected] = useState<string>("");
  const [initialValue, setInitialValue] =
    useState<string>("Alphabetical Order");
  const [otions, setOtions] = useState<string[]>(["A-Z", "Z-A"]);

  return (
    <div className={style.container}>
      <div className={style.Wrapper}>
        <div>
          <div className={style.form}>
            <input
              className={style.input}
              autoComplete="false"
              placeholder="Name"
              type="text"
            />
            <span className={style.input_border}></span>
          </div>
        </div>{" "}
        <div>
          <DropDown
            otions={otions}
            selected={selected}
            setSelected={setSelected}
            initialValue={initialValue}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
