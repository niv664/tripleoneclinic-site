import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Header Component - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Dark navy background (#1a2332)
 * - Clean navigation with gold accents
 * - Sticky positioning for accessibility
 * - Multi-language support
 */

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    en: ['Home', 'Procedures', 'Surgeon', 'International Patients', 'Contact'],
    th: ['หน้าแรก', 'ขั้นตอน', 'ศัลยแพทย์', 'ผู้ป่วยต่างประเทศ', 'ติดต่อ'],
    zh: ['首页', '手术项目', '医生', '国际患者', '联系'],
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'th', label: 'TH' },
    { code: 'zh', label: '中文' },
  ];

  const bookConsultationText = {
    en: 'Book Consultation',
    th: 'จองการปรึกษา',
    zh: '预约咨询',
  };

  const currentNavItems = navItems[language as keyof typeof navItems] || navItems.en;
  const bookText = bookConsultationText[language as keyof typeof bookConsultationText] || bookConsultationText.en;

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/ChatGPTImage13mrt2026,22_17_57_d37fadfa.png"
              alt="Triple One Clinic Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentNavItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-inter font-medium transition-colors duration-300 hover:text-accent"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'th' | 'zh')}
              className="bg-primary text-primary-foreground border border-accent rounded-sm px-2 py-1 text-sm font-inter cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            {/* Book Consultation Button */}
            <button className="hidden sm:block btn-luxury text-sm">
              {bookText}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <div className="w-6 h-0.5 bg-primary-foreground"></div>
              <div className="w-6 h-0.5 bg-primary-foreground"></div>
              <div className="w-6 h-0.5 bg-primary-foreground"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-accent/20">
            {currentNavItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-sm font-inter font-medium transition-colors duration-300 hover:text-accent"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 btn-luxury text-sm">
              {bookText}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
