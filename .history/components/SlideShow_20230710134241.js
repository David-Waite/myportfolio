import { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const slideContainerRef = useRef(null);
  const [hideLeft, setHideLeft] = useState("none");
  const [hideRight, setHideRight] = useState("");
  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  function handleBackArrow() {
    const totalLength = slideContainerRef.current.children[0].clientWidth * 4;
    if (slideContainerRef.current.scrollLeft === 0) {
      setHideLeft("none");
    }

    if (
      slideContainerRef.current.scrollLeft ===
      slideContainerRef.current.children[0].clientWidth
    ) {
      setHideLeft("none");
    }

    setHideRight("");

    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft -
      slideContainerRef.current.children[0].clientWidth;
  }

  function handleFowardArrow() {
    const totalLengthMinusOne =
      slideContainerRef.current.children[2].clientWidth * 3;

    if (slideContainerRef.current.scrollLeft === 0) {
      setHideLeft("");
    }

    if (slideContainerRef.current.scrollLeft === totalLengthMinusOne) {
      setHideRight("none");
    }
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft +
      slideContainerRef.current.children[0].clientWidth;
  }
  const slideElements = images.map((image) => {
    return (
      <div key={image} className={styles.slide}>
        <img src={image} />
      </div>
    );
  });

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer} ref={slideContainerRef}>
        {slideElements}
      </div>

      <div
        style={{ display: hideLeft }}
        className={`${styles.arrow} ${styles.arrowBack}`}
        onClick={handleBackArrow}
      >
        <p>❮</p>
      </div>

      <div
        style={{ display: hideRight }}
        className={`${styles.arrow} ${styles.arrowForward}`}
        onClick={handleFowardArrow}
      >
        <p>❯</p>
      </div>
    </div>
  );
}