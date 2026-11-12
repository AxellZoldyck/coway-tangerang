# Struktur komponen

Homepage dirapikan bertahap agar bagian yang sering direvisi tidak menumpuk di satu file.

## Struktur saat ini

```
app/
  components/
    sections/
      HeroSection.tsx
      HeroSection.module.css
  produk/
    CategoryPage.tsx
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

## Aturan pemisahan

- `components/sections/`: satu komponen untuk setiap section homepage (Hero, Awards, Produk, Solusi, dan seterusnya).
- CSS khusus section ditempatkan dalam CSS Module di samping komponen agar styling tidak saling menimpa.
- `globals.css`: hanya reset, token warna/font, header/footer, dan style lintas halaman. Pindahkan style section ke CSS Module ketika section tersebut diekstrak.
- `produk/`: halaman katalog per kategori.
- `public/`: aset gambar dan file statis; pertahankan nama/path aset yang sudah dipakai.

## Revisi berikutnya

Saat memisahkan section lain dari `app/page.tsx`, pindahkan JSX beserta state/handler yang memang dimiliki section tersebut. Jangan memindahkan state global (misalnya modal konsultasi) tanpa meneruskan callback/props agar alur formulir tetap bekerja.
