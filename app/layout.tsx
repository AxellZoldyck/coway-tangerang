import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Coway Tangerang & Jabodetabek | Water Purifier untuk Rumah dan Kantor",
    template: "%s | Coway Tangerang",
  },
  description:
    "Konsultasi water purifier Coway untuk rumah, kantor, dan bisnis di Tangerang, Jakarta, Bogor, Depok, dan Bekasi. Temukan pilihan produk, skema pembayaran, serta informasi layanan dan perawatan.",
  keywords: [
    "Coway Tangerang",
    "water purifier Tangerang",
    "jual Coway Tangerang",
    "Coway Jabodetabek",
    "water purifier Jakarta",
    "water purifier Bogor",
    "water purifier Depok",
    "water purifier Bekasi",
    "pemurni air rumah",
    "filter air minum",
    "konsultasi Coway",
  ],
  applicationName: "Coway Tangerang",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Coway Tangerang & Jabodetabek | Air Minum Lebih Praktis",
    description:
      "Temukan solusi water purifier Coway untuk rumah, kantor, dan bisnis. Konsultasi kebutuhan Anda di area Jabodetabek.",
    siteName: "Coway Tangerang",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coway Tangerang & Jabodetabek",
    description: "Konsultasi water purifier Coway untuk rumah, kantor, dan bisnis.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
