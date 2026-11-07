import CategoryPage from "../CategoryPage";
export default function WaterFilterPage() {
  return <CategoryPage number="03" eyebrow="FILTRATION" title="Water" accent="Filter." intro="Solusi penyaringan air Coway untuk membantu mendukung kebutuhan air bersih di rumah." detailTitle="Penyaringan dari sumber air." detail="Water filter dirancang untuk kebutuhan penyaringan air rumah tangga. Pilih sistem berdasarkan sumber air, tekanan air, lokasi pemasangan, dan kebutuhan penggunaan. Spesifikasi setiap model perlu dikonfirmasi sebelum instalasi." image="/waterfilter.jpg" products={[
    {model:"POE-23A",name:"POE-23A",note:"Filter air rumah tangga dengan teknologi membran ultrafiltrasi.",image:"/waterfilter/poe23a.png"},
    {model:"BB14-AID",name:"Yonsu",note:"Pilihan sistem water filter dalam katalog Coway Indonesia.",image:"/waterfilter/yonsu.png"}
  ]} />;
}