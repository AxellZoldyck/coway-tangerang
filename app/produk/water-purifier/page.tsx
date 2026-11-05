import CategoryPage from "../CategoryPage";
export default function WaterPurifierPage() {
  return <CategoryPage number="01" eyebrow="WATER" title="Water" accent="Purifier." intro="Pilihan pemurni air minum Coway untuk membantu menghadirkan akses air minum yang praktis di rumah maupun tempat kerja." detailTitle="Air minum, lebih dekat dengan keseharian." detail="Setiap model memiliki desain, sistem filtrasi, kapasitas, serta fitur yang berbeda. Mulai dari unit meja hingga floor standing, pilihan dapat disesuaikan dengan jumlah pengguna, kebutuhan suhu air, dan ruang pemasangan." image="/waterpurifier.jpg" products={[
    {model:"CHP-7310R",name:"Ombak",note:"Water purifier dengan pilihan pengaturan suhu dan volume air."},
    {model:"CHP-18AR",name:"Villaem II",note:"Pilihan water purifier untuk kebutuhan air minum sehari-hari."},
    {model:"CHP-264L",name:"Neo Plus",note:"Unit ringkas dengan pilihan air panas, dingin, dan normal."},
    {model:"P-6320R",name:"Cinnamon",note:"Pilihan pemurni air dalam lini water purifier Coway."},
    {model:"CHPI-7520L",name:"Coway Kristal Ice",note:"Kombinasi water purifier dan pembuat es dalam satu unit."},
    {model:"CHP-7320R",name:"Villaem III",note:"Water purifier untuk kebutuhan air minum keluarga."},
    {model:"CHP-671R",name:"Core",note:"Pilihan unit floor standing dalam lini water purifier."},
    {model:"CHP-5730R",name:"Slim Stand",note:"Desain floor standing untuk penggunaan sehari-hari."}
  ]} />;
}