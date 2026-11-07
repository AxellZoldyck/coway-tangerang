import Image from "next/image";
import Link from "next/link";

type Product = { name: string; model: string; note: string; image?: string };
type CategoryPageProps = {
  number: string; eyebrow: string; title: string; accent: string;
  intro: string; detailTitle: string; detail: string;
  image: string; products: Product[];
};

export default function CategoryPage({ number, eyebrow, title, accent, intro, detailTitle, detail, image, products }: CategoryPageProps) {
  return (
    <main className="catalog-page">
      <header className="catalog-top"><Link href="/" className="catalog-back">← Kembali ke beranda</Link><span>COWAY / PRODUCT COLLECTION</span></header>
      <section className="catalog-hero">
        <div className="catalog-hero-image"><Image src={image} alt={title} fill priority sizes="100vw" /></div>
        <div className="catalog-hero-overlay" />
        <div className="catalog-hero-content"><span>{number} / {eyebrow}</span><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><a className="button button-light" href="/#konsultasi">Konsultasikan kebutuhan ↗</a></div>
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
                <Image src={product.image} alt={`${product.name} Coway water purifier`} fill sizes="(max-width: 480px) 90vw, (max-width: 800px) 44vw, 30vw" />
              </div>
            ) : <div className="catalog-product-mark">C<span>·</span></div>}
            <div className="catalog-product-copy"><span>{product.model}</span><h3>{product.name}</h3><p>{product.note}</p><a href="/#konsultasi" aria-label={`Konsultasi produk ${product.name}`}>Tanya produk <b>↗</b></a></div>
          </article>)}
        </div>
        <p className="catalog-disclaimer">Nama model dan ketersediaan produk mengikuti katalog Coway Indonesia dan dapat berubah. Hubungi konsultan untuk memastikan varian, spesifikasi, harga, serta program layanan terbaru.</p>
      </section>
      <section className="catalog-cta"><span>LET’S FIND YOUR MATCH</span><h2>Masih bingung memilih<br /><em>yang paling sesuai?</em></h2><p>Ceritakan kebutuhan ruang dan penggunaan Anda. Kami bantu jelaskan pilihan produk yang relevan.</p><a className="button button-light" href="/#konsultasi">Mulai konsultasi ↗</a></section>
      <footer className="catalog-footer"><Link href="/">← Coway Tangerang</Link><span>Informasi konsultasi penjualan independen · Bukan situs resmi Coway Indonesia.</span></footer>
    </main>
  );
}
