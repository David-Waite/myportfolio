import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import SlideShow from "./SlideShow";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Modal({ modalState, item, onClick }) {
  if (item === undefined) {
    return;
  }

  console.log(item.fields);
  const madeWithElements = item.fields.madeWith.map((item) => {
    return (
      <p key={item} className={styles.madeWith}>
        {item}
      </p>
    );
  });
  return (
    <dialog className={styles.dialogContainer} open={modalState}>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={() => onClick(false)} />
      </div>

      <div className={styles.innerContainer}>
        <h2 className={styles.title}>{item.fields.title}</h2>
        <h3 className={styles.secondTitle}>{item.fields.description}</h3>
        <div className={styles.modalContainerOuter}>
          <div className={styles.modalContainerInner}>
            <SlideShow />
          </div>
        </div>
        <div className={styles.madeWithContainer}>
          <div>{madeWithElements}</div>
          <a className={styles.link} href={item.fields.websiteUrl}>
            Vist Website
          </a>
        </div>

        <p className={styles.description}>
          {documentToReactComponents(item.fields.fullDescription)}
        </p>
      </div>
    </dialog>
  );
}
