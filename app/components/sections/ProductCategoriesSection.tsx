import Image from "next/image";
export default function ProductCategoriesSection() {
  return (
    <section className="category-section" id="produk">
            <div className="category-heading">
              <div><div className="section-kicker">COWAY PRODUCT COLLECTION</div><h2>Solusi untuk Kualitas<br /><em>Hidup yang Lebih Baik.</em></h2></div>
              <p>Setiap ruang memiliki kebutuhan yang berbeda. Kenali tiga kategori produk Coway—pemurni air minum, pemurni udara, dan sistem penyaringan air—lalu temukan pilihan yang paling sesuai untuk rumah maupun tempat kerja Anda.</p>
            </div>
            <div className="category-grid">
              <a className="category-card category-water" href="/produk/water-purifier">
                <div className="category-image"><Image src="/waterpurifier.jpg" alt="Kategori Water Purifier Coway" fill sizes="(max-width: 640px) 100vw, 50vw" /></div>
                <div className="category-shade" /><span className="category-number">01 / WATER</span><div className="category-card-copy"><span>PURE DRINKING WATER</span><h3>Water<br /><em>Purifier.</em></h3><p>Solusi air minum untuk rutinitas yang lebih praktis.</p><b className="category-arrow">↗</b></div>
                <span className="category-orbit" />
              </a>
              <a className="category-card category-air" href="/produk/air-purifier">
                <div className="category-image"><Image src="/storm1.png" alt="Kategori Air Purifier Coway" fill sizes="(max-width: 640px) 100vw, 50vw" /></div>
                <div className="category-shade" /><span className="category-number">02 / AIR</span><div className="category-card-copy"><span>FRESHER INDOOR AIR</span><h3>Air<br /><em>Purifier.</em></h3><p>Kenali pilihan pemurni udara untuk ruang Anda.</p><b className="category-arrow">↗</b></div>
                <span className="category-orbit" />
              </a>
              <a className="category-card category-filter" href="/produk/water-filter">
                <div className="category-image"><Image src="/waterfilter.jpg" alt="Kategori Water Filter Coway" fill sizes="(max-width: 640px) 100vw, 50vw" /></div>
                <div className="category-shade" /><span className="category-number">03 / FILTRATION</span><div className="category-card-copy"><span>WATER FILTRATION SYSTEM</span><h3>Water<br /><em>Filter.</em></h3><p>Penyaringan air sesuai kondisi dan kebutuhan penggunaan.</p><b className="category-arrow">↗</b></div>
                <span className="category-orbit" />
              </a>
            </div>
            <div className="category-footnote"><span>WATER PURIFICATION</span><span>INDOOR AIR</span><span>WATER FILTRATION</span></div>
          </section>
  );
}
