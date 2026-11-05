# Coway Tangerang

Landing page konsultasi penjualan water purifier Coway untuk area Tangerang dan Jabodetabek.

## Development

```bash
npm install
npm run dev
```

## Environment

Set nomor WhatsApp sales (format internasional tanpa tanda plus, contoh format: 62xxxxxxxxxx) pada environment deployment:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

Jika nomor belum diatur, CTA akan mengarahkan pengunjung ke formulir konsultasi, bukan membuka nomor yang tidak valid.

## SEO checklist

- Metadata berbahasa Indonesia, title, description, Open Graph, dan Twitter cards.
- Semantic headings, section anchors, FAQ content, dan JSON-LD WebSite + FAQPage.
- Robots file dan sitemap route perlu dipublikasikan bersama domain produksi.
- Tambahkan domain produksi sebagai metadataBase/canonical setelah domain final ditentukan.
- Tambahkan foto produk resmi, logo yang diizinkan, favicon, dan gambar Open Graph setelah aset tersedia.
- Verifikasi Search Console, sitemap, Core Web Vitals, dan halaman pada mobile setelah deployment.

## Catatan konten

Halaman ini merupakan halaman konsultasi penjualan independen, bukan situs resmi Coway Indonesia. Informasi harga, model, fitur, sertifikasi, cakupan instalasi, dan program perawatan harus dikonfirmasi dengan price list serta ketentuan resmi terbaru sebelum dipublikasikan.
