"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

type Product = { name: string; model: string; note: string; image?: string };
type CategoryPageProps = {
  number: string; eyebrow: string; title: string; accent: string;
  intro: string; detailTitle: string; detail: string;
  image: string; products: Product[];
};

export default function CategoryPage({ number, eyebrow, title, accent, intro, detailTitle, detail, image, products }: CategoryPageProps) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Belum menentukan produk");
  const [registerData, setRegisterData] = useState({ name: "", phone: "", city: "" });
  const whatsappNumber = "6283193123626";
  function openRegister(product = "Konsultasi produk Coway") { setSelectedProduct(product); setRegisterOpen(true); }
  function submitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = ["Halo, saya ingin konsultasi produk Coway.", "Nama: " + registerData.name, "WhatsApp: " + registerData.phone, "Kota / area: " + registerData.city, "Kategori: " + title + " " + accent, "Produk pilihan: " + selectedProduct].join("\n");
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
    setRegisterOpen(false);
  }
  return (
    <main className="catalog-page">
      <header className="catalog-top"><Link href="/" className="catalog-back">← Kembali ke beranda</Link><span>COWAY / PRODUCT COLLECTION</span></header>
      <section className="catalog-hero">
        <div className="catalog-hero-image"><Image src={image} alt={title} fill priority sizes="100vw" /></div>
        <div className="catalog-hero-overlay" />
        <div className="catalog-hero-content"><span>{number} / {eyebrow}</span><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><button type="button" className="button button-light" onClick={()=>openRegister(title+" "+accent)}>Konsultasikan kebutuhan ↗</button></div>
        <div className="catalog-hero-index">COWAY · JABODETABEK</div>
      </section>
      <section className="catalog-detail">
        <div><span className="section-kicker">GET TO KNOW THE CATEGORY</span><h2>{detailTitle}</h2></div>
        <p>{detail}</p>
      </section>
      <section className="catalog-products">
        <div className="catalog-products-heading"><div><span className="section-kicker">PRODUCT LINEUP / {number}</span><h2>Jelajahi <em>produknya.</em></h2></div><span>{products.length.toString().padStart(2,"0")} PRODUCTS</span></div>
        <div className="catalog-product-grid">
          {products.map((product, index) => <article className={`catalog-product${product.image ? " has-image" : ""}`} key={product.model}>
            <div className="catalog-product-index">{String(index + 1).padStart(2,"0")} <span> / COWAY</span></div>
            {product.image ? (
              <div className="catalog-product-image">
                <Image src={product.image} alt={`Produk Coway ${product.name}`} fill sizes="(max-width: 480px) 90vw, (max-width: 800px) 44vw, 30vw" />
              </div>
            ) : <div className="catalog-product-mark">C<span>·</span></div>}
            <div className="catalog-product-copy"><span>{product.model}</span><h3>{product.name}</h3><p>{product.note}</p><button type="button" className="catalog-product-ask" onClick={()=>openRegister(product.name+" ("+product.model+")")} aria-label={`Konsultasi produk ${product.name}`}>Tanya produk <b>↗</b></button></div>
          </article>)}
        </div>
        <p className="catalog-disclaimer">Nama model dan ketersediaan produk mengikuti katalog Coway Indonesia dan dapat berubah. Hubungi konsultan untuk memastikan varian, spesifikasi, harga, serta program layanan terbaru.</p>
      </section>
      <section className="catalog-cta"><span>LET’S FIND YOUR MATCH</span><h2>Masih bingung memilih<br /><em>yang paling sesuai?</em></h2><p>Ceritakan kebutuhan ruang dan penggunaan Anda. Kami bantu jelaskan pilihan produk yang relevan.</p><button type="button" className="button button-light" onClick={()=>openRegister(title+" "+accent)}>Mulai konsultasi ↗</button></section>
      {registerOpen && <div className="register-modal-backdrop" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setRegisterOpen(false);}}>
        <section className="register-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-register-title">
          <button type="button" className="register-modal-close" aria-label="Tutup formulir" onClick={()=>setRegisterOpen(false)}>×</button>
          <div className="register-modal-kicker">COWAY · PERSONAL CONSULTATION</div>
          <h2 id="catalog-register-title">Mulai dari kebutuhan<br /><em>Anda.</em></h2>
          <p className="register-modal-intro">Isi kontak Anda. Pilihan produk akan otomatis dikirim ke konsultan melalui WhatsApp.</p>
          <div className="register-selected-product"><span>PRODUK YANG DIPILIH</span><b>{selectedProduct}</b></div>
          <form className="register-modal-form" onSubmit={submitRegister}>
            <label>Nama lengkap<input required value={registerData.name} onChange={event=>setRegisterData({...registerData,name:event.target.value})} placeholder="Nama Anda" autoComplete="name" /></label>
            <label>Nomor WhatsApp<input required type="tel" value={registerData.phone} onChange={event=>setRegisterData({...registerData,phone:event.target.value})} placeholder="08xxxxxxxxxx" autoComplete="tel" /></label>
            <label>Kota / area<input required value={registerData.city} onChange={event=>setRegisterData({...registerData,city:event.target.value})} placeholder="Contoh: BSD, Tangerang" autoComplete="address-level2" /></label>
            <button className="button button-dark full-button" type="submit">Kirim pendaftaran via WhatsApp <span aria-hidden="true">↗</span></button>
          </form>
          <p className="register-modal-privacy">Data kontak digunakan untuk menindaklanjuti permintaan konsultasi Anda.</p>
        </section>
      </div>}
      <footer className="catalog-footer"><Link href="/">← Coway Tangerang</Link><span>Informasi konsultasi penjualan independen · Bukan situs resmi Coway Indonesia.</span></footer>
    </main>
  );
}
