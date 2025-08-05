import { useState } from "react";
import styles from "./Counter.module.css";

function Counter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);
  return (
    <button className={styles.counter} onClick={() => setCount(count + 1)}>
      host-next {count}
    </button>
  );
}

export default Counter;
