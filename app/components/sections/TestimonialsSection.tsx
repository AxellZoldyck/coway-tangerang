"use client";

import { memo } from "react";

const testimonials = [
              { name: "Nadia P.", city: "Tangerang Selatan", product: "OMBAK", initial: "N", tone: "sage", quote: "Sejak pakai Coway Ombak, urusan air minum di rumah jadi jauh lebih praktis. Anak-anak juga gampang ambil air sendiri." },
              { name: "Budi S.", city: "BSD City", product: "NEO PLUS", initial: "B", tone: "sand", quote: "Neo Plus ini kepake banget di rumah. Mau air panas atau dingin tinggal pencet, nggak perlu ribet masak air lagi." },
              { name: "Rina A.", city: "Jakarta Selatan", product: "NOBLE 2", initial: "R", tone: "rose", quote: "Awalnya fokus cari air purifier buat kamar. Setelah pakai Noble 2, rasanya lebih tenang pas lagi istirahat." },
              { name: "Dimas K.", city: "Gading Serpong", product: "STORM", initial: "D", tone: "blue", quote: "Storm jadi andalan di ruang keluarga. Desainnya juga cakep, jadi nggak ganggu interior rumah." },
              { name: "Maya L.", city: "Alam Sutera", product: "POE-23A", initial: "M", tone: "lavender", quote: "Senang akhirnya bisa konsultasi dulu soal kondisi air rumah. Jadi lebih paham filter yang memang dibutuhkan." },
              { name: "Andi R.", city: "Karawaci", product: "VILLAEM III", initial: "A", tone: "olive", quote: "Villaem III cocok buat kebutuhan keluarga kami. Pilihan airnya praktis dan tampilannya juga kelihatan rapi." },
              { name: "Siska W.", city: "Bintaro", product: "YONSU", initial: "S", tone: "peach", quote: "Paling suka karena kebutuhan air di rumah jadi lebih diperhatikan. Proses konsultasinya juga enak, dijelasin pelan-pelan." },
              { name: "Fajar M.", city: "Jakarta Barat", product: "SQUAREBIG", initial: "F", tone: "slate", quote: "Pakai Squarebig buat area yang cukup luas. Suka karena bentuknya simpel dan nggak kelihatan bulky." },
              { name: "Tari N.", city: "Ciputat", product: "CINNAMON", initial: "T", tone: "mint", quote: "Cinnamon bikin rutinitas ambil air jadi gampang. Apalagi kalau lagi buru-buru pagi, tinggal pilih sesuai kebutuhan." },
              { name: "Rizky H.", city: "Bekasi", product: "NEXT STORM", initial: "R", tone: "clay", quote: "Next Storm jadi salah satu upgrade rumah yang paling kerasa manfaatnya. Overall puas, semoga awet terus!" }
            ];

function TestimonialsSectionComponent() {
  return (
  <section className="section testimonials-section">
    <div className="testimonials-topline"><div className="section-kicker">07 / ULASAN PELANGGAN</div></div>
    <div className="testimonials-heading"><h2>Senang punya Coway,<br /><em>nyaman tiap hari.</em></h2></div>
    <div className="testimonial-carousel-shell">
      <div className="testimonial-carousel-controls">
        <div>
          <button type="button" aria-label="Geser ulasan ke kiri" onClick={() => document.getElementById("testimonial-track")?.scrollBy({ left: -340, behavior: "smooth" })}>←</button>
          <button type="button" aria-label="Geser ulasan ke kanan" onClick={() => document.getElementById("testimonial-track")?.scrollBy({ left: 340, behavior: "smooth" })}>→</button>
        </div>
      </div>
      <div className="testimonial-carousel" id="testimonial-track">
        {testimonials.map((item, index) => (
          <article className="testimonial-card" key={item.name}>
            <div className="testimonial-card-top"><span className="testimonial-index">0{index + 1}</span><span className="testimonial-type">{item.product}</span></div>
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-person">
              <div className={"testimonial-avatar avatar-" + item.tone} aria-hidden="true">{item.initial}</div>
              <div className="testimonial-person-info"><b>{item.name}</b><span>{item.city}</span></div>
            </div>
          </article>
        ))}
      </div>
    </div>
    <p className="testimonials-disclaimer">Konten ulasan ini merupakan materi ilustratif, bukan testimoni pelanggan terverifikasi.</p>
  </section>
  );
}

export default memo(TestimonialsSectionComponent);
