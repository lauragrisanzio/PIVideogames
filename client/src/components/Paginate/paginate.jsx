import { useState } from "react";
import styles from "./paginate.module.css"

const Paginate = ({ currentPage, setCurrentPage, totalPages }) => {

  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setCurrentPage(currentPage + 1);
    
  };

  const previousPage = () => {
    setInput(input - 1);
    setCurrentPage(currentPage - 1);
  };

    return (
      <div className={styles.container}>
        <div>paginate</div>
        <button
          disabled={input === 1}
          className={styles.previousPag}
          onClick={previousPage}
        >
          👈{" "}
        </button>
        <input
          name="page"
          autoComplete="off"
          value={input}
          className={styles.input}
        />
        <span className={styles.pagActual}> ... {totalPages}</span>
        {/* //SPAN: Para que el usuario sepa en
        que página se encuentra, y cuantas páginas hay disponibles */}
        <button
          disabled={input === totalPages}
          className={styles.nextPag}
          onClick={nextPage}
        >
          👉
        </button>
      </div>
    );
}

export default Paginate;

//SPAN: Para que el usuario sepa en que página se encuentra, y cuantas páginas hay disponibles