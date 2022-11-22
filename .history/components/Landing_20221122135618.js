import styles from "../styles/landing.module.css";

export default function Landing() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.home}>
          <div>
            <h1>
              <strong>G&apos;day,</strong>
              <br />
              I&apos;m David
            </h1>
            <h2>Frontend web developer</h2>
          </div>

          <img src="/DavidWaitePP.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
