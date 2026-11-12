"use client";

type HeroSectionProps = {
  onConsult: () => void;
};

export default function HeroSection({ onConsult }: HeroSectionProps) {
  return (
    <section className={"hero-section"} aria-labelledby="hero-title">
      <div className={"hero-copy"}>
        <div className={"hero-eyebrow"}>
          <span className={"hero-eyebrow"Line} />
          COWAY · SOLUSI KUALITAS HIDUP
        </div>

        <h1 id="hero-title">
          Air yang lebih baik.
          <br />
          <em>Hari yang lebih praktis.</em>
        </h1>

        <p className={"hero-lead"}>
          Nikmati kemudahan air minum dan udara yang lebih bersih dengan pilihan
          produk Coway yang dapat disesuaikan dengan kebutuhan rumah maupun tempat kerja.
        </p>

        <div className={"hero-actions"}>
          <button type="button" className={"hero-primary-button"} onClick={onConsult}>
            Konsultasi gratis <span aria-hidden="true">↗</span>
          </button>
          <a className={"hero-text-link"} href="#solusi">
            Kenali solusinya <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={"hero-proof"}>
          <span className={"hero-proof"Icon} aria-hidden="true">✳</span>
          <span>
            <strong>Lebih dari sekadar unit</strong>
            <small>Temukan produk dan dukungan perawatan yang sesuai.</small>
          </span>
        </div>
      </div>

      <div className={"hero-bottom"} aria-hidden="true">
        <span>01 — 09</span>
        <span>DESIGNED FOR EVERYDAY WELLBEING</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
