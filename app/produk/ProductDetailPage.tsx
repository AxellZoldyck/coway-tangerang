"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import type { ProductDetail } from "./products";

export default function ProductDetailPage({ product }: { product: ProductDetail }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "" });
  const [paymentPlan, setPaymentPlan] = useState("60");
  const [downPayment, setDownPayment] = useState("");
  const whatsapp = "6283193123626";
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = ["Halo, saya ingin konsultasi produk Coway.", "Produk: " + product.name + " (" + product.model + ")", "Nama: " + form.name, "WhatsApp: " + form.phone, "Kota / area: " + form.city].join("\n");
    window.open("https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
    setRegisterOpen(false);
  }
  return (
    <main className="product-detail-page">
      <header className="product-detail-nav">
        <Link href="/" className="product-detail-brand"><Image src="/coway.png" alt="Coway" width={105} height={34} /></Link>
        <div><Link href="/">Beranda</Link><span>/</span><Link href={product.category === "Water Purifier" ? "/produk/water-purifier" : product.category === "Air Purifier" ? "/produk/air-purifier" : "/produk/water-filter"}>{product.category}</Link></div>
        <button type="button" onClick={() => setRegisterOpen(true)}>Konsultasi <span>↗</span></button>
      </header>

      <section className="product-detail-hero">
        <div className="product-detail-copy">
          <span className="product-detail-kicker">{product.category.toUpperCase()} <i>·</i> {product.model}</span>
          <h1>{product.name}<em>{product.tagline}</em></h1>
          <p>{product.description}</p>
          <div className="product-detail-actions"><button type="button" onClick={() => setRegisterOpen(true)}>Tanya produk <span>↗</span></button><a href="#spesifikasi">Lihat spesifikasi ↓</a></div>
        </div>
        <div className="product-detail-visual"><div className="product-detail-orbit" /><Image src={product.image} alt={product.name + " " + product.model} fill priority sizes="(max-width: 800px) 90vw, 52vw" /></div>
        <span className="product-detail-index">COWAY · PRODUCT DETAIL</span>
      </section>

      <section className="product-detail-highlights">
        <div className="product-detail-section-head"><span>01 / PRODUCT FEATURES</span><h2>Dirancang untuk<br /><em>kebutuhan sehari-hari.</em></h2></div>
        <div className="product-highlight-grid">{product.highlights.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </section>

      {product.filterInfo && <section className="product-filter-info"><span>FILTRATION TECHNOLOGY</span><h2>Teknologi di balik<br /><em>setiap proses.</em></h2><p>{product.filterInfo}</p></section>}

      <section className="product-spec-section" id="spesifikasi">
        <div className="product-detail-section-head"><span>02 / TECHNICAL INFORMATION</span><h2>Spesifikasi <em>produk.</em></h2><p>Informasi teknis berdasarkan katalog resmi Coway Indonesia.</p></div>
        <div className="product-spec-table">{product.specs.map((spec) => <div className="product-spec-row" key={spec.label}><span>{spec.label}</span><b>{spec.value}</b></div>)}</div>
        <p className="product-spec-note">Spesifikasi dapat berubah mengikuti pembaruan katalog. Konfirmasi detail model, warna, dan ketersediaan sebelum pemesanan.</p>
      </section>

      {product.pricing && <section className="product-pricing-section" id="harga">
        <div className="product-detail-section-head"><span>03 / PRODUCT & SERVICE PACKAGE</span><h2>Pilihan paket<br /><em>dan harga.</em></h2><p>Paket sudah termasuk perawatan dan penggantian filter selama periode layanan.</p></div>
        <div className="product-plan-grid">{product.pricing.plans.map((plan) => <article className="product-plan-card" key={plan.label}><span>{plan.label}</span><strong>{plan.monthly}</strong><small>/bulan</small><p>{plan.service}</p><button type="button" onClick={() => setRegisterOpen(true)}>Tanya paket ini ↗</button></article>)}</div>
        <div className="product-price-summary"><div><span>HARGA PRODUK</span><strong>{product.pricing.productPrice}</strong></div><div><span>FILTER PACKAGE</span><strong>{product.pricing.filterPackage}</strong><small>Termasuk perawatan dan penggantian filter 1 tahun</small></div></div>
        <div className="product-payment-simulation">
          <div><span>PAYMENT INFORMATION</span><h3>Simulasi <em>pembayaran.</em></h3><p>Pilih periode pembayaran dan masukkan uang muka. Tim Coway akan mengonfirmasi nominal tagihan sesuai harga dan program yang sedang berlaku.</p></div>
          <div className="product-payment-options"><span>PILIH PAKET</span>
            <div className="payment-plan-choices">
              <button type="button" className={paymentPlan==="60"?"active":""} onClick={()=>setPaymentPlan("60")}><b>PAKET 60</b><small>60 Bulan</small></button>
              <button type="button" className={paymentPlan==="36"?"active":""} onClick={()=>setPaymentPlan("36")}><b>PAKET 36</b><small>36 Bulan</small></button>
              <button type="button" className={paymentPlan==="6"?"active":""} onClick={()=>setPaymentPlan("6")}><b>PAKET 6</b><small>6 Bulan</small></button>
              <button type="button" className={paymentPlan==="12"?"active":""} onClick={()=>setPaymentPlan("12")}><b>FILTER 12</b><small>12 Bulan</small></button>
            </div>
            <label className="payment-downpayment">JUMLAH DOWN PAYMENT<input inputMode="numeric" value={downPayment} onChange={(event)=>setDownPayment(event.target.value)} placeholder="Masukkan nominal DP" /></label>
            <div className="payment-estimate"><span>PAKET / PERIODE</span><b>{paymentPlan==="12"?"Filter 12 Bulan":paymentPlan+" Bulan"}</b><span>BIAYA TAGIHAN BULANAN</span><b>Konfirmasi dengan konsultan</b></div>
            <button type="button" onClick={() => setRegisterOpen(true)}>Minta simulasi pembayaran ↗</button>
          </div>
        </div>
        <p className="product-spec-note">Harga yang ditampilkan mengikuti data referensi katalog yang tersedia dan dapat berubah sewaktu-waktu. Konfirmasi harga, program, dan ketersediaan terbaru sebelum transaksi.</p>
      </section>}

      <section className="product-detail-cta"><span>LET’S FIND YOUR MATCH</span><h2>Ingin tahu apakah produk ini<br /><em>sesuai kebutuhan Anda?</em></h2><p>Konsultasikan kondisi ruang, jumlah pengguna, dan kebutuhan penggunaan bersama konsultan Coway.</p><button type="button" onClick={() => setRegisterOpen(true)}>Tanya produk ini <span>↗</span></button></section>

      <footer className="product-detail-footer"><Link href={product.category === "Water Purifier" ? "/produk/water-purifier" : product.category === "Air Purifier" ? "/produk/air-purifier" : "/produk/water-filter"}>← Kembali ke {product.category}</Link><a href={product.officialUrl} target="_blank" rel="noreferrer">Referensi katalog Coway Indonesia ↗</a></footer>

      {registerOpen && <div className="register-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setRegisterOpen(false); }}>
        <section className="register-modal product-register-modal" role="dialog" aria-modal="true" aria-labelledby="product-register-title">
          <button type="button" className="register-modal-close" aria-label="Tutup formulir" onClick={() => setRegisterOpen(false)}>×</button>
          <div className="register-modal-kicker">COWAY · PERSONAL CONSULTATION</div>
          <h2 id="product-register-title">Konsultasi <em>{product.name}.</em></h2>
          <p className="register-modal-intro">Tinggalkan kontak Anda. Detail produk akan ikut terkirim ke WhatsApp konsultan.</p>
          <div className="register-selected-product"><span>PRODUK YANG DIPILIH</span><b>{product.name} · {product.model}</b></div>
          <form className="register-modal-form" onSubmit={submit}>
            <label>Nama lengkap<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Nama Anda" autoComplete="name" /></label>
            <label>Nomor WhatsApp<input required type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="08xxxxxxxxxx" autoComplete="tel" /></label>
            <label className="register-city-field">Kota / area<input required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} placeholder="Contoh: BSD, Tangerang" autoComplete="address-level2" /></label>
            <button className="button button-dark full-button register-submit" type="submit">Lanjutkan ke WhatsApp <span>↗</span></button>
          </form>
          <p className="register-modal-privacy">Data kontak digunakan untuk menindaklanjuti permintaan konsultasi Anda.</p>
        </section>
      </div>}
    </main>
  );
}
