import { useState, useEffect } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const [imageIndexs, setImageIndexs] = useState({
    imageOne: 0,
    imageTwo: 1,
  });

  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  function moveSlideShow() {
    const endIndexImageArray = images.length - 1;
    setImageIndexs((prev) => {
      const imageOne = prev.imageTwo;
      const imageTwo =
        endIndexImageArray === prev.imageTwo ? 0 : prev.imageTwo + 1;
      return {
        imageOne: imageOne,
        imageTwo: imageTwo,
      };
    });
  }
  function updateImageOne() {
    setImageIndexs((prev) => {
      return {
        imageOne: prev.imageTwo + 1,
        imageTwo: prev.imageTwo,
      };
    });
  }
  function updateImageTwo() {
    setImageIndexs((prev) => {
      return {
        imageOne: prev.imageOne,
        imageTwo: prev.imageTwo + 1,
      };
    });
  }
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     moveSlideShow();
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [moveSlideShow]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img
          className={`${styles.img} ${styles.imageOne}`}
          src={images[imageIndexs.imageOne]}
        />
        <img
          className={`${styles.img} ${styles.imageTwo}`}
          src={images[imageIndexs.imageTwo]}
        />
      </div>
    </div>
  );
}
