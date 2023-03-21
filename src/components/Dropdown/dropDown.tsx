import { useState, useEffect, useRef, RefObject } from "react";
import style from "./dropDown.module.css";

const DropDown: React.FC<{
  selected: string;
  setSelected: any;
  otions: string[];
  initialValue: string;
}> = ({ selected, setSelected, otions, initialValue }) => {
  const [isActve, serIsActive] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => serIsActive(false));

  return (
    <div className={style.dropdown}>
      <div
        className={style.dropdown_btn}
        onClick={(e) => serIsActive(!isActve)}
      >
        {!selected.length ? otions[0] : selected}
      </div>
      {isActve && (
        <div className={style.dropdown_content} ref={ref}>
          {otions?.map((op) => (
            <div
              className={style.dropdown_item}
              onClick={(e) => {
                setSelected(op);
                serIsActive(false);
              }}
              key={stringToHash(op)}
            >
              {op}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function stringToHash(string: string) {
  var hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash * Math.random();
}

type AnyEvent = MouseEvent | TouchEvent;

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: (event: AnyEvent) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default DropDown;
