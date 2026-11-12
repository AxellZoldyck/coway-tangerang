export type ProductSpec = { label: string; value: string };
export type ProductDetail = {
  slug: string; category: "Water Purifier" | "Air Purifier" | "Water Filter";
  name: string; model: string; tagline: string; description: string; image: string;
  highlights: { title: string; text: string }[]; specs: ProductSpec[];
  officialUrl: string; filterInfo?: string;
};
export const products: ProductDetail[] = [
{
slug:"ombak",category:"Water Purifier",name:"Ombak",model:"CHP-7310R",tagline:"Smart Choice, Smart Beginning for Your Renewed Life",
description:"Water purifier dengan 50 kombinasi pengaturan suhu dan volume air. Dirancang untuk memberi keleluasaan saat menyiapkan air minum, mulai dari suhu dingin hingga panas.",
image:"/waterpurifier/ombak.png",highlights:[
{title:"50 kombinasi suhu & volume",text:"Atur kombinasi suhu dan takaran air sesuai kebutuhan harian."},
{title:"UV sterilization",text:"Fitur UV bekerja otomatis untuk air suhu dingin dan normal."},
{title:"Child safety lock",text:"Pengunci keamanan membantu mencegah keluarnya air panas tanpa sengaja."},
{title:"Sistem filtrasi multi-tahap",text:"Menggunakan Neo-Sense, RO Membrane, Plus Inno-Sense, dan Antibacterial Filter."}],
specs:[{label:"Laju aliran",value:"20 GPD"},{label:"Kapasitas filtrasi",value:"3,2 liter/jam"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan · Antibacterial 12 bulan"}],
filterInfo:"Neo-Sense membantu mengurangi partikel, klorin dan VOC; RO Membrane menyaring kontaminan terlarut; Plus Inno-Sense membantu mengurangi bau dan memperbaiki rasa; Antibacterial membantu mencegah pertumbuhan mikroorganisme di tangki.",
officialUrl:"https://www.coway.id/products/detail/ombak/1"
},
{
slug:"villaem-ii",category:"Water Purifier",name:"Villaem II",model:"CHP-18AR",tagline:"Lighten Your Water Life",
description:"Water purifier dengan empat pilihan suhu air—panas, hangat, dingin, dan normal—dalam desain sederhana dan kokoh untuk penggunaan sehari-hari.",
image:"/waterpurifier/villaem2.png",highlights:[
{title:"Empat pilihan suhu",text:"Pilih air panas, hangat, dingin, atau suhu ruang."},
{title:"Pengoperasian sederhana",text:"Dirancang agar mudah digunakan oleh berbagai usia."},
{title:"Keran mudah dilepas",text:"Komponen keran dapat dilepas untuk memudahkan pembersihan."},
{title:"Indikator level air",text:"Indikator memberi tanda saat level air di tangki bagian dalam rendah."}],
specs:[{label:"Sistem filtrasi",value:"Neo-Sense · RO Membrane · Plus Inno-Sense · Antibacterial"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan · Antibacterial 12 bulan"}],
officialUrl:"https://www.coway.id/products/detail/villaem_ii/2"
},
{
slug:"neo-plus",category:"Water Purifier",name:"Neo Plus",model:"CHP-264L",tagline:"Small in Size, Big in Function",
description:"Pemurni air berukuran ringkas dengan tiga pilihan suhu air: panas, dingin, dan normal. Cocok dipertimbangkan untuk area yang membutuhkan unit compact.",
image:"/waterpurifier/neoplus.png",highlights:[
{title:"Tiga suhu air",text:"Air panas, dingin, dan normal untuk kebutuhan harian."},
{title:"Eco mode",text:"Sensor cahaya membantu mengaktifkan mode hemat energi; Coway menyebut penghematan listrik hingga 20%."},
{title:"Tu as dua mode",text:"Tuas dapat ditekan untuk takaran tertentu atau ditarik untuk aliran terus-menerus."},
{title:"Child safety lock",text:"Pengaman air panas perlu ditekan sebelum air panas dapat dikeluarkan."}],
specs:[{label:"Kapasitas filtrasi",value:"3,2 liter/jam"},{label:"Kapasitas tangki total",value:"5,8 liter"},{label:"Dimensi",value:"260 × 505 × 500 mm"},{label:"Berat bersih",value:"18 kg"},{label:"Daya",value:"Pemanas 300 W; kompresor 0,7 A"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan · Antibacterial 12 bulan"}],
filterInfo:"Menggunakan rangkaian Neo-Sense, Reverse Osmosis (RO), Plus Inno-Sense, dan Antibacterial Filter.",
officialUrl:"https://www.coway.id/products/detail/neo_plus/11"
},
{
slug:"cinnamon",category:"Water Purifier",name:"Cinnamon",model:"P-6320R",tagline:"Si mungil untuk air tanpa batas",
description:"Pemurni air dengan desain minimalis dan konsumsi daya rendah. Cinnamon menyediakan air suhu normal dengan pilihan takaran digital.",
image:"/waterpurifier/cinnamon.png",highlights:[
{title:"Hemat energi 20 watt",text:"Konsumsi listrik yang tercantum pada spesifikasi resmi adalah 20 W."},
{title:"Takaran sekali sentuh",text:"Tombol digital menyediakan pilihan 250 ml, 500 ml, dan 1 liter."},
{title:"Desain ringkas",text:"Bodi minimalis dengan faucet tinggi untuk pengisian wadah."},
{title:"Filtrasi RO",text:"Rangkaian filter mencakup Neo-Sense, RO Membrane, Plus Inno-Sense, dan Antibacterial Filter."}],
specs:[{label:"Kapasitas filtrasi",value:"3,2 liter/jam"},{label:"Kapasitas tangki",value:"5 liter (normal)"},{label:"Konsumsi listrik",value:"20 W"},{label:"Dimensi",value:"200 × 400 × 405 mm"},{label:"Berat bersih",value:"6,5 kg"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan · Antibacterial 12 bulan"}],
officialUrl:"https://www.coway.id/products/detail/cinnamon/14"
},
{
slug:"coway-kristal-ice",category:"Water Purifier",name:"Coway Kristal Ice",model:"CHPI-7520L",tagline:"A Shape of Elegance in Every Cube",
description:"Perpaduan water purifier dan ice maker dalam satu unit. Menyediakan air panas, dingin, normal, serta es batu dengan desain elegan.",
image:"/waterpurifier/cowaycrystalice.png",highlights:[
{title:"Air dan es dalam satu unit",text:"Pilihan air panas, dingin, normal, serta produksi es batu."},
{title:"Dual UV sterilization",text:"Sistem UV terpisah untuk area tangki es dan faucet air."},
{title:"Es transparan",text:"Teknologi pembuat es berbahan stainless steel dirancang menghasilkan es sebening kristal."},
{title:"Pilihan warna",text:"Tersedia dalam Pebble Grey dan Porcelain White menurut katalog resmi."}],
specs:[{label:"Kapasitas filtrasi",value:"3,2 liter/jam"},{label:"Kapasitas es",value:"0,7 kg"},{label:"Kapasitas tangki air",value:"Total 5,1 liter"},{label:"Dimensi",value:"270 × 546 × 515 mm"},{label:"Berat bersih",value:"23,9 kg"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan"}],
officialUrl:"https://www.coway.id/products/detail/kristal_ice/16"
},
{
slug:"villaem-iii",category:"Water Purifier",name:"Villaem III",model:"CHP-7320R",tagline:"Smarter Than You Think",
description:"Water purifier dengan empat pilihan air dan layar digital. Menawarkan beberapa pilihan suhu panas dan hangat untuk menyesuaikan kebutuhan keluarga.",
image:"/waterpurifier/villaem3.png",highlights:[
{title:"Empat pilihan air",text:"Air normal, dingin, hangat, dan panas."},
{title:"Hot water hingga 95°C",text:"Pilihan suhu air panas yang disebutkan Coway mencakup 70°C, 80°C, dan 95°C."},
{title:"Kontrol layar sentuh",text:"Pengaturan air dapat dilakukan melalui layar sentuh."},
{title:"UV Care",text:"UV Care bekerja selama 3 jam setiap 12 jam saat penutup tangki bagian atas tertutup."}],
specs:[{label:"Kapasitas tangki total",value:"11,4 liter"},{label:"Dimensi",value:"310 × 523 × 520 mm"},{label:"Berat bersih",value:"20 kg"},{label:"Daya",value:"Pemanas 670 W; total tercantum 790 W"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan · Antibacterial 12 bulan"}],
officialUrl:"https://www.coway.id/products/detail/villaem_iii/17"
},
{
slug:"core",category:"Water Purifier",name:"Core",model:"CHP-671R",tagline:"Enhance Your Core Business",
description:"Water purifier floor standing dengan kapasitas tangki besar dan pengoperasian sederhana. Dilengkapi pilihan air normal dan dingin.",
image:"/waterpurifier/core.png",highlights:[
{title:"Kapasitas tangki besar",text:"Dirancang untuk kebutuhan penggunaan dengan volume air lebih besar."},
{title:"Sensor satu sentuhan",text:"Kontrol sederhana untuk penggunaan sehari-hari."},
{title:"Layar LED temperatur",text:"Menampilkan temperatur air secara langsung."},
{title:"Reverse Osmosis",text:"Sistem filtrasi RO dengan rangkaian beberapa tahap filter."}],
specs:[{label:"Laju aliran",value:"50 GPD"},{label:"Kapasitas filtrasi",value:"10,3 liter/jam"},{label:"Kapasitas tangki",value:"Normal 11,5 L · Dingin 6,0 L · Panas 3,6 L"},{label:"Dimensi",value:"370 × 490 × 1.257 mm"},{label:"Berat bersih",value:"32,8 kg"},{label:"Masa pakai filter",value:"Plus Sediment 6 bulan · Pre-Carbon 12 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan · Antibacterial 12 bulan"}],
officialUrl:"https://www.coway.id/products/detail/core/3"
},
{
slug:"slim-stand",category:"Water Purifier",name:"Slim Stand",model:"CHP-5730R",tagline:"Designed for Modern Living",
description:"Water purifier floor standing dengan bodi ramping selebar 26 cm, pilihan warna modern, dan panel digital intuitif.",
image:"/waterpurifier/slimstand.png",highlights:[
{title:"Desain slim 26 cm",text:"Tidak membutuhkan countertop dan mudah dipadukan dengan interior rumah."},
{title:"High faucet",text:"Ruang faucet dan tray setinggi 26,5 cm untuk mengisi wadah hingga ukuran 2 liter."},
{title:"Double UV Care",text:"Sistem UV ganda bekerja otomatis setiap 4 jam dalam siklus 12 jam."},
{title:"Adjustable tray & child lock",text:"Tray dapat disesuaikan dengan wadah dan tersedia pengunci air panas."}],
specs:[{label:"Kapasitas tangki total",value:"12 liter"},{label:"Dimensi",value:"260 × 448 × 1.170 mm"},{label:"Berat bersih",value:"29,5 kg"},{label:"Konsumsi listrik",value:"Pemanas 500 W; total tercantum 500 W"},{label:"Masa pakai filter",value:"Neo-Sense 6 bulan · RO 24 bulan · Plus Inno-Sense 18 bulan"}],
officialUrl:"https://www.coway.id/products/detail/slim_stand/24"
},
{
slug:"storm",category:"Air Purifier",name:"Storm",model:"AP-1516D",tagline:"Best Choice for Better Air Circulation",
description:"Air purifier dengan sistem HEPA empat tahap dan sirkulasi multi-arah untuk membantu membersihkan udara di dalam ruangan.",
image:"/airpurifier/storm.png",highlights:[
{title:"Sirkulasi multi-arah",text:"Pengaturan arah aliran udara membantu menjangkau berbagai area ruangan."},
{title:"Haze mode",text:"Mode khusus untuk membantu menangani kondisi udara berkabut atau berasap."},
{title:"HEPA filter 4 tahap",text:"Terdiri dari Pre-Filter, Fine Dust Filter, Deodorisation Filter, dan HEPA Filter."},
{title:"Jangkauan hingga 49,5 m²",text:"Luas area aplikasi yang tercantum pada spesifikasi resmi."}],
specs:[{label:"Area aplikasi",value:"49,5 m²"},{label:"CADR",value:"375 m³/jam"},{label:"Tingkat kebisingan",value:"Di bawah 50 dB"},{label:"Konsumsi listrik",value:"65 W"},{label:"Dimensi",value:"410 × 240 × 765 mm"},{label:"Berat bersih",value:"12 kg"}],
filterInfo:"Pre-Filter dapat dibersihkan; Fine Dust Filter sekitar 4 bulan; Deodorisation Filter 12–24 bulan; HEPA Filter 12 bulan sesuai informasi Coway.",
officialUrl:"https://www.coway.id/products/detail/storm/4"
},
{
slug:"next-storm",category:"Air Purifier",name:"Next Storm",model:"AP-2025A",tagline:"Wider and Powerful Clean Air",
description:"Generasi lanjutan Storm dengan Copper HEPA, tiga arah sirkulasi udara, dan pilihan mode untuk menyesuaikan kondisi ruangan.",
image:"/airpurifier/nextstorm.png",highlights:[
{title:"Tiga arah sirkulasi",text:"Membantu mendistribusikan udara bersih ke berbagai sisi ruangan."},
{title:"Copper HEPA",text:"Menggunakan Copper HEPA Filter sebagai bagian dari sistem filtrasi."},
{title:"Eco mode saat malam",text:"Sleep mode dirancang lebih senyap dengan tingkat kebisingan yang disebutkan 45,2 dB."},
{title:"Mode beragam",text:"Tersedia Smart, Turbo, Haze, dan Sleep."}],
specs:[{label:"Area aplikasi",value:"65 m²"},{label:"Tingkat kebisingan",value:"51 dB (spesifikasi produk)"},{label:"Konsumsi listrik",value:"65 W"},{label:"Dimensi",value:"412 × 232 × 752,5 mm"},{label:"Berat bersih",value:"12 kg"},{label:"Masa pakai filter",value:"Fine Dust 4 bulan · Deodorisation 24 bulan · Copper HEPA 12 bulan"}],
officialUrl:"https://www.coway.id/products/detail/storm_ii/19"
},
{
slug:"cartridge",category:"Air Purifier",name:"Cartridge",model:"AP-1019C",tagline:"Fit in Your Bedroom",
description:"Air purifier berukuran ringkas dengan desain minimalis untuk ditempatkan di ruang personal seperti kamar tidur.",
image:"/airpurifier/cartridge.png",highlights:[
{title:"Desain minimalis",text:"Bentuk ringkas dan pilihan warna yang dirancang menyatu dengan interior kamar."},
{title:"HEPA filter system",text:"Sistem filtrasi menggunakan Pre-Filter, HEPA Filter, dan Deodorisation Filter."},
{title:"Untuk ruang hingga 34 m²",text:"Luas area aplikasi yang tercantum pada spesifikasi resmi."}],
specs:[{label:"Area aplikasi",value:"34 m²"},{label:"Konsumsi listrik",value:"38 W"},{label:"Dimensi",value:"340 × 165 × 469 mm"},{label:"Berat bersih",value:"5,5 kg"},{label:"Masa pakai filter",value:"HEPA 12 bulan · Deodorisation 24 bulan"}],
officialUrl:"https://www.coway.id/products/detail/cartridge/20"
},
{
slug:"noble-2",category:"Air Purifier",name:"Noble 2",model:"AP-2023K",tagline:"A Premium Design to Perfect Every Room",
description:"Air purifier dengan desain premium, filter 4D 360°, dan teknologi Double Air Matching Filter yang dapat disesuaikan dengan kebutuhan.",
image:"/airpurifier/noble2.png",highlights:[
{title:"4D 360° filter",text:"Coway menyebut sistem ini menyaring 99,999% partikel halus dan menghilangkan 99,9% bakteri serta virus di udara."},
{title:"Double Air Matching",text:"Dapat memilih dua filter dari opsi allergen, smoke, fresh home, dan pet filter."},
{title:"Dua pilihan warna",text:"Pebble Gray dan Sand Beige."},
{title:"Area aplikasi 67 m²",text:"Dirancang untuk menjangkau ruangan yang lebih luas."}],
specs:[{label:"Area aplikasi",value:"67 m²"},{label:"Konsumsi listrik",value:"55 W"},{label:"Sistem filtrasi",value:"4D Pre-Filter · Double Air Matching Filter · 4D Copper HEPA · Double Deodorisation Filter"},{label:"Siklus filter",value:"Pre-Filter dapat dicuci · Air Matching 4 bulan · Copper HEPA 12 bulan · Deodorisation 24 bulan"}],
officialUrl:"https://www.coway.id/products/detail/noble_2/21"
},
{
slug:"squarefit",category:"Air Purifier",name:"Squarefit",model:"AP-1125G",tagline:"Where Silence Meets Style",
description:"Air purifier dengan bentuk minimalis dan modern untuk ruang personal. Menggabungkan Air Matching Filter dengan sistem filtrasi efisien.",
image:"/airpurifier/squarefit.png",highlights:[
{title:"Minimalist & modern design",text:"Tersedia dalam pilihan warna Pebble Gray dan Sand Beige."},
{title:"Air Matching Filter",text:"Sistem filter yang dapat disesuaikan untuk kebutuhan kualitas udara."},
{title:"Area aplikasi 33 m²",text:"Luas area aplikasi berdasarkan spesifikasi resmi."}],
specs:[{label:"Area aplikasi",value:"33 m²"},{label:"Konsumsi listrik",value:"45 W"},{label:"Dimensi",value:"366 × 183 × 500 mm (tercantum di halaman resmi)"},{label:"Berat bersih",value:"7 kg"},{label:"Sistem filter",value:"Pre-Filter · Air Matching Filter · Deodorisation Filter · High Efficiency Filter"}],
officialUrl:"https://www.coway.id/products/detail/square_fit/22"
},
{
slug:"squarebig",category:"Air Purifier",name:"Squarebig",model:"AP-2425H",tagline:"Where Power Meets Space",
description:"Air purifier untuk ruangan luas dengan pemantauan kualitas udara real-time dan teknologi Double Air Matching Filter.",
image:"/airpurifier/squarebig.png",highlights:[
{title:"Real-time air quality",text:"Indikator empat warna membantu melihat kondisi kualitas udara."},
{title:"Double Air Matching Filter",text:"Sistem filter ganda dirancang untuk menyaring partikel dan debu halus."},
{title:"Jangkauan hingga 79 m²",text:"Coway mencantumkan area aplikasi hingga 79 m²."}],
specs:[{label:"Area aplikasi",value:"Hingga 79 m²"},{label:"Sistem filtrasi",value:"Pre-Filter · Air Matching Filter · Deodorisation Filter · High Efficiency Filter"}],
officialUrl:"https://dev.coway.id/products/detail/square_fit%2B/23"
},
{
slug:"poe-23a",category:"Water Filter",name:"POE-23A",model:"POE-23A",tagline:"Solusi Air Bersih Rumah Tangga",
description:"Sistem Point of Entry untuk membantu menyaring air sejak pertama kali masuk ke rumah, sebelum digunakan untuk berbagai kebutuhan rumah tangga.",
image:"/waterfilter/poe23a.png",highlights:[
{title:"PVDF ultrafiltration membrane",text:"Membran ultrafiltrasi menyaring kotoran hingga 0,01 mikron."},
{title:"Tidak membutuhkan listrik",text:"Sistem dapat bekerja tanpa sambungan listrik utama."},
{title:"Tekanan air 15–80 psi",text:"Dirancang tetap bekerja pada rentang tekanan sumber air tersebut."},
{title:"Katup multiport 4 arah",text:"Mendukung mode filter, bypass, pencucian cepat, dan backwash."}],
specs:[{label:"Material housing",value:"Stainless steel 304"},{label:"Suhu kerja",value:"5–45°C"},{label:"Tekanan sumber air",value:"15–80 psi"},{label:"Laju aliran",value:"3.200–3.300 liter/jam"},{label:"Dimensi",value:"127 mm × 1.090 mm"},{label:"Berat bersih",value:"10 kg"},{label:"Sumber air",value:"PDAM dan air tanah"}],
officialUrl:"https://www.coway.id/products/detail/poe-23a/18"
},
{
slug:"yonsu",category:"Water Filter",name:"Yonsu",model:"BB14-AID",tagline:"Soft Water. Softer Skin",
description:"Water softener untuk kebutuhan mandi dan perawatan diri. Menggunakan teknologi filter komposit dengan kandungan Vitamin C dan bekerja dengan tekanan air.",
image:"/waterfilter/yonsu.png",highlights:[
{title:"Composite Filter + Vitamin C",text:"Membantu menyaring pasir, lumpur, karat, klorin, dan residu bahan kimia tertentu."},
{title:"Soft water untuk mandi",text:"Didesain untuk penggunaan kamar mandi dan perawatan tubuh; bukan untuk air minum."},
{title:"Tanpa listrik",text:"Bekerja menggunakan tekanan air."},
{title:"Regenerasi satu tombol",text:"Proses regenerasi praktis sekitar 15–30 menit menurut informasi Coway."}],
specs:[{label:"Tekanan penggunaan",value:"0,07–0,98 MPa"},{label:"Suhu penggunaan",value:"2–80°C"},{label:"Kapasitas resin",value:"1,5 liter"},{label:"Soft water per regenerasi",value:"900 liter (standar kesadahan sumber 100 ppm)"},{label:"Dimensi",value:"285 × 190 × 500 mm"},{label:"Berat produk",value:"9 kg termasuk bahan regenerasi"},{label:"Instalasi",value:"Berdiri · area kamar mandi"}],
officialUrl:"https://dev.coway.id/products/detail/yonsu/25"
}
];
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
