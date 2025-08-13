import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.heritage': 'Warisan Budaya',
    'nav.education': 'Program Edukasi',
    'nav.culinary': 'Kuliner Tradisional',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'Tomboan',
    'hero.subtitle': 'Wisata Edukasi & Budaya',
    'hero.description': 'Jelajahi kearifan lokal Situs Petirtaan Ngawonggo melalui filosofi Asah, Asih, Asuh - tempat dimana tradisi bertemu dengan edukasi modern',
    'hero.explore': 'Mulai Jelajah',
    'hero.watchVideo': 'Tonton Video',
    
    // About Section
    'about.title': 'Tentang Tomboan',
    'about.description1': 'Tomboan, dalam bahasa Jawa berarti "obat", adalah sebuah sarana edukasi yang bertujuan menjadi obat lelah bagi pengunjung. Lebih dari sekedar tempat wisata, Tomboan adalah ruang pembelajaran tentang kehidupan, dimana tradisi dapat dipelajari dan dipraktekkan secara langsung.',
    'about.description2': 'Menerapkan sistem "Kotak Asih", pengunjung tidak perlu mengkhawatirkan tarif. Tomboan hadir untuk mengajarkan bagaimana saling menyayangi dan mengasihi tanpa memandang angka, kembali menyatu dengan alam dan ciptaan Tuhan lainnya.',
    'about.asah': 'Asah',
    'about.asah.desc': 'Mengasah kecerdasan dan keterampilan',
    'about.asih': 'Asih',
    'about.asih.desc': 'Memberikan kasih sayang dan perhatian',
    'about.asuh': 'Asuh',
    'about.asuh.desc': 'Membimbing pembentukan karakter',
    'about.zeroWaste': 'Zero Waste System',
    'about.zeroWaste.desc': 'Tomboan menerapkan sistem ramah lingkungan dengan melarang penggunaan kemasan plastik dan mengutamakan bahan-bahan alami dari sumber daya lokal.',
    
    // Heritage Section
    'heritage.title': 'Situs Petirtaan Ngawonggo',
    'heritage.subtitle': 'Menyelami jejak sejarah dan kearifan lokal yang terpelihara selama berabad-abad',
    'heritage.architecture': 'Arsitektur Kuno',
    'heritage.architecture.desc': 'Struktur bangunan yang memadukan teknologi masa lalu dengan filosofi spiritual mendalam.',
    'heritage.history': 'Sejarah Petirtaan',
    'heritage.history.desc': 'Fungsi spiritual dan sosial petirtaan dalam kehidupan masyarakat Jawa kuno.',
    'heritage.carvings': 'Relief & Ukiran',
    'heritage.carvings.desc': 'Makna simbolis dalam setiap ukiran yang menceritakan kehidupan masa lampau.',
    'heritage.timeline': 'Perjalanan Waktu Situs Ngawonggo',
    'heritage.learnMore': 'Pelajari Lebih Lanjut',
    
    // Education Section
    'education.title': 'Program Edukasi',
    'education.subtitle': 'Pembelajaran holistik melalui filosofi Asah, Asih, Asuh yang menyentuh aspek intelektual, emosional, dan moral',
    'education.asah.title': 'Asah - Pengembangan Intelektual',
    'education.asah.point1': 'Pengasahan intelektual terstruktur dan berkelanjutan',
    'education.asah.point2': 'Peningkatan keterampilan berpikir kritis dan kreatif',
    'education.asah.point3': 'Pengetahuan mendalam tentang warisan budaya lokal',
    'education.asah.point4': 'Kemampuan analisis terhadap nilai-nilai tradisional',
    'education.asih.title': 'Asih - Pembangunan Emosional',
    'education.asih.point1': 'Perasaan kasih sayang, perhatian, dan dukungan emosional',
    'education.asih.point2': 'Pembangunan kepercayaan diri yang konsisten',
    'education.asih.point3': 'Kemampuan mengatasi stres dan tekanan',
    'education.asih.point4': 'Peningkatan kesejahteraan mental melalui tradisi',
    'education.asuh.title': 'Asuh - Pembentukan Karakter',
    'education.asuh.point1': 'Pembinaan nilai-nilai moral seperti integritas dan etika',
    'education.asuh.point2': 'Persiapan menjadi warga yang bertanggung jawab',
    'education.asuh.point3': 'Penguatan tanggung jawab sosial dan bermartabat',
    'education.asuh.point4': 'Implementasi nilai-nilai luhur dalam kehidupan sehari-hari',
    
    // Food Section
    'food.title': 'Kuliner Tradisional',
    'food.subtitle': 'Nikmati cita rasa nusantara dengan hidangan berbahan alami tanpa bahan tambahan apapun',
    'food.jemblem': 'Jemblem',
    'food.jemblem.desc': 'Makanan tradisional berbahan dasar singkong dengan cita rasa manis alami',
    'food.ongol': 'Ongol-ongol',
    'food.ongol.desc': 'Kudapan dari tepung tapioka dengan kelapa parut dan gula aren',
    'food.apem': 'Apem Pasung',
    'food.apem.desc': 'Kue tradisional yang dikukus dengan cita rasa lembut dan manis',
    'food.wedang': 'Wedang Tradisional',
    'food.wedang.desc': 'Minuman herbal dari tumbuh-tumbuhan lokal Situs Ngawonggo',
    'food.kotakAsih': 'Kotak Asih',
    'food.zeroWasteTitle': 'Filosofi Zero Waste',
    'food.zeroWaste.desc1': 'Ada larangan tegas bagi pengunjung untuk membawa makanan dan minuman dari luar, terutama yang berkemasan plastik, karena sistem zero waste yang dianut.',
    'food.zeroWaste.desc2': 'Hidangan yang mengandung daging hanya akan disediakan ketika hari-hari tertentu saja, sebagai bentuk kesederhanaan dan penghormatan terhadap alam.',
    'food.kotakAsih.desc': 'Tidak ada tarif tetap - berikan sesuai kemampuan dan keikhlasan hati',
    
    // Gallery Section
    'gallery.title': 'Galeri Foto',
    'gallery.subtitle': 'Dokumentasi kegiatan dan keindahan Situs Petirtaan Ngawonggo',
    'gallery.viewMore': 'Lihat Galeri Lengkap',
    
    // Founder Section
    'founder.title': 'Rahmad Yasin',
    'founder.subtitle': 'Pendiri Tomboan',
    'founder.desc1': 'Seorang lelaki yang penuh keikhlasan dan kesederhanaan. Lahir dan besar di Dusun Nanasan, Desa Ngawonggo, Kecamatan Tajinan, Kabupaten Malang. Beliau telah berinisiatif untuk mengelola Tomboan tanpa mengharapkan gaji apapun.',
    'founder.desc2': 'Rahmad adalah seorang pekerja keras. Dulunya, ia memiliki pekerjaan di Pulau Bali. Namun, panggilan hatinya untuk kembali ke desanya terlalu kuat untuk diabaikan.',
    'founder.desc3': 'Rahmad merasa bahwa dia memiliki tanggung jawab moral untuk memberikan kontribusi positif untuk melestarikan kearifan lokal serta situs bersejarah. Baginya, melihat Tomboan menjadi tempat yang indah dan terawat dengan baik adalah hadiah yang tak ternilai.',
    'founder.quote': 'Kesederhanaan adalah kunci kebahagiaan sejati dan mengajarkan nilai-nilai tersebut kepada orang-orang di sekitar kita adalah panggilan hidup yang mulia.',
    
    // Contact Section
    'contact.title': 'Informasi Kunjungan',
    'contact.subtitle': 'Rencanakan kunjungan Anda ke Situs Petirtaan Ngawonggo dan rasakan pengalaman edukasi budaya yang berkesan',
    'contact.location': 'Detail Lokasi',
    'contact.address': 'Alamat Lengkap',
    'contact.hours': 'Jam Operasional',
    'contact.kotakAsih': 'Sistem Kotak Asih',
    'contact.kotakAsih.desc': 'Tidak ada tarif tetap untuk masuk. Pengunjung memberikan kontribusi sesuai kemampuan dan keikhlasan hati melalui sistem "Kotak Asih".',
    'contact.kotakAsih.quote': 'Berikan sesuai yang mampu, terima sesuai yang cukup - Filosofi Tomboan',
    'contact.form.title': 'Hubungi Kami',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan',
    'contact.form.send': 'Kirim Pesan',
    'contact.form.namePlaceholder': 'Masukkan nama Anda',
    'contact.form.subjectPlaceholder': 'Topik pesan Anda',
    'contact.form.messagePlaceholder': 'Tulis pesan Anda di sini...',
    'contact.map': 'Peta Lokasi Tomboan',
    'contact.mapSubtitle': 'Situs Petirtaan Ngawonggo',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.heritage': 'Cultural Heritage',
    'nav.education': 'Educational Programs',
    'nav.culinary': 'Traditional Culinary',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Tomboan',
    'hero.subtitle': 'Educational & Cultural Tourism',
    'hero.description': 'Explore the local wisdom of Situs Petirtaan Ngawonggo through the philosophy of Asah, Asih, Asuh - where tradition meets modern education',
    'hero.explore': 'Start Exploring',
    'hero.watchVideo': 'Watch Video',
    
    // About Section
    'about.title': 'About Tomboan',
    'about.description1': 'Tomboan, meaning "medicine" in Javanese, is an educational facility that aims to be a remedy for visitors\' fatigue. More than just a tourist destination, Tomboan is a learning space about life, where traditions can be learned and practiced directly.',
    'about.description2': 'Implementing the "Kotak Asih" system, visitors do not need to worry about fees. Tomboan is here to teach how to love and care for each other without looking at numbers, returning to unity with nature and God\'s other creations.',
    'about.asah': 'Asah',
    'about.asah.desc': 'Sharpening intelligence and skills',
    'about.asih': 'Asih',
    'about.asih.desc': 'Providing love and care',
    'about.asuh': 'Asuh',
    'about.asuh.desc': 'Guiding character formation',
    'about.zeroWaste': 'Zero Waste System',
    'about.zeroWaste.desc': 'Tomboan implements an environmentally friendly system by prohibiting the use of plastic packaging and prioritizing natural materials from local resources.',
    
    // Heritage Section
    'heritage.title': 'Situs Petirtaan Ngawonggo',
    'heritage.subtitle': 'Exploring the traces of history and local wisdom preserved for centuries',
    'heritage.architecture': 'Ancient Architecture',
    'heritage.architecture.desc': 'Building structures that combine past technology with deep spiritual philosophy.',
    'heritage.history': 'Petirtaan History',
    'heritage.history.desc': 'The spiritual and social function of petirtaan in ancient Javanese community life.',
    'heritage.carvings': 'Reliefs & Carvings',
    'heritage.carvings.desc': 'Symbolic meaning in every carving that tells the story of past life.',
    'heritage.timeline': 'Timeline of Ngawonggo Site',
    'heritage.learnMore': 'Learn More',
    
    // Education Section
    'education.title': 'Educational Programs',
    'education.subtitle': 'Holistic learning through the philosophy of Asah, Asih, Asuh that touches intellectual, emotional, and moral aspects',
    'education.asah.title': 'Asah - Intellectual Development',
    'education.asah.point1': 'Structured and continuous intellectual sharpening',
    'education.asah.point2': 'Improving critical and creative thinking skills',
    'education.asah.point3': 'In-depth knowledge of local cultural heritage',
    'education.asah.point4': 'Analytical ability towards traditional values',
    'education.asih.title': 'Asih - Emotional Development',
    'education.asih.point1': 'Feelings of love, attention, and emotional support',
    'education.asih.point2': 'Consistent self-confidence building',
    'education.asih.point3': 'Ability to cope with stress and pressure',
    'education.asih.point4': 'Improving mental well-being through tradition',
    'education.asuh.title': 'Asuh - Character Formation',
    'education.asuh.point1': 'Fostering moral values such as integrity and ethics',
    'education.asuh.point2': 'Preparation to become responsible citizens',
    'education.asuh.point3': 'Strengthening social responsibility and dignity',
    'education.asuh.point4': 'Implementation of noble values in daily life',
    
    // Food Section
    'food.title': 'Traditional Culinary',
    'food.subtitle': 'Enjoy the taste of the archipelago with dishes made from natural ingredients without any additives',
    'food.jemblem': 'Jemblem',
    'food.jemblem.desc': 'Traditional food made from cassava with natural sweet taste',
    'food.ongol': 'Ongol-ongol',
    'food.ongol.desc': 'Snack made from tapioca flour with grated coconut and palm sugar',
    'food.apem': 'Apem Pasung',
    'food.apem.desc': 'Traditional steamed cake with soft and sweet taste',
    'food.wedang': 'Traditional Wedang',
    'food.wedang.desc': 'Herbal drink from local plants of Ngawonggo Site',
    'food.kotakAsih': 'Kotak Asih',
    'food.zeroWasteTitle': 'Zero Waste Philosophy',
    'food.zeroWaste.desc1': 'There is a strict prohibition for visitors to bring food and drinks from outside, especially those packaged in plastic, because of the adopted zero waste system.',
    'food.zeroWaste.desc2': 'Dishes containing meat will only be provided on certain days, as a form of simplicity and respect for nature.',
    'food.kotakAsih.desc': 'No fixed rate - give according to ability and sincerity',
    
    // Gallery Section
    'gallery.title': 'Photo Gallery',
    'gallery.subtitle': 'Documentation of activities and beauty of Situs Petirtaan Ngawonggo',
    'gallery.viewMore': 'View Complete Gallery',
    
    // Founder Section
    'founder.title': 'Rahmad Yasin',
    'founder.subtitle': 'Founder of Tomboan',
    'founder.desc1': 'A man full of sincerity and simplicity. Born and raised in Nanasan Village, Ngawonggo Village, Tajinan District, Malang Regency. He has taken the initiative to manage Tomboan without expecting any salary.',
    'founder.desc2': 'Rahmad is a hard worker. Previously, he had a job in Bali. However, his heart\'s calling to return to his village was too strong to ignore.',
    'founder.desc3': 'Rahmad feels that he has a moral responsibility to make a positive contribution to preserving local wisdom and historical sites. For him, seeing Tomboan become a beautiful and well-maintained place is a priceless gift.',
    'founder.quote': 'Simplicity is the key to true happiness and teaching those values to people around us is a noble calling in life.',
    
    // Contact Section
    'contact.title': 'Visit Information',
    'contact.subtitle': 'Plan your visit to Situs Petirtaan Ngawonggo and experience an unforgettable cultural education experience',
    'contact.location': 'Location Details',
    'contact.address': 'Full Address',
    'contact.hours': 'Operating Hours',
    'contact.kotakAsih': 'Kotak Asih System',
    'contact.kotakAsih.desc': 'There is no fixed admission fee. Visitors contribute according to their ability and sincerity through the "Kotak Asih" system.',
    'contact.kotakAsih.quote': 'Give according to what you can, receive according to what is enough - Tomboan Philosophy',
    'contact.form.title': 'Contact Us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.namePlaceholder': 'Enter your name',
    'contact.form.subjectPlaceholder': 'Your message topic',
    'contact.form.messagePlaceholder': 'Write your message here...',
    'contact.map': 'Tomboan Location Map',
    'contact.mapSubtitle': 'Situs Petirtaan Ngawonggo',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
