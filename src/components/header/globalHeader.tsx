"use client";

import React from "react";
import styles from "./globalHeader.module.css";

export default function GlobalHeader() {
  return (
    <div className={styles.globalHeader}>
      <nav className={styles.globalnav}>
        <div className={styles.globalnavContent}>
          <ul className={styles.globalnavList}>
            <li className={styles.globalnavItem}>
              <a href="#">Mac</a>
            </li>
            <li className={styles.globalnavItem}>
              <a href="#">iphone</a>
            </li>
            <li className={styles.globalnavItem}>
              <a href="#">tv</a>
            </li>
            <li className={styles.globalnavItem}>
              <a href="#">iPad</a>
            </li>
            <li className={styles.globalnavItem}>
              <a href="#">iPhone</a>
            </li>
            <li className={styles.globalnavItem}>
              <a href="#">Watch</a>
            </li>
            <div className={styles.globalnavItem}>
              <span>🔍</span>
              <span>🛒</span>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
