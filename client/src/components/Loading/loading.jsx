import styles from "./loading.module.css";

function Loading() {
  return (
    <div>
      <div className={styles.loading}>
        {/* <h1>LOADING</h1> */}
      <img src="https://i.gifer.com/3yDz.gif" alt="" />
      </div>
    </div>
  );
}
export default Loading;
