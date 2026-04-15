import React from "react";
import Image from "next/image";
import styles from "./Speakers.module.css";
import speakersData from "@/data/speakers.json";

interface Speaker {
  name: string;
  designation: string;
  department?: string;
  institution: string;
  country: string;
  image?: string;
}

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  const imagePath = speaker.image
    ? `/speakers/${speaker.image}`
    : "/speakers/default.webp";

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_main}>
        <div className={styles.image_container}>
          <Image
            src={imagePath}
            alt={speaker.name}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{speaker.name}</h3>
        <p className={styles.designation}>{speaker.designation}</p>

        {speaker.department && (
          <p className={styles.department}>{speaker.department}</p>
        )}

        <p className={styles.institution}>
          {speaker.institution},{" "}
          <span className={styles.country}>{speaker.country}</span>
        </p>
      </div>
    </div>
  );
};

export default function Speakers() {
  return (
    <section className={styles.speakers}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.meta}>03/08 // ACADEMIC_ELITE</span>
          <h2 className={styles.title}>DISTINGUISHED SPEAKERS</h2>
          <div className={styles.underline}></div>
        </header>

        <div className={styles.grid}>
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}