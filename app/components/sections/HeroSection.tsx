"use client";

import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  onConsult: () => void;
};

export default function HeroSection({ onConsult }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          COWAY · SOLUSI KUALITAS HIDUP
        </div>

        <h1 id="hero-title">
          Air yang lebih baik.
          <br />
          <em>Hari yang lebih praktis.</em>
        </h1>

        <p className={styles.lead}>
          Nikmati kemudahan air minum dan udara yang lebih bersih dengan pilihan
          produk Coway yang dapat disesuaikan dengan kebutuhan rumah maupun tempat kerja.
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryButton} onClick={onConsult}>
            Konsultasi gratis <span aria-hidden="true">↗</span>
          </button>
          <a className={styles.textLink} href="#solusi">
            Kenali solusinya <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.proof}>
          <span className={styles.proofIcon} aria-hidden="true">✳</span>
          <span>
            <strong>Lebih dari sekadar unit</strong>
            <small>Temukan produk dan dukungan perawatan yang sesuai.</small>
          </span>
        </div>
      </div>

      <div className={styles.bottom} aria-hidden="true">
        <span>01 — 09</span>
        <span>DESIGNED FOR EVERYDAY WELLBEING</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
