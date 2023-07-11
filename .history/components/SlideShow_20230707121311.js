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
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndexs({
        imageOne: 1,
        imageTwo: 2,
      });
      console.log("This will run after 1 second!");
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img
          className={`${styles.img} ${styles.imgCenter}`}
          src={images[imageIndexs.imageOne]}
        />
        <img
          className={`${styles.img} ${styles.imgRight}`}
          src={images[imageIndexs.imageTwo]}
        />
      </div>
    </div>
  );
}