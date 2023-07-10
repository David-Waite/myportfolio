import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import SlideShow from "./SlideShow";

export default function Modal({ modalState, onClick }) {
  return (
    <dialog className={styles.dialogContainer} open={modalState}>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={() => onClick(false)} />
      </div>
      <h2 className={styles.title}>CassieFleming.com</h2>
      <h3 className={styles.secondTitle}>An amination Portfolio</h3>
      <SlideShow />
    </dialog>
  );
}
