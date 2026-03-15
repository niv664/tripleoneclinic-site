/**
 * Procedures Section - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - 2x2 grid layout
 * - Centered text with icons
 * - Subtle hover effects
 * - Light gray background
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

interface Procedure {
  titleEn: string;
  titleTh: string;
  titleZh: string;
  descEn: string;
  descTh: string;
  descZh: string;
  icon: string;
}

const procedures: Procedure[] = [
  {
    titleEn: 'Rhinoplasty',
    titleTh: 'ศัลยกรรมจมูก',
    titleZh: '隆鼻手术',
    descEn: 'European nasal bridge refinement',
    descTh: 'การปรับจมูกแบบยุโรป',
    descZh: '欧洲鼻部精致化',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/procedure-icon-rhinoplasty-JzfKEzmj92kMcn5EnXFc8B.webp',
  },
  {
    titleEn: 'Eyelid Surgery',
    titleTh: 'ศัลยกรรมเปลี่ยนตา',
    titleZh: '眼睑手术',
    descEn: 'Upper and lower eyelid surgery',
    descTh: 'ศัลยกรรมเปลี่ยนตาบนและล่าง',
    descZh: '上下眼睑手术',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/procedure-icon-eyelid-jgQL5oSKwxZSTTSaK7u9BT.webp',
  },
  {
    titleEn: 'Lip Correction',
    titleTh: 'ศัลยกรรมปรับปากและริมฝีปาก',
    titleZh: '唇部修正',
    descEn: 'Natural lip shaping procedures',
    descTh: 'ขั้นตอนการปรับรูปปากอย่างธรรมชาติ',
    descZh: '自然唇部塑形程序',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/procedure-icon-lips-cJFGA3ghwEbErDD6cQrk9V.webp',
  },
  {
    titleEn: 'Jawline Contouring',
    titleTh: 'ศัลยกรรมปรับเหงือก',
    titleZh: '下颌轮廓',
    descEn: 'Defined facial structure',
    descTh: 'โครงสร้างใบหน้าที่ชัดเจน',
    descZh: '明确的面部结构',
    icon: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/procedure-icon-rhinoplasty-JzfKEzmj92kMcn5EnXFc8B.webp',
  },
];

export default function Procedures() {
  const { language } = useLanguage();

  const getTitle = (procedure: Procedure) => {
    switch (language) {
      case "th":
        return procedure.titleTh;
      case "zh":
        return procedure.titleZh;
      default:
        return procedure.titleEn;
    }
  };

  const getDescription = (procedure: Procedure) => {
    switch (language) {
      case "th":
        return procedure.descTh;
      case "zh":
        return procedure.descZh;
      default:
        return procedure.descEn;
    }
  };

  const sectionTitle = language === "th" ? "ขั้นตอนลายเซ็น" : language === "zh" ? "标志性程序" : "Signature Procedures";

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">{sectionTitle}</h2>
          <div className="flex justify-center">
            <div className="accent-bar"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="text-center p-8 bg-background rounded-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={procedure.icon}
                  alt={getTitle(procedure)}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-foreground mb-3">{getTitle(procedure)}</h3>
              <p className="text-sm text-foreground/70">{getDescription(procedure)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
