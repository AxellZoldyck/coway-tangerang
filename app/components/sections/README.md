# Struktur aplikasi

```
app/
  components/
    sections/
      HeroSection.tsx
      TrustStrip.tsx
      AwardsSection.tsx
      ProductCategoriesSection.tsx
  produk/
    air-purifier/page.tsx
    water-filter/page.tsx
    water-purifier/page.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  cowayhero.jpg
  coway.png
  waterpurifier/
  airpurifier/
  waterfilter/
```

## Aturan

- Setiap section homepage memiliki satu file komponen sendiri di `app/components/sections/`.
- CSS tetap terpusat di `app/globals.css`; gunakan prefix class per section agar selector tidak bertabrakan.
- `app/page.tsx` mengatur state, data, dan menyusun urutan section. Jika section membutuhkan state atau aksi, teruskan melalui props.
- Halaman katalog kategori tetap berada di `app/produk/`.
- Aset statis tetap berada di `public/`.
