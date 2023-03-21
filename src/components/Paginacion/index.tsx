import React, { useState } from "react";
import style from "./Paginacion.module.css";
const Paginacion: React.FC<{
  pagina: number;
  setPagina: (e: number) => void;
  maximo: number;
}> = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  function siguiente() {
    setPagina(pagina + 1);
    setInput(pagina + 1);
  }
  function anterior() {
    setPagina(pagina - 1);
    setInput(pagina - 1);
  }

  function numPagina(e: any) {
    if (e.keyCode === 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setInput(1);
        setPagina(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  }

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={anterior}
        disabled={pagina === 1 || pagina < 1}
      >
        Previous
      </button>
      <p> {pagina}</p>
      <p>of {Math.ceil(maximo)}</p>
      <button
        onClick={siguiente}
        className={style.button}
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
      >
        Next
      </button>
    </div>
  );
};

export default Paginacion;
