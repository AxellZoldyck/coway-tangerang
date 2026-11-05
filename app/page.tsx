"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "") ?? "";
const waLink = (message: string) =>
  waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}` : "#konsultasi";

const faqs = [
  {
    q: "Apa itu water purifier Coway?",
    a: "Water purifier Coway adalah perangkat pemurni air minum dengan sistem filtrasi yang disesuaikan pada masing-masing model. Jenis filter, kapasitas, dan fitur dapat berbeda, jadi konsultasikan kebutuhan air dan jumlah pengguna sebelum memilih.",
  },
  {
    q: "Apakah Coway tersedia untuk rumah dan kantor?",
    a: "Tersedia pilihan untuk kebutuhan rumah tangga maupun penggunaan kantor dan bisnis. Rekomendasi unit sebaiknya mempertimbangkan jumlah pengguna, pola konsumsi, ruang pemasangan, serta kebutuhan air panas atau dingin.",
  },
  {
    q: "Bagaimana layanan perawatan dan penggantian filter?",
    a: "Program layanan mengikuti model dan skema pembelian yang dipilih. Detail jadwal kunjungan, sanitasi, dan penggantian filter akan dijelaskan saat konsultasi agar sesuai dengan ketentuan produk yang berlaku.",
  },
  {
    q: "Apakah bisa membeli dengan cicilan?",
    a: "Pilihan pembayaran dan tenor dapat berbeda mengikuti program yang sedang tersedia. Hubungi konsultan untuk mendapatkan simulasi terbaru dan rincian biaya sebelum mengambil keputusan.",
  },
  {
    q: "Apakah melayani area di luar Tangerang?",
    a: "Kami menerima konsultasi untuk area Jabodetabek, termasuk Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Ketersediaan instalasi dan cakupan layanan perlu dikonfirmasi berdasarkan alamat Anda.",
  },
];

const areas = [
  "Tangerang Kota", "Tangerang Selatan", "Kabupaten Tangerang", "Jakarta",
  "Bogor", "Depok", "Bekasi",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [people, setPeople] = useState(4);
  const [litres, setLitres] = useState(2);
  const [gallonPrice, setGallonPrice] = useState(20000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", need: "Rumah", users: "4 orang", city: "Tangerang", product: "" });
  const [notice, setNotice] = useState("");

  const monthlyGallons = useMemo(() => Math.ceil((people * litres * 30) / 19), [people, litres]);
  const monthlyCost = monthlyGallons * gallonPrice;
  const message = `Halo, saya ingin konsultasi Coway.\nNama: ${form.name}\nWhatsApp: ${form.phone}\nKebutuhan: ${form.need}\nJumlah pengguna: ${form.users}\nKota: ${form.city}\nProduk diminati: ${form.product || "Belum tahu"}`;

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!waNumber) {
      setNotice("Nomor WhatsApp sales belum dikonfigurasi. Silakan tambahkan NEXT_PUBLIC_WHATSAPP_NUMBER pada environment deployment.");
      return;
    }
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setNotice("WhatsApp terbuka dengan detail konsultasi Anda. Silakan kirim pesan untuk melanjutkan.");
  }

  return (
    <main>
      <div className="topline"><span className="pulse" /> Konsultasi Coway untuk area Jabodetabek</div>
      <header className="header">
        <a className="brand" href="#" aria-label="Coway Jabodetabek beranda">
          <Image className="brand-logo" src="/coway.png" alt="Coway" width={132} height={42} priority />
        </a>
        <nav className="nav" aria-label="Navigasi utama">
          <a href="#produk">Produk</a><a href="#solusi">Solusi</a><a href="#rumah">Untuk Rumah</a><a href="#bisnis">Untuk Bisnis</a><a href="#teknologi">Teknologi</a><a href="#layanan">Layanan</a><a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small button-dark" href="#konsultasi">Konsultasi <Arrow /></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> WATER PURIFIER · JABODETABEK</div>
          <h1>Air yang lebih baik.<br /><em>Hari yang lebih praktis.</em></h1>
          <p className="hero-lead">Nikmati kemudahan air minum di rumah dan tempat kerja dengan pilihan water purifier Coway yang dapat disesuaikan dengan kebutuhan Anda.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#konsultasi">Konsultasi gratis <Arrow /></a>
            <a className="text-link" href="#solusi">Kenali solusinya <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon">✳</div><div><strong>Lebih dari sekadar unit</strong><span>Kenali pilihan produk dan dukungan perawatannya.</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi water purifier di ruang keluarga">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-room"><div className="art-window"><i /><i /><i /><i /></div><div className="art-shelf" /><div className="art-plant"><b /><b /><b /><span /></div></div>
          <div className="purifier">
            <div className="purifier-top"><span /></div><div className="purifier-body"><div className="purifier-display"><i /><i /></div><div className="purifier-tap" /><div className="purifier-drop" /></div><div className="purifier-base" />
          </div>
          <div className="art-caption"><span>01 / EVERYDAY LIVING</span><strong>Small upgrade,<br />better routine.</strong></div>
          <div className="art-stamp">COWAY<br /><b>WATER</b></div>
        </div>
        <div className="hero-bottom"><span>01 — 05</span><span>DESIGNED FOR EVERYDAY WELLBEING</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="trust-strip">
        <div><span className="strip-icon">⌁</span><strong>Teknologi filtrasi</strong><small>Disesuaikan per model</small></div>
        <div><span className="strip-icon">◷</span><strong>Dukungan perawatan</strong><small>Mengikuti paket layanan</small></div>
        <div><span className="strip-icon">⌂</span><strong>Rumah & bisnis</strong><small>Pilihan sesuai kebutuhan</small></div>
        <div><span className="strip-icon">♡</span><strong>Konsultasi personal</strong><small>Bantu pilih unit yang tepat</small></div>
      </section>

      <section className="section intro-section" id="solusi">
        <div className="section-kicker">01 / THE EVERYDAY QUESTION</div>
        <div className="intro-grid">
          <h2>Masih mengandalkan galon untuk <em>setiap tegukan?</em></h2>
          <div><p className="body-large">Pesan, tunggu, angkat, simpan, pasang, lalu ulangi lagi saat galon habis. Kebutuhan air minum yang sederhana kadang menyita lebih banyak waktu dan tenaga dari yang kita sadari.</p><p>Bagaimana jika akses air minum di rumah bisa terasa lebih praktis? Mulai dengan memahami kebutuhan Anda dan pilihan water purifier yang tersedia.</p><a className="under-link" href="#konsultasi">Temukan solusi yang sesuai <Arrow /></a></div>
        </div>
        <div className="routine">
          {["Pesan galon","Menunggu","Angkat & simpan","Pasang","Habis lagi"].map((item, i) => <div className="routine-step" key={item}><span>0{i + 1}</span><b>{item}</b>{i < 4 && <i>→</i>}</div>)}
        </div>
      </section>

      <section className="section technology-section" id="teknologi">
        <div className="section-kicker light-kicker">02 / HOW IT WORKS</div>
        <div className="tech-heading"><div><h2>Jernih di mata.<br /><em>Dirancang lebih jauh.</em></h2></div><p>Kualitas air tidak hanya tentang tampilannya. Sumber air, proses filtrasi, teknologi pemurnian, dan perawatan sistem merupakan hal yang perlu dipertimbangkan.</p></div>
        <div className="water-flow"><div className="water-line" />{[{n:"01",t:"Sumber air",d:"Kenali kondisi dan sumber air di lokasi Anda."},{n:"02",t:"Proses filtrasi",d:"Tahapan penyaringan sesuai sistem pada model."},{n:"03",t:"Pemurnian",d:"Teknologi pemurnian yang dirancang pada unit."},{n:"04",t:"Perawatan",d:"Perawatan mengikuti jadwal dan paket layanan."}].map(x=><article className="flow-card" key={x.n}><span>{x.n}</span><div className="flow-symbol">{x.n==="01"?"◉":x.n==="02"?"⌁":x.n==="03"?"✳":"↻"}</div><h3>{x.t}</h3><p>{x.d}</p></article>)}</div>
        <p className="disclaimer dark-disclaimer">Jenis filter, jumlah tahapan, dan kemampuan filtrasi dapat berbeda pada setiap model. Detail teknis mengikuti spesifikasi resmi produk.</p>
      </section>

      <section className="section benefit-section" id="produk">
        <div className="section-kicker">03 / MADE FOR YOUR ROUTINE</div>
        <div className="benefit-head"><h2>Teknologi yang membuat<br /><em>hidup terasa sederhana.</em></h2><p>Dirancang untuk menjadi bagian dari rutinitas, bukan tambahan pekerjaan di rumah.</p></div>
        <div className="benefit-grid">
          <article className="benefit-card benefit-main"><div className="benefit-visual glass-visual"><div className="glass"><span /></div><div className="glass-shadow" /></div><span className="card-index">01 — EVERYDAY</span><h3>Air siap digunakan</h3><p>Akses air minum untuk membantu kebutuhan sehari-hari.</p></article>
          <article className="benefit-card"><div className="benefit-visual temp-visual"><span>HOT</span><i>·</i><span>COLD</span><b>↕</b></div><span className="card-index">02 — FLEXIBILITY</span><h3>Pilihan suhu</h3><p>Fitur air panas, dingin, atau normal pada model tertentu.</p></article>
          <article className="benefit-card"><div className="benefit-visual service-visual"><div className="service-ring">↻</div><span className="service-dot" /></div><span className="card-index">03 — CARE</span><h3>Dukungan layanan</h3><p>Program perawatan dan penggantian filter sesuai paket.</p></article>
        </div>
      </section>

      <section className="section calculator-section">
        <div className="calc-copy"><div className="section-kicker">04 / LET’S DO THE MATH</div><h2>Hitung kebutuhan galon <em>di rumah Anda.</em></h2><p>Gunakan kalkulator sederhana ini untuk memperkirakan jumlah galon dan pengeluaran bulanan berdasarkan kebiasaan keluarga.</p><div className="calc-note">Simulasi ini hanya estimasi biaya galon, bukan perbandingan harga atau jaminan penghematan produk Coway.</div></div>
        <div className="calculator">
          <div className="calc-field"><label htmlFor="people">Jumlah anggota keluarga</label><div className="stepper"><button type="button" onClick={()=>setPeople(Math.max(1,people-1))} aria-label="Kurangi anggota">−</button><strong>{people} <small>orang</small></strong><button type="button" onClick={()=>setPeople(Math.min(20,people+1))} aria-label="Tambah anggota">+</button></div></div>
          <div className="calc-field"><label htmlFor="litres">Konsumsi per orang / hari</label><div className="stepper"><button type="button" onClick={()=>setLitres(Math.max(1,litres-.5))} aria-label="Kurangi konsumsi">−</button><strong>{litres.toLocaleString("id-ID")} <small>liter</small></strong><button type="button" onClick={()=>setLitres(Math.min(5,litres+.5))} aria-label="Tambah konsumsi">+</button></div></div>
          <div className="calc-field"><label htmlFor="price">Harga satu galon isi ulang</label><div className="price-input"><span>Rp</span><input id="price" type="number" min="0" step="1000" value={gallonPrice} onChange={e=>setGallonPrice(Math.max(0,Number(e.target.value)))} /></div></div>
          <div className="calc-result"><span>ESTIMASI KEBUTUHAN / BULAN</span><strong>{monthlyGallons} <small>galon</small></strong><div><span>Perkiraan biaya bulanan</span><b>Rp {monthlyCost.toLocaleString("id-ID")}</b></div><small className="result-foot">Asumsi 19 liter per galon dan 30 hari per bulan.</small></div>
          <a className="button button-light full-button" href="#konsultasi">Diskusikan kebutuhan air <Arrow /></a>
        </div>
      </section>

      <section className="section service-section" id="layanan">
        <div className="section-kicker">05 / BEYOND THE PRODUCT</div>
        <div className="service-heading"><h2>Bukan hanya memiliki unit.<br /><em>Perawatan juga penting.</em></h2><p>Memilih water purifier juga berarti memahami cara merawatnya. Tanyakan detail dukungan layanan yang menyertai model dan skema pembelian pilihan Anda.</p></div>
        <div className="service-steps">
          <article><span>01</span><div className="service-icon">⌕</div><h3>Konsultasi kebutuhan</h3><p>Diskusikan sumber air, jumlah pengguna, dan ruang pemasangan.</p></article>
          <article><span>02</span><div className="service-icon">▤</div><h3>Pilihan produk</h3><p>Pelajari fitur, spesifikasi, harga, dan skema pembayaran.</p></article>
          <article><span>03</span><div className="service-icon">⌂</div><h3>Instalasi</h3><p>Konfirmasi ketersediaan pengantaran dan instalasi di lokasi Anda.</p></article>
          <article><span>04</span><div className="service-icon">↻</div><h3>Perawatan berkala</h3><p>Pahami jadwal servis dan penggantian filter dalam paket.</p></article>
        </div>
      </section>

      <section className="section audience-section">
        <div className="audience-art"><div className="audience-circle"><span>WATER</span><b>for<br />every<br />space.</b><i>✳</i></div></div>
        <div className="audience-copy"><div className="section-kicker">06 / ONE SOLUTION, DIFFERENT NEEDS</div><h2>Untuk ruang yang<br /><em>berbeda-beda.</em></h2><div className="audience-list"><article id="rumah"><span>01</span><div><h3>Rumah & keluarga</h3><p>Solusi air minum untuk kebutuhan sehari-hari keluarga.</p></div><b>↗</b></article><article><span>02</span><div><h3>Kantor & ruang kerja</h3><p>Pilihan unit untuk mendukung kenyamanan aktivitas kerja.</p></div><b>↗</b></article><article id="bisnis"><span>03</span><div><h3>Bisnis & usaha</h3><p>Konsultasikan kapasitas dan kebutuhan operasional lokasi Anda.</p></div><b>↗</b></article></div></div>
      </section>

      <section className="section payment-section">
        <div className="section-kicker">07 / OWNERSHIP OPTIONS</div><div className="payment-heading"><h2>Pilih skema yang<br /><em>sesuai rencana Anda.</em></h2><p>Pelajari pilihan kepemilikan yang tersedia. Harga, tenor, cakupan layanan, dan ketentuan dapat berubah mengikuti program resmi yang berlaku.</p></div>
        <div className="payment-grid"><article><span>OPTION 01</span><div className="payment-icon">↗</div><h3>Cicilan</h3><p>Opsi pembayaran bertahap dengan pilihan tenor sesuai program yang tersedia.</p><a href="#konsultasi">Tanya simulasi <Arrow /></a></article><article className="payment-featured"><span>OPTION 02 · FLEXIBLE</span><div className="payment-icon">◈</div><h3>Pembayaran penuh</h3><p>Pembayaran satu kali di awal. Tanyakan detail paket layanan yang menyertai pembelian.</p><a href="#konsultasi">Tanya detail <Arrow /></a></article><article><span>OPTION 03</span><div className="payment-icon">＋</div><h3>Produk saja</h3><p>Pilihan unit tanpa paket layanan tertentu, jika tersedia pada model terkait.</p><a href="#konsultasi">Tanya ketersediaan <Arrow /></a></article></div>
      </section>

      <section className="section area-section"><div><div className="section-kicker">08 / OUR SERVICE AREA</div><h2>Konsultasi Coway<br /><em>di Jabodetabek.</em></h2></div><div className="area-content"><p>Mencari water purifier Coway di Tangerang atau kota sekitarnya? Sampaikan lokasi Anda untuk memeriksa ketersediaan konsultasi, pengantaran, dan instalasi.</p><div className="area-tags">{areas.map(area=><span key={area}>{area}</span>)}</div></div></section>

      <section className="section faq-section" id="faq"><div className="faq-intro"><div className="section-kicker">09 / GOOD TO KNOW</div><h2>Ada yang ingin<br /><em>Anda tanyakan?</em></h2><p>Temukan jawaban awal sebelum berkonsultasi dengan tim kami.</p><a className="under-link" href="#konsultasi">Tanyakan langsung <Arrow /></a></div><div className="faq-list">{faqs.map((faq,i)=><article className={openFaq===i?"faq-item active":"faq-item"} key={faq.q}><button type="button" onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>0{i+1}</span><b>{faq.q}</b><i>{openFaq===i?"−":"+"}</i></button>{openFaq===i&&<p>{faq.a}</p>}</article>)}</div></section>

      <section className="contact-section" id="konsultasi"><div className="contact-deco">C</div><div className="contact-copy"><div className="section-kicker light-kicker">10 / YOUR NEXT STEP</div><h2>Air yang Anda pilih,<br /><em>dimulai dari percakapan.</em></h2><p>Ceritakan kebutuhan rumah atau tempat kerja Anda. Kami bantu jelaskan pilihan produk, fitur, serta skema yang relevan—tanpa tekanan untuk membeli.</p><div className="contact-location"><span>⌖</span> Melayani konsultasi Jabodetabek</div></div><form className="lead-form" onSubmit={submitLead}><div className="form-heading"><span>LET’S TALK</span><h3>Konsultasi gratis</h3><p>Isi detail singkat berikut untuk memulai.</p></div><label>Nama lengkap<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama Anda" autoComplete="name" /></label><label>Nomor WhatsApp<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="08xxxxxxxxxx" autoComplete="tel" /></label><div className="form-row"><label>Kebutuhan<select value={form.need} onChange={e=>setForm({...form,need:e.target.value})}><option>Rumah</option><option>Kantor</option><option>Bisnis</option></select></label><label>Jumlah pengguna<input value={form.users} onChange={e=>setForm({...form,users:e.target.value})} placeholder="Contoh: 4 orang" /></label></div><label>Kota / area<input required value={form.city} onChange={e=>setForm({...form,city:e.target.value})} placeholder="Contoh: BSD, Tangerang" /></label><label>Produk yang diminati <small>(opsional)</small><input value={form.product} onChange={e=>setForm({...form,product:e.target.value})} placeholder="Belum tahu juga tidak apa-apa" /></label><button className="button button-dark full-button" type="submit">Lanjutkan via WhatsApp <Arrow /></button>{notice&&<p className="form-notice" role="status">{notice}</p>}<p className="form-privacy">Dengan mengirim formulir, Anda menyetujui data ini digunakan untuk menindaklanjuti permintaan konsultasi Anda.</p></form></section>

      <footer className="footer"><a className="brand footer-brand" href="#"><Image className="brand-logo" src="/coway.png" alt="Coway" width={132} height={42} /></a><p>Informasi dan konsultasi produk Coway untuk area Jabodetabek.</p><div className="footer-links"><a href="#solusi">Solusi</a><a href="#teknologi">Teknologi</a><a href="#layanan">Layanan</a><a href="#faq">FAQ</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Coway Tangerang</span><span>Sales consultation · Jabodetabek</span></div><p className="footer-disclaimer">Halaman konsultasi penjualan independen. Bukan situs resmi Coway Indonesia. Merek dan produk Coway merupakan milik pemegang hak masing-masing. Spesifikasi, harga, program, dan layanan mengikuti informasi resmi yang berlaku.</p></footer>
      <a className="floating-wa" href={waLink("Halo, saya ingin konsultasi produk Coway untuk area Jabodetabek.")} aria-label="Konsultasi Coway melalui WhatsApp" onClick={e=>{if(!waNumber){e.preventDefault();document.getElementById("konsultasi")?.scrollIntoView({behavior:"smooth"});}}}><span>↗</span><b>Chat sales</b></a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org",
        "@type":"WebSite",
        name:"Coway Tangerang",
        inLanguage:"id-ID",
        description:"Informasi dan konsultasi water purifier Coway untuk rumah, kantor, dan bisnis di Jabodetabek.",
        audience:{"@type":"Audience","geographicArea":{"@type":"AdministrativeArea","name":"Jabodetabek, Indonesia"}}
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        mainEntity:faqs.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))
      })}} />
    </main>
  );
}
