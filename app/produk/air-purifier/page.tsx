import CategoryPage from "../CategoryPage";
export default function AirPurifierPage() {
  return <CategoryPage number="02" eyebrow="AIR" title="Air" accent="Purifier." intro="Jelajahi pilihan pemurni udara Coway untuk membantu menjaga kualitas udara di dalam ruang aktivitas Anda." detailTitle="Ruang nyaman dimulai dari udara." detail="Kebutuhan pemurnian udara dapat berbeda berdasarkan luas ruangan, aktivitas, dan kondisi lingkungan. Perhatikan area cakupan serta sistem filter setiap model sebelum menentukan pilihan." image="/airpurifier.jpg" products={[
    {model:"AP-1516D",name:"Storm",note:"Air purifier dengan sistem filtrasi untuk udara dalam ruangan."},
    {model:"AP-2025A",name:"Next Storm",note:"Pilihan air purifier dalam lini produk Coway."},
    {model:"AP-1019C",name:"Cartridge",note:"Model air purifier untuk kebutuhan pemurnian udara."},
    {model:"AP-2023K",name:"Noble 2",note:"Pilihan pemurni udara dalam lini premium Coway."},
    {model:"AP-1125G",name:"Squarefit",note:"Desain minimalis untuk ruang dengan kebutuhan pemurnian udara."},
    {model:"AP-2425H",name:"Squarebig",note:"Pilihan air purifier untuk kebutuhan ruang yang lebih luas."}
  ]} />;
}