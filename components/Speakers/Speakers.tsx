import React from "react";
import styles from "./Speakers.module.css";
import speakersData from "@/data/speakers.json";

interface Speaker {
  name: string;
  designation: string;
  department?: string;
  institution: string;
  country: string;
}

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
  // Rotate through the 3 available dummy images
  const imageId = (index % 3) + 1;
  const imagePath = `/speakers/s${imageId}.png`;

  return (
    <div className={styles.card_wrapper}>
      {/* Main Card with specific clipping/radius */}
      <div className={styles.card_main}>
        <div className={styles.image_container}>
          <img src={imagePath} alt={speaker.name} />
        </div>
      </div>

      {/* Text Info */}
      <div className={styles.info}>
        <h3 className={styles.name}>{speaker.name}</h3>
        <p className={styles.designation}>{speaker.designation}</p>
        <p className={styles.institution}>
          {speaker.institution}, <span className={styles.country}>{speaker.country}</span>
        </p>
      </div>
    </div>
  );
};

export default function Speakers() {
  return (
    <section className={styles.speakers} aria-label="MATCON 2026 Speakers">
      <div className={styles.container}>
        
        <header className={styles.header}>
          <span className={styles.meta}>03/08 // ACADEMIC_ELITE</span>
          <h2 className={styles.title}>DISTINGUISHED SPEAKERS</h2>
          <div className="w-16 h-1 bg-accent rounded-full opacity-50"></div>
        </header>

        <div className={styles.grid}>
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

