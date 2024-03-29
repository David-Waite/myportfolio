import styles from "../styles/about.module.css";
import ScrollBar from "./ScrollBar";
import SlideShow from "./SlideShow";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.hideScrollBarContainer}>
        <div className={styles.hideScrollBarParent}>
          <ScrollBar style="dark" />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutMe}>
          <h2>About me</h2>
          <p>
            I like to design and create simple clean websites that gets the user
            to where they wanna go without the clutter.
            <br />
            <br />
            I&apos;m currently studying computer science at Swinburne University
            in Melbourne, while also working on personal projects.
          </p>
        </div>

        <div className={styles.aboutFiller}></div>
        <div className={styles.aboutFiller}></div>
        <div className={styles.aboutTech}>
          <h2>
            Tech
            <br />
            <strong>I&apos;m comfortable with</strong>
          </h2>
          <div className={styles.techCon}>
            <img src="/JsIcon.png" alt="" />
            <img src="/C#Icon.png" alt="" />
            <br />
            <img src="/React-icon.png" alt="" />
            <img src="/nextJsIcon.png" alt="" />
            <br />
            <img src="/contentfulIcon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
