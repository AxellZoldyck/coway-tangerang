"use client";

import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import TrustStrip from "./components/sections/TrustStrip";
import AwardsSection from "./components/sections/AwardsSection";
import ProductCategoriesSection from "./components/sections/ProductCategoriesSection";
import { FormEvent, useEffect, useMemo, useState } from "react";

const waNumber = "6283193123626";
const waLink = (message: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionAnswers, setSolutionAnswers] = useState({ focus: "", place: "", scale: "" });
  const [solutionStep, setSolutionStep] = useState(0);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registerData, setRegisterData] = useState({ name: "", phone: "", city: "" });
  const [registerProduct, setRegisterProduct] = useState("Belum menentukan produk");
  const [registerNeed, setRegisterNeed] = useState("Konsultasi produk Coway");

  function openRegister(productName?: string) {
    const product = productName || "Belum menentukan produk";
    setRegisterProduct(product);
    setRegisterNeed(solutionRecommendation?.title || "Konsultasi produk Coway");
    setForm(current => ({ ...current, need: solutionAnswers.place || current.need, users: solutionAnswers.scale || current.users, product }));
    setRegisterOpen(true);
  }

  function submitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const registerMessage = ["Halo, saya ingin mendaftar konsultasi produk Coway.", "Nama: " + registerData.name, "WhatsApp: " + registerData.phone, "Kota / area: " + registerData.city, "Kebutuhan: " + registerNeed, "Produk pilihan: " + registerProduct, "Lingkungan penggunaan: " + (solutionAnswers.place || form.need), "Skala kebutuhan: " + (solutionAnswers.scale || form.users)].join("\n");
    window.open(waLink(registerMessage), "_blank", "noopener,noreferrer");
    setRegisterOpen(false);
  }
  const solutionComplete = Boolean(solutionAnswers.focus && solutionAnswers.place && solutionAnswers.scale);

  const solutionCatalog = {
    drink: {
      title: "Water Purifier",
      description: "Pemurni air minum dengan pilihan kapasitas, suhu, dan desain yang berbeda.",
      href: "/produk/water-purifier",
      products: {
        small: [
          { name: "Neo Plus", model: "CHP-264L", image: "/waterpurifier/neoplus.png", detail: "Desain ringkas dengan pilihan air panas, dingin, dan normal. Kapasitas tangki total 5,8 liter." },
          { name: "Ombak", model: "CHP-7310R", image: "/waterpurifier/ombak.png", detail: "50 kombinasi pengaturan suhu dan volume air, dengan sistem filtrasi Reverse Osmosis." },
          { name: "Villaem III", model: "CHP-7320R", image: "/waterpurifier/villaem3.png", detail: "Empat pilihan air: normal, dingin, hangat, dan panas. Kapasitas tangki total 11,4 liter." }
        ],
        medium: [
          { name: "Ombak", model: "CHP-7310R", image: "/waterpurifier/ombak.png", detail: "50 kombinasi pengaturan suhu dan volume air, dengan sistem filtrasi Reverse Osmosis." },
          { name: "Villaem III", model: "CHP-7320R", image: "/waterpurifier/villaem3.png", detail: "Empat pilihan air: normal, dingin, hangat, dan panas. Kapasitas tangki total 11,4 liter." },
          { name: "Neo Plus", model: "CHP-264L", image: "/waterpurifier/neoplus.png", detail: "Desain ringkas dengan pilihan air panas, dingin, dan normal. Kapasitas tangki total 5,8 liter." }
        ],
        large: [
          { name: "Villaem III", model: "CHP-7320R", image: "/waterpurifier/villaem3.png", detail: "Kapasitas tangki total 11,4 liter dengan empat pilihan air termasuk hangat dan panas." },
          { name: "Ombak", model: "CHP-7310R", image: "/waterpurifier/ombak.png", detail: "50 kombinasi pengaturan suhu dan volume air untuk menyesuaikan kebutuhan pemakaian." },
          { name: "Neo Plus", model: "CHP-264L", image: "/waterpurifier/neoplus.png", detail: "Alternatif berukuran ringkas dengan tiga pilihan suhu air." }
        ]
      }
    },
    indoor: {
      title: "Air Purifier",
      description: "Pemurni udara yang dipilih berdasarkan luas ruangan dan fitur setiap model.",
      href: "/produk/air-purifier",
      products: {
        small: [
          { name: "Cartridge", model: "AP-1019C", image: "/airpurifier/cartridge.png", detail: "HEPA filter system untuk area hingga 34 m², dengan desain ringkas." },
          { name: "Squarefit", model: "AP-1125G", image: "/airpurifier/squarefit.png", detail: "Pemurni udara untuk area hingga 33 m² dengan konsumsi daya 45 W." }
        ],
        medium: [
          { name: "Storm", model: "AP-1516D", image: "/airpurifier/storm.png", detail: "HEPA filter system dengan CADR 375 m³/jam untuk area hingga 49,5 m²." },
          { name: "Next Storm", model: "AP-2025A", image: "/airpurifier/nextstorm.png", detail: "Tiga arah sirkulasi udara dan cakupan area hingga 65 m²." },
          { name: "Noble 2", model: "AP-2023K", image: "/airpurifier/noble2.png", detail: "4D 360° filter dengan area aplikasi hingga 67 m² dan pilihan filter sesuai kebutuhan." }
        ],
        large: [
          { name: "Squarebig", model: "AP-2425H", image: "/airpurifier/squarebig.png", detail: "Double Air Matching Filter Technology dengan cakupan yang disebutkan Coway hingga 79 m²." },
          { name: "Noble 2", model: "AP-2023K", image: "/airpurifier/noble2.png", detail: "4D 360° filter dan area aplikasi hingga 67 m²." },
          { name: "Next Storm", model: "AP-2025A", image: "/airpurifier/nextstorm.png", detail: "Tiga arah sirkulasi udara untuk area hingga 65 m²." }
        ]
      }
    },
    source: {
      title: "Water Filter",
      description: "Penyaringan air dari sumber rumah tangga. Kesesuaian instalasi perlu dicek berdasarkan kondisi air dan tekanan di lokasi.",
      href: "/produk/water-filter",
      products: {
        small: [{ name: "POE-23A", model: "POE-23A", image: "/waterfilter/poe23a.png", detail: "PVDF ultrafiltration membrane hingga 0,01 mikron; untuk sumber air PDAM maupun air tanah." }],
        medium: [{ name: "POE-23A", model: "POE-23A", image: "/waterfilter/poe23a.png", detail: "PVDF ultrafiltration membrane hingga 0,01 mikron; untuk sumber air PDAM maupun air tanah." }],
        large: [{ name: "POE-23A", model: "POE-23A", image: "/waterfilter/poe23a.png", detail: "PVDF ultrafiltration membrane hingga 0,01 mikron; kapasitas aliran 3.200–3.300 L/jam." }]
      }
    },
    softener: {
      title: "Water Softener",
      description: "Untuk kebutuhan air mandi dan perawatan tubuh. Air keluaran Yonsu bukan untuk diminum atau memasak.",
      href: "/produk/water-filter",
      products: {
        small: [{ name: "Yonsu", model: "BB14-AID", image: "/waterfilter/yonsu.png", detail: "Water softener dengan Composite Filter Technology dan Vitamin C untuk membantu mengurangi residu klorin serta menghasilkan soft water untuk mandi." }],
        medium: [{ name: "Yonsu", model: "BB14-AID", image: "/waterfilter/yonsu.png", detail: "Water softener dengan Composite Filter Technology dan Vitamin C untuk membantu mengurangi residu klorin serta menghasilkan soft water untuk mandi." }],
        large: [{ name: "Yonsu", model: "BB14-AID", image: "/waterfilter/yonsu.png", detail: "Water softener dengan Composite Filter Technology dan Vitamin C untuk membantu mengurangi residu klorin serta menghasilkan soft water untuk mandi." }]
      }
    }
  } as const;

  const solutionRecommendation = solutionComplete
    ? solutionCatalog[solutionAnswers.focus as keyof typeof solutionCatalog]
    : null;
  const recommendedProducts = solutionComplete && solutionRecommendation
    ? solutionRecommendation.products[solutionAnswers.scale as "small" | "medium" | "large"]
    : [];
  function chooseSolutionAnswer(key: "focus" | "place" | "scale", value: string) {
    setSolutionAnswers(current => ({ ...current, [key]: value, ...(key === "focus" ? { place: "", scale: "" } : key === "place" ? { scale: "" } : {}) }));
    setSolutionStep(current => Math.min(current + 1, 3));
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header className={scrolled ? "header header-scrolled" : "header"}>
        <a className="brand" href="#" aria-label="Coway Jabodetabek beranda" onClick={() => setMenuOpen(false)}>
          <Image className="brand-logo" src="/coway.png" alt="Coway" width={132} height={42} priority />
        </a>
        <nav id="mobile-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navigasi utama">
          <a href="#produk" onClick={() => setMenuOpen(false)}>Produk</a><a href="#solusi" onClick={() => setMenuOpen(false)}>Solusi</a><a href="#teknologi" onClick={() => setMenuOpen(false)}>Teknologi</a><a href="#layanan" onClick={() => setMenuOpen(false)}>Layanan</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <div className="header-actions">
          <button type="button" className="button button-small button-dark" onClick={()=>openRegister()}>Konsultasi <Arrow /></button>
          <button className={menuOpen ? "mobile-menu-toggle is-open" : "mobile-menu-toggle"} type="button" aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </header>

      <HeroSection onConsult={() => openRegister()} />

            <TrustStrip />

            <AwardsSection />

                  <ProductCategoriesSection />

      <section className="section solution-section" id="solusi">
        <div className="section-kicker">01 / FIND YOUR SOLUTION</div>
        <div className="solution-heading">
          <div><h2>Temukan pilihan yang<br /><em>sesuai kebutuhan Anda.</em></h2></div>
          <p>Jawab satu pertanyaan setiap langkah. Setelah selesai, Anda akan melihat maksimal tiga produk yang paling relevan untuk dipertimbangkan.</p>
        </div>
        <div className="solution-quiz">
          <div className="solution-progress"><span>PERSONAL PRODUCT MATCH</span><b>{solutionComplete ? "3 / 3 selesai" : `LANGKAH ${solutionStep + 1} DARI 3`}</b></div>
          {!solutionComplete && <div className="solution-progress-track"><span style={{ width: `${((solutionStep + 1) / 3) * 100}%` }} /></div>}
          {!solutionComplete && <div className="solution-single-step" key={solutionStep}>
            <div className="solution-step-meta"><span>PERTANYAAN 0{solutionStep + 1}</span><span>{solutionStep === 0 ? "MULAI DARI KEBUTUHAN" : solutionStep === 1 ? "KONTEKS PENGGUNAAN" : "SKALA KEBUTUHAN"}</span></div>
            {solutionStep === 0 && <>
              <h3>Apa kebutuhan utama yang ingin Anda penuhi?</h3>
              <p className="solution-step-description">Pilih satu kategori yang paling sesuai dengan kebutuhan Anda.</p>
              <div className="solution-options">
                {[{value:"drink",label:"Air minum",detail:"Pemurni air untuk konsumsi sehari-hari"},{value:"indoor",label:"Udara dalam ruangan",detail:"Membantu menyaring udara di rumah atau ruang kerja"},{value:"source",label:"Penyaringan air rumah",detail:"Penyaringan air dari sumber PDAM atau air tanah"},{value:"softener",label:"Air mandi lebih lembut",detail:"Water softener untuk mandi dan perawatan tubuh"}].map(option=><button type="button" key={option.value} className="solution-option" onClick={()=>chooseSolutionAnswer("focus",option.value)}><span>{option.label}</span><small>{option.detail}</small><i>→</i></button>)}
              </div>
            </>}
            {solutionStep === 1 && <>
              <h3>Di mana produk akan digunakan?</h3>
              <p className="solution-step-description">Lingkungan penggunaan membantu memperjelas konteks pemilihan.</p>
              <div className="solution-options solution-options-inline">
                {[{value:"Rumah",label:"Rumah",detail:"Hunian pribadi atau keluarga"},{value:"Kantor",label:"Kantor",detail:"Ruang kerja dan aktivitas profesional"},{value:"Bisnis / usaha",label:"Bisnis / usaha",detail:"Lokasi usaha atau area komersial"}].map(option=><button type="button" key={option.value} className="solution-option" onClick={()=>chooseSolutionAnswer("place",option.value)}><span>{option.label}</span><small>{option.detail}</small><i>→</i></button>)}
              </div>
            </>}
            {solutionStep === 2 && <>
              <h3>{solutionAnswers.focus === "indoor" ? "Seberapa luas ruangan yang ingin dijaga kualitas udaranya?" : solutionAnswers.focus === "softener" ? "Seberapa banyak area mandi yang membutuhkan soft water?" : solutionAnswers.focus === "source" ? "Seberapa besar kebutuhan penyaringan air di lokasi Anda?" : "Berapa banyak orang yang akan menggunakan air minum ini?"}</h3>
              <p className="solution-step-description">{solutionAnswers.focus === "indoor" ? "Pilih perkiraan luas area, bukan luas seluruh bangunan jika hanya satu ruangan." : "Pilih perkiraan skala penggunaan sehari-hari."}</p>
              <div className="solution-options solution-options-inline">
                {(solutionAnswers.focus === "indoor"
                  ? [{value:"small",label:"Ruangan kecil",detail:"Hingga sekitar 33 m²"},{value:"medium",label:"Ruangan sedang",detail:"Sekitar 34–50 m²"},{value:"large",label:"Ruangan luas",detail:"Lebih dari 50 m²"}]
                  : solutionAnswers.focus === "softener"
                  ? [{value:"small",label:"1 kamar mandi",detail:"Kebutuhan personal"},{value:"medium",label:"2 kamar mandi",detail:"Kebutuhan keluarga"},{value:"large",label:"3+ kamar mandi",detail:"Area penggunaan lebih luas"}]
                  : solutionAnswers.focus === "source"
                  ? [{value:"small",label:"Kebutuhan dasar",detail:"Satu titik penggunaan"},{value:"medium",label:"Kebutuhan keluarga",detail:"Beberapa titik penggunaan"},{value:"large",label:"Kebutuhan lebih luas",detail:"Area rumah lebih besar"}]
                  : [{value:"small",label:"1–3 orang",detail:"Penggunaan ringan"},{value:"medium",label:"4–6 orang",detail:"Kebutuhan keluarga"},{value:"large",label:"7+ orang",detail:"Penggunaan lebih intensif"}]
                ).map(option=><button type="button" key={option.value} className="solution-option" onClick={()=>chooseSolutionAnswer("scale",option.value)}><span>{option.label}</span><small>{option.detail}</small><i>→</i></button>)}
              </div>
            </>}
            <div className="solution-step-footer">
              {solutionStep > 0 ? <button type="button" className="solution-back" onClick={()=>setSolutionStep(current=>Math.max(0,current-1))}>← Kembali</button> : <span>Hanya 3 langkah singkat</span>}
              <span>{solutionStep + 1} / 3</span>
            </div>
          </div>}
          {solutionComplete && solutionRecommendation && <div className="solution-result" aria-live="polite">
            <div className="solution-result-heading"><div><span>YOUR PRODUCT MATCH</span><h3>Pilihan yang layak Anda pertimbangkan: <em>{solutionRecommendation.title}.</em></h3><p>{solutionRecommendation.description}</p></div><button type="button" className="solution-reset" onClick={()=>{setSolutionAnswers({focus:"",place:"",scale:""});setSolutionStep(0);}}>Ulangi <span>↻</span></button></div>
            <div className="solution-context"><span>Penggunaan: <b>{solutionAnswers.place}</b></span><span>Skala: <b>{solutionAnswers.scale === "small" ? "Kecil" : solutionAnswers.scale === "medium" ? "Sedang" : "Luas"}</b></span></div>
            <div className="solution-products">{recommendedProducts.slice(0,3).map(product=><article className="solution-product" key={product.model}><div className="solution-product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 70vw, 180px" /></div><span>{product.model}</span><b>{product.name}</b><p>{product.detail}</p><button type="button" className="solution-product-select" onClick={()=>openRegister(product.name+" ("+product.model+")")}>Pilih produk ini <span>↗</span></button></article>)}</div>
            <p className="solution-note">Rekomendasi ini merupakan penyaringan awal berdasarkan jawaban dan spesifikasi yang dipublikasikan Coway. Untuk water purifier, pilihan kapasitas tetap perlu disesuaikan dengan pola konsumsi. Untuk air purifier, cocokkan kembali luas ruangan aktual. Kondisi sumber air dan instalasi POE-23A juga perlu diperiksa. Spesifikasi dapat berubah mengikuti informasi resmi.</p>
            {solutionAnswers.focus === "softener" && <p className="solution-note solution-warning">Penting: Yonsu adalah water softener untuk kebutuhan mandi/perawatan tubuh. Air keluarannya tidak untuk diminum atau memasak.</p>}
            <button type="button" className="button button-dark solution-consult" onClick={()=>openRegister(recommendedProducts.map(p=>p.name+" ("+p.model+")").join(", "))}>Konsultasikan rekomendasi <Arrow /></button>
          </div>}
        </div>
      </section>
      <section className="section technology-section" id="teknologi">
        <div className="section-kicker light-kicker">02 / HOW IT WORKS</div>
        <div className="tech-heading"><div><h2>Jernih di mata.<br /><em>Dirancang lebih jauh.</em></h2></div><p>Kualitas air tidak hanya tentang tampilannya. Sumber air, proses filtrasi, teknologi pemurnian, dan perawatan sistem merupakan hal yang perlu dipertimbangkan.</p></div>
        <div className="water-flow"><div className="water-line" />{[{n:"01",t:"Sumber air",d:"Kenali kondisi dan sumber air di lokasi Anda."},{n:"02",t:"Proses filtrasi",d:"Tahapan penyaringan sesuai sistem pada model."},{n:"03",t:"Pemurnian",d:"Teknologi pemurnian yang dirancang pada unit."},{n:"04",t:"Perawatan",d:"Perawatan mengikuti jadwal dan paket layanan."}].map(x=><article className="flow-card" key={x.n}><span>{x.n}</span><div className="flow-symbol">{x.n==="01"?"◉":x.n==="02"?"⌁":x.n==="03"?"✳":"↻"}</div><h3>{x.t}</h3><p>{x.d}</p></article>)}</div>
        <p className="disclaimer dark-disclaimer">Jenis filter, jumlah tahapan, dan kemampuan filtrasi dapat berbeda pada setiap model. Detail teknis mengikuti spesifikasi resmi produk.</p>
      </section>

      <section className="section calculator-section">
        <div className="calc-copy"><div className="section-kicker">03 / LET’S DO THE MATH</div><h2>Hitung kebutuhan galon <em>di rumah Anda.</em></h2><p>Gunakan kalkulator sederhana ini untuk memperkirakan jumlah galon dan pengeluaran bulanan berdasarkan kebiasaan keluarga.</p><div className="calc-note">Simulasi ini hanya estimasi biaya galon, bukan perbandingan harga atau jaminan penghematan produk Coway.</div></div>
        <div className="calculator">
          <div className="calc-field"><label htmlFor="people">Jumlah anggota keluarga</label><div className="stepper"><button type="button" onClick={()=>setPeople(Math.max(1,people-1))} aria-label="Kurangi anggota">−</button><strong>{people} <small>orang</small></strong><button type="button" onClick={()=>setPeople(Math.min(20,people+1))} aria-label="Tambah anggota">+</button></div></div>
          <div className="calc-field"><label htmlFor="litres">Konsumsi per orang / hari</label><div className="stepper"><button type="button" onClick={()=>setLitres(Math.max(1,litres-.5))} aria-label="Kurangi konsumsi">−</button><strong>{litres.toLocaleString("id-ID")} <small>liter</small></strong><button type="button" onClick={()=>setLitres(Math.min(5,litres+.5))} aria-label="Tambah konsumsi">+</button></div></div>
          <div className="calc-field"><label htmlFor="price">Harga satu galon isi ulang</label><div className="price-input"><span>Rp</span><input id="price" type="number" min="0" step="1000" value={gallonPrice} onChange={e=>setGallonPrice(Math.max(0,Number(e.target.value)))} /></div></div>
          <div className="calc-result"><span>ESTIMASI KEBUTUHAN / BULAN</span><strong>{monthlyGallons} <small>galon</small></strong><div><span>Perkiraan biaya bulanan</span><b>Rp {monthlyCost.toLocaleString("id-ID")}</b></div><small className="result-foot">Asumsi 19 liter per galon dan 30 hari per bulan.</small></div>
          <button type="button" className="button button-light full-button" onClick={()=>openRegister()}>Diskusikan kebutuhan air <Arrow /></button>
        </div>
      </section>

      <section className="section service-section" id="layanan">
        <div className="section-kicker">04 / BEYOND THE PRODUCT</div>
        <div className="service-heading"><h2>Bukan hanya memiliki unit.<br /><em>Perawatan juga penting.</em></h2><p>Memilih water purifier juga berarti memahami cara merawatnya. Tanyakan detail dukungan layanan yang menyertai model dan skema pembelian pilihan Anda.</p></div>
        <div className="service-steps">
          <article><span>01</span><div className="service-icon">⌕</div><h3>Konsultasi kebutuhan</h3><p>Diskusikan sumber air, jumlah pengguna, dan ruang pemasangan.</p></article>
          <article><span>02</span><div className="service-icon">▤</div><h3>Pilihan produk</h3><p>Pelajari fitur, spesifikasi, harga, dan skema pembayaran.</p></article>
          <article><span>03</span><div className="service-icon">⌂</div><h3>Instalasi</h3><p>Konfirmasi ketersediaan pengantaran dan instalasi di lokasi Anda.</p></article>
          <article><span>04</span><div className="service-icon">↻</div><h3>Perawatan berkala</h3><p>Pahami jadwal servis dan penggantian filter dalam paket.</p></article>
        </div>
      </section>

      <section className="section payment-section">
        <div className="section-kicker">05 / OWNERSHIP OPTIONS</div><div className="payment-heading"><h2>Pilih skema yang<br /><em>sesuai rencana Anda.</em></h2><p>Pelajari pilihan kepemilikan yang tersedia. Harga, tenor, cakupan layanan, dan ketentuan dapat berubah mengikuti program resmi yang berlaku.</p></div>
        <div className="payment-grid"><article><span>OPTION 01</span><div className="payment-icon">↗</div><h3>Cicilan</h3><p>Opsi pembayaran bertahap dengan pilihan tenor sesuai program yang tersedia.</p><button type="button" onClick={()=>openRegister()}>Tanya simulasi <Arrow /></button></article><article className="payment-featured"><span>OPTION 02 · FLEXIBLE</span><div className="payment-icon">◈</div><h3>Pembayaran penuh</h3><p>Pembayaran satu kali di awal. Tanyakan detail paket layanan yang menyertai pembelian.</p><button type="button" onClick={()=>openRegister()}>Tanya detail <Arrow /></button></article><article><span>OPTION 03</span><div className="payment-icon">＋</div><h3>Produk saja</h3><p>Pilihan unit tanpa paket layanan tertentu, jika tersedia pada model terkait.</p><button type="button" onClick={()=>openRegister()}>Tanya ketersediaan <Arrow /></button></article></div>
      </section>

      <section className="section area-section"><div><div className="section-kicker">06 / OUR SERVICE AREA</div><h2>Konsultasi Coway<br /><em>di Jabodetabek.</em></h2></div><div className="area-content"><p>Mencari water purifier Coway di Tangerang atau kota sekitarnya? Sampaikan lokasi Anda untuk memeriksa ketersediaan konsultasi, pengantaran, dan instalasi.</p><div className="area-tags">{areas.map(area=><span key={area}>{area}</span>)}</div></div></section>

      <section className="section testimonials-section">
        <div className="testimonials-topline"><div className="section-kicker">07 / ULASAN PELANGGAN</div></div>
        <div className="testimonials-heading"><h2>Senang punya Coway,<br /><em>nyaman tiap hari.</em></h2></div>
        <div className="testimonial-carousel-shell">
          <div className="testimonial-carousel-controls"><div><button type="button" aria-label="Geser ulasan ke kiri" onClick={()=>document.getElementById("testimonial-track")?.scrollBy({left:-340,behavior:"smooth"})}>←</button><button type="button" aria-label="Geser ulasan ke kanan" onClick={()=>document.getElementById("testimonial-track")?.scrollBy({left:340,behavior:"smooth"})}>→</button></div></div>
          <div className="testimonial-carousel" id="testimonial-track">
            {[
              {name:"Nadia P.",city:"Tangerang Selatan",product:"OMBAK",initial:"N",tone:"sage",quote:"Sejak pakai Coway Ombak, urusan air minum di rumah jadi jauh lebih praktis. Anak-anak juga gampang ambil air sendiri."},
              {name:"Budi S.",city:"BSD City",product:"NEO PLUS",initial:"B",tone:"sand",quote:"Neo Plus ini kepake banget di rumah. Mau air panas atau dingin tinggal pencet, nggak perlu ribet masak air lagi."},
              {name:"Rina A.",city:"Jakarta Selatan",product:"NOBLE 2",initial:"R",tone:"rose",quote:"Awalnya fokus cari air purifier buat kamar. Setelah pakai Noble 2, rasanya lebih tenang pas lagi istirahat."},
              {name:"Dimas K.",city:"Gading Serpong",product:"STORM",initial:"D",tone:"blue",quote:"Storm jadi andalan di ruang keluarga. Desainnya juga cakep, jadi nggak ganggu interior rumah."},
              {name:"Maya L.",city:"Alam Sutera",product:"POE-23A",initial:"M",tone:"lavender",quote:"Senang akhirnya bisa konsultasi dulu soal kondisi air rumah. Jadi lebih paham filter yang memang dibutuhkan."},
              {name:"Andi R.",city:"Karawaci",product:"VILLAEM III",initial:"A",tone:"olive",quote:"Villaem III cocok buat kebutuhan keluarga kami. Pilihan airnya praktis dan tampilannya juga kelihatan rapi."},
              {name:"Siska W.",city:"Bintaro",product:"YONSU",initial:"S",tone:"peach",quote:"Paling suka karena kebutuhan air di rumah jadi lebih diperhatikan. Proses konsultasinya juga enak, dijelasin pelan-pelan."},
              {name:"Fajar M.",city:"Jakarta Barat",product:"SQUAREBIG",initial:"F",tone:"slate",quote:"Pakai Squarebig buat area yang cukup luas. Suka karena bentuknya simpel dan nggak kelihatan bulky."},
              {name:"Tari N.",city:"Ciputat",product:"CINNAMON",initial:"T",tone:"mint",quote:"Cinnamon bikin rutinitas ambil air jadi gampang. Apalagi kalau lagi buru-buru pagi, tinggal pilih sesuai kebutuhan."},
              {name:"Rizky H.",city:"Bekasi",product:"NEXT STORM",initial:"R",tone:"clay",quote:"Next Storm jadi salah satu upgrade rumah yang paling kerasa manfaatnya. Overall puas, semoga awet terus!"}
            ].map((item,index)=><article className="testimonial-card" key={item.name}>
              <div className="testimonial-card-top"><span className="testimonial-index">0{index+1}</span><span className="testimonial-type">{item.product}</span></div>
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-person"><div className={"testimonial-avatar avatar-"+item.tone} aria-hidden="true">{item.initial}</div><div className="testimonial-person-info"><b>{item.name}</b><span>{item.city}</span></div></div>
            </article>)}
          </div>
        </div>
        <p className="testimonials-disclaimer">Konten ulasan ini merupakan materi ilustratif, bukan testimoni pelanggan terverifikasi.</p>
      </section>

      <section className="section faq-section" id="faq"><div className="faq-intro"><div className="section-kicker">08 / GOOD TO KNOW</div><h2>Ada yang ingin<br /><em>Anda tanyakan?</em></h2><p>Temukan jawaban awal sebelum berkonsultasi dengan tim kami.</p><button type="button" className="under-link" onClick={()=>openRegister()}>Tanyakan langsung <Arrow /></button></div><div className="faq-list">{faqs.map((faq,i)=><article className={openFaq===i?"faq-item active":"faq-item"} key={faq.q}><button type="button" onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>0{i+1}</span><b>{faq.q}</b><i>{openFaq===i?"−":"+"}</i></button>{openFaq===i&&<p>{faq.a}</p>}</article>)}</div></section>

      <section className="contact-section" id="konsultasi"><div className="contact-deco">C</div><div className="contact-copy"><div className="section-kicker light-kicker">09 / YOUR NEXT STEP</div><h2>Air yang Anda pilih,<br /><em>dimulai dari percakapan.</em></h2><p>Ceritakan kebutuhan rumah atau tempat kerja Anda. Kami bantu jelaskan pilihan produk, fitur, serta skema yang relevan—tanpa tekanan untuk membeli.</p><div className="contact-location"><span>⌖</span> Melayani konsultasi Jabodetabek</div></div><form className="lead-form" onSubmit={submitLead}><div className="form-heading"><span>LET’S TALK</span><h3>Konsultasi gratis</h3><p>Isi detail singkat berikut untuk memulai.</p></div><label>Nama lengkap<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama Anda" autoComplete="name" /></label><label>Nomor WhatsApp<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="08xxxxxxxxxx" autoComplete="tel" /></label><div className="form-row"><label>Kebutuhan<select value={form.need} onChange={e=>setForm({...form,need:e.target.value})}><option>Rumah</option><option>Kantor</option><option>Bisnis</option></select></label><label>Jumlah pengguna<input value={form.users} onChange={e=>setForm({...form,users:e.target.value})} placeholder="Contoh: 4 orang" /></label></div><label>Kota / area<input required value={form.city} onChange={e=>setForm({...form,city:e.target.value})} placeholder="Contoh: BSD, Tangerang" /></label><label>Produk yang diminati <small>(opsional)</small><input value={form.product} onChange={e=>setForm({...form,product:e.target.value})} placeholder="Belum tahu juga tidak apa-apa" /></label><button className="button button-dark full-button" type="submit">Lanjutkan via WhatsApp <Arrow /></button>{notice&&<p className="form-notice" role="status">{notice}</p>}<p className="form-privacy">Dengan mengirim formulir, Anda menyetujui data ini digunakan untuk menindaklanjuti permintaan konsultasi Anda.</p></form></section>


      {registerOpen && <div className="register-modal-backdrop" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setRegisterOpen(false);}}>
        <section className="register-modal" role="dialog" aria-modal="true" aria-labelledby="register-modal-title">
          <button type="button" className="register-modal-close" aria-label="Tutup formulir" onClick={()=>setRegisterOpen(false)}>×</button>
          <div className="register-modal-kicker">COWAY · PERSONAL CONSULTATION</div>
          <h2 id="register-modal-title">Mulai dari kebutuhan<br /><em>Anda.</em></h2>
          <p className="register-modal-intro">Tinggalkan kontak Anda. Detail pilihan produk akan ikut terkirim ke WhatsApp konsultan.</p>
          <div className="register-selected-product"><span>PRODUK YANG DIPILIH</span><b>{registerProduct}</b></div>
          <form className="register-modal-form" onSubmit={submitRegister}>
            <label>Nama lengkap<input required value={registerData.name} onChange={event=>setRegisterData({...registerData,name:event.target.value})} placeholder="Nama Anda" autoComplete="name" /></label>
            <label>Nomor WhatsApp<input required type="tel" value={registerData.phone} onChange={event=>setRegisterData({...registerData,phone:event.target.value})} placeholder="08xxxxxxxxxx" autoComplete="tel" /></label>
            <label>Kota / area<input required value={registerData.city} onChange={event=>setRegisterData({...registerData,city:event.target.value})} placeholder="Contoh: BSD, Tangerang" autoComplete="address-level2" /></label>
            <button className="button button-dark full-button" type="submit">Kirim pendaftaran via WhatsApp <Arrow /></button>{notice && <p className="form-notice" role="status">{notice}</p>}
          </form>
          <p className="register-modal-privacy">Dengan melanjutkan, Anda menyetujui data kontak digunakan untuk menindaklanjuti permintaan konsultasi.</p>
        </section>
      </div>}
      <footer className="footer"><a className="brand footer-brand" href="#"><Image className="brand-logo" src="/coway.png" alt="Coway" width={132} height={42} /></a><p>Informasi dan konsultasi produk Coway untuk area Jabodetabek.</p><div className="footer-links"><a href="#solusi">Solusi</a><a href="#teknologi">Teknologi</a><a href="#layanan">Layanan</a><a href="#faq">FAQ</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Coway Tangerang</span><span>Sales consultation · Jabodetabek</span></div><p className="footer-disclaimer">Halaman konsultasi penjualan independen. Bukan situs resmi Coway Indonesia. Merek dan produk Coway merupakan milik pemegang hak masing-masing. Spesifikasi, harga, program, dan layanan mengikuti informasi resmi yang berlaku.</p></footer>
      <button className="floating-wa" type="button" aria-label="Buka formulir konsultasi Coway" onClick={()=>openRegister()}><span>↗</span><b>Konsultasi</b></button>
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
