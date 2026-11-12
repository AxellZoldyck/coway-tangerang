import Image from "next/image";
import { memo } from "react";

const areas = ["Tangerang Kota", "Tangerang Selatan", "Kabupaten Tangerang", "Jakarta", "Bogor", "Depok", "Bekasi"];

function TechnologySectionComponent() {
  return (
<section className="section technology-section" id="teknologi">
  <div className="section-kicker light-kicker">02 / HOW IT WORKS</div>
  <div className="tech-heading">
    <div><h2>Jernih di mata.<br /><em>Dirancang lebih jauh.</em></h2></div>
    <p>Kualitas air tidak hanya tentang tampilannya. Sumber air, proses filtrasi, teknologi pemurnian, dan perawatan sistem merupakan hal yang perlu dipertimbangkan.</p>
  </div>
  <div className="water-flow">
    <div className="water-line" />
    {[
      { n: "01", t: "Sumber air", d: "Kenali kondisi dan sumber air di lokasi Anda." },
      { n: "02", t: "Proses filtrasi", d: "Tahapan penyaringan sesuai sistem pada model." },
      { n: "03", t: "Pemurnian", d: "Teknologi pemurnian yang dirancang pada unit." },
      { n: "04", t: "Perawatan", d: "Perawatan mengikuti jadwal dan paket layanan." }
    ].map(x => (
      <article className="flow-card" key={x.n}>
        <span>{x.n}</span>
        <div className="flow-symbol">{x.n === "01" ? "◉" : x.n === "02" ? "⌁" : x.n === "03" ? "✳" : "↻"}</div>
        <h3>{x.t}</h3>
        <p>{x.d}</p>
      </article>
    ))}
  </div>
  <p className="disclaimer dark-disclaimer">Jenis filter, jumlah tahapan, dan kemampuan filtrasi dapat berbeda pada setiap model. Detail teknis mengikuti spesifikasi resmi produk.</p>
</section>
  );
}

function ServiceSectionComponent() {
  return (
<section className="section service-section" id="layanan">
  <div className="section-kicker">04 / BEYOND THE PRODUCT</div>
  <div className="service-heading">
    <h2>Bukan hanya memiliki unit.<br /><em>Perawatan juga penting.</em></h2>
    <p>Memilih water purifier juga berarti memahami cara merawatnya. Tanyakan detail dukungan layanan yang menyertai model dan skema pembelian pilihan Anda.</p>
  </div>
  <div className="service-steps">
    <article><span>01</span><div className="service-icon">⌕</div><h3>Konsultasi kebutuhan</h3><p>Diskusikan sumber air, jumlah pengguna, dan ruang pemasangan.</p></article>
    <article><span>02</span><div className="service-icon">▤</div><h3>Pilihan produk</h3><p>Pelajari fitur, spesifikasi, harga, dan skema pembayaran.</p></article>
    <article><span>03</span><div className="service-icon">⌂</div><h3>Instalasi</h3><p>Konfirmasi ketersediaan pengantaran dan instalasi di lokasi Anda.</p></article>
    <article><span>04</span><div className="service-icon">↻</div><h3>Perawatan berkala</h3><p>Pahami jadwal servis dan penggantian filter dalam paket.</p></article>
  </div>
</section>
  );
}

function AreaSectionComponent() {
  return (
<section className="section area-section">
  <div>
    <div className="section-kicker">06 / OUR SERVICE AREA</div>
    <h2>Konsultasi Coway<br /><em>di Jabodetabek.</em></h2>
  </div>
  <div className="area-content">
    <p>Mencari water purifier Coway di Tangerang atau kota sekitarnya? Sampaikan lokasi Anda untuk memeriksa ketersediaan konsultasi, pengantaran, dan instalasi.</p>
    <div className="area-tags">{areas.map(area => <span key={area}>{area}</span>)}</div>
  </div>
</section>
  );
}

function SiteFooterComponent() {
  return (
<footer className="footer">
  <a className="brand footer-brand" href="#"><Image className="brand-logo" src="/coway.png" alt="Coway" width={132} height={42} /></a>
  <p>Informasi dan konsultasi produk Coway untuk area Jabodetabek.</p>
  <div className="footer-links"><a href="#solusi">Solusi</a><a href="#teknologi">Teknologi</a><a href="#layanan">Layanan</a><a href="#faq">FAQ</a></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Coway Tangerang</span><span>Sales consultation · Jabodetabek</span></div>
  <p className="footer-disclaimer">Halaman konsultasi penjualan independen. Bukan situs resmi Coway Indonesia. Merek dan produk Coway merupakan milik pemegang hak masing-masing. Spesifikasi, harga, program, dan layanan mengikuti informasi resmi yang berlaku.</p>
</footer>
  );
}

export const TechnologySection = memo(TechnologySectionComponent);
export const ServiceSection = memo(ServiceSectionComponent);
export const AreaSection = memo(AreaSectionComponent);
export const SiteFooter = memo(SiteFooterComponent);
