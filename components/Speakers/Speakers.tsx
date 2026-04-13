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

        {/* DETAILS SECTION */}
        <div className={styles.details}>
          <div className={styles.details_grid}>
            
            {/* Get in Touch */}
            <div className={styles.details_block}>
              <h4 className={styles.details_title}>Get in Touch</h4>
              <div className={styles.address}>
                <p>Department of Applied Chemistry</p>
                <p>Cochin University of Science and Technology</p>
                <p>Kochi, Kerala, India - 682 022</p>
              </div>
              <div className={styles.contact_info}>
                <a href="mailto:matcon2026@cusat.ac.in" className={styles.contact_link}>
                  <EmailIcon /> matcon2026@cusat.ac.in
                </a>
                <a href="tel:+914842575804" className={styles.contact_link}>
                  <PhoneIcon /> +91 484 257 5804
                </a>
              </div>
            </div>

            {/* University Branding */}
            <div className={styles.details_block}>
              <div className={styles.uni_branding}>
                <div className={styles.logo_placeholder}>
                  <UniLogo />
                </div>
                <h3 className={styles.uni_name}>
                  Cochin University of <br /> Science and Technology
                </h3>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.details_block}>
              <h4 className={styles.details_title}>Quick Links</h4>
              <nav className={styles.quick_links}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#programs">Programs</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            {/* Follow Us */}
            <div className={styles.details_block}>
              <h4 className={styles.details_title}>Follow Us</h4>
              <div className={styles.social_links}>
                <a href="#" aria-label="Facebook"><FBIcon /></a>
                <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href="#" aria-label="Instagram"><InstaIcon /></a>
                <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              </div>
            </div>

          </div>

          <div className={styles.footer_bottom}>
            <p className={styles.copyright}>
              © 2026 Department of Applied Chemistry, CUSAT. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- ICON COMPONENTS ---

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const UniLogo = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const FBIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
