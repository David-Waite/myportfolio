import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
export default function Modal() {
  return (
    <dialog className={styles.dialogContainer} open>
      <X className={styles.closeBtn} />
    </dialog>
  );
}
