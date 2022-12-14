import styles from "../../styles/contact.module.css";
import React from "react";

export default function About() {
  return (
    <div>
      <div className={styles.contact}>
        <h2>Shoot me a message</h2>
        <div>
          <form className={styles.form}>
            <div className={styles.formTop}>
              <div className={styles.name}>
                <label htmlFor="Name"> Name</label>
                <input type="text" name="Name" />
              </div>
              <div className={styles.email}>
                <label htmlFor="Email"> Email</label>
                <input type="Email" name="Email" />
              </div>
            </div>

            <div className={styles.message}>
              <label htmlFor="Message"> Message</label>
              <textarea name="Message" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
