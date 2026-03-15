/**
 * Transformation Results Section - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Before/After image showcase with varied images per procedure
 * - Centered layout with generous spacing
 * - Light background with subtle dividers
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

interface ResultItem {
  id: string;
  titleEn: string;
  titleTh: string;
  titleZh: string;
  descEn: string;
  descTh: string;
  descZh: string;
  image: string;
  alt: string;
}

const results: ResultItem[] = [
  {
    id: "rhinoplasty",
    titleEn: "Rhinoplasty",
    titleTh: "ศัลยกรรมจมูก",
    titleZh: "隆鼻手术",
    descEn: "European nasal refinement",
    descTh: "การปรับจมูกแบบยุโรป",
    descZh: "欧洲鼻部精致化",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/rhinoplasty-before-after-TzMuydabB4xgvAZBaBuQbL.webp",
    alt: "Rhinoplasty Transformation"
  },
  {
    id: "eyelid",
    titleEn: "Eyelid Surgery",
    titleTh: "ศัลยกรรมเปลี่ยนตา",
    titleZh: "眼睑手术",
    descEn: "Natural eye enhancement",
    descTh: "การปรับปรุงตาอย่างธรรมชาติ",
    descZh: "自然眼部增强",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/eyelid-before-after-kpqPusv9o4nAaxGWzTiPW6.webp",
    alt: "Eyelid Surgery Transformation"
  },
  {
    id: "lip",
    titleEn: "Lip Correction",
    titleTh: "ศัลยกรรมปรับปากและริมฝีปาก",
    titleZh: "唇部修正",
    descEn: "Harmonious lip shaping",
    descTh: "การปรับรูปปากอย่างกลมกลืน",
    descZh: "和谐的唇部塑形",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/lip-before-after-oEYpDNqa8JeKAzrUQbWuP3.webp",
    alt: "Lip Correction Transformation"
  },
  {
    id: "jawline",
    titleEn: "Jawline Contouring",
    titleTh: "ศัลยกรรมปรับเหงือก",
    titleZh: "下颌轮廓",
    descEn: "Refined facial structure",
    descTh: "การปรับปรุงโครงสร้างใบหน้า",
    descZh: "精致的面部结构",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/jawline-before-after-WrjUEHSC9bKYoKai9KEfN7.webp",
    alt: "Jawline Contouring Transformation"
  }
];

export default function TransformationResults() {
  const { language } = useLanguage();

  const getTitle = (item: ResultItem) => {
    switch (language) {
      case "th":
        return item.titleTh;
      case "zh":
        return item.titleZh;
      default:
        return item.titleEn;
    }
  };

  const getDescription = (item: ResultItem) => {
    switch (language) {
      case "th":
        return item.descTh;
      case "zh":
        return item.descZh;
      default:
        return item.descEn;
    }
  };

  const sectionTitle = language === "th" ? "ผลการเปลี่ยนแปลง" : language === "zh" ? "转变结果" : "Transformation Results";

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">{sectionTitle}</h2>
          <div className="flex justify-center">
            <div className="accent-bar"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {results.map((result) => (
            <div key={result.id} className="text-center">
              <div className="mb-6 bg-secondary rounded-sm overflow-hidden shadow-sm">
                <img
                  src={result.image}
                  alt={result.alt}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-foreground mb-2">{getTitle(result)}</h3>
              <p className="text-sm text-foreground/70">{getDescription(result)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
