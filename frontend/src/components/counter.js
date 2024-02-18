import React from "react";
import Navbar from "./Navbar/navbar";
import styles from "./couner.module.css";
import { useState, useEffect } from "react";

const Counter = () => {
  const [firstItemCounter, setFirstItemCounter] = useState(0);
  const [secondItemCounter, setSecondItemCounter] = useState(0);
  const [thirdItemCounter, setThirdItemCounter] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    const totalCount =
      (firstItemCounter > 0 ? 1 : 0) +
      (secondItemCounter > 0 ? 1 : 0) +
      (thirdItemCounter > 0 ? 1 : 0);
    setTotalItems(totalCount);
  }, [firstItemCounter, secondItemCounter, thirdItemCounter]);

  return (
    <div>
      <div>
        <Navbar counter={totalItems} />
      </div>
      <div className={styles.cart}>
        <div className={styles.first_item}>
          <h3>{firstItemCounter}</h3>
          <button
            className={styles.plus}
            onClick={() => setFirstItemCounter((counter) => counter + 1)}
          >
            +
          </button>
          <button
            className={styles.minus}
            onClick={() =>
              setFirstItemCounter((counter) =>
                counter === 0 ? 0 : counter - 1
              )
            }
          >
            -
          </button>
          <button
            className={styles.delete}
            onClick={() => setFirstItemCounter(0)}
          >
            Delete
          </button>
        </div>
        <div className={styles.second_item}>
          <h3>{secondItemCounter}</h3>
          <button
            className={styles.plus}
            onClick={() => setSecondItemCounter((counter) => counter + 1)}
          >
            +
          </button>
          <button
            className={styles.minus}
            onClick={() =>
              setSecondItemCounter((counter) =>
                counter === 0 ? 0 : counter - 1
              )
            }
          >
            -
          </button>
          <button
            className={styles.delete}
            onClick={() => setSecondItemCounter(0)}
          >
            Delete
          </button>
        </div>
        <div className={styles.third_item}>
          <h3>{thirdItemCounter}</h3>
          <button
            className={styles.plus}
            onClick={() => setThirdItemCounter((counter) => counter + 1)}
          >
            +
          </button>
          <button
            className={styles.minus}
            onClick={() =>
              setThirdItemCounter((counter) =>
                counter === 0 ? 0 : counter - 1
              )
            }
          >
            -
          </button>
          <button
            className={styles.delete}
            onClick={() => setThirdItemCounter(0)}
          >
            Delete
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setFirstItemCounter(0);
          setSecondItemCounter(0);
          setThirdItemCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
