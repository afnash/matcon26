"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const TARGET = new Date("2026-12-15T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.countdown} aria-label="Conference Countdown">
      <div className={styles.inner}>
        {/* Label */}
        <span className={styles.label}>// T_MINUS &mdash; CONFERENCE OPENS</span>

        {/* Tagline */}
        <div className={styles.tagline}>
          <h2>
            BE PART OF THE <span>FUTURE</span>
          </h2>
          <p>
            Join world-leading researchers, scientists, and industrialists at
            MATCON&nbsp;2026 — an international forum shaping the next chapter
            of materials science.
          </p>
        </div>

        {/* Live countdown */}
        <div className={styles.timer} aria-live="polite" aria-label="Countdown timer">
          <div className={styles.unit}>
            <span className={styles.value}>{pad(time.days)}</span>
            <span className={styles.unitLabel}>Days</span>
          </div>

          <span className={styles.sep} aria-hidden="true">:</span>

          <div className={styles.unit}>
            <span className={styles.value}>{pad(time.hours)}</span>
            <span className={styles.unitLabel}>Hours</span>
          </div>

          <span className={styles.sep} aria-hidden="true">:</span>

          <div className={styles.unit}>
            <span className={styles.value}>{pad(time.minutes)}</span>
            <span className={styles.unitLabel}>Minutes</span>
          </div>

          <span className={styles.sep} aria-hidden="true">:</span>

          <div className={styles.unit}>
            <span className={styles.value}>{pad(time.seconds)}</span>
            <span className={styles.unitLabel}>Seconds</span>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="#" className={styles.applyBtn} id="apply-now-btn">
            Apply Now
          </a>
          <span className={styles.deadline}>
            15 &bull; 16 &bull; 17 &nbsp;December&nbsp;2026 &mdash; CUSAT, Kochi
          </span>
        </div>
      </div>
    </section>
  );
}
