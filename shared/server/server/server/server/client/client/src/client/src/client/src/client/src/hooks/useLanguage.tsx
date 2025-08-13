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
    
    // Continue with all other translations...
  },
  en: {
    // All English translations...
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
