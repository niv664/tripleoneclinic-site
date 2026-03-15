/**
 * Hero Section - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Large serif heading with generous spacing
 * - Asymmetric layout with whitespace on right
 * - Gold CTA button
 * - Subtle background image
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "European Facial Harmony",
      description: "Advanced facial surgery in Bangkok for international patients. Precision-focused rhinoplasty and facial contouring based on European aesthetic principles adapted for Asian facial anatomy.",
      cta: "Book Consultation"
    },
    th: {
      title: "ความกลมกลืนของใบหน้าแบบยุโรป",
      description: "ศัลยกรรมใบหน้าขั้นสูงในกรุงเทพฯ สำหรับผู้ป่วยต่างประเทศ ศัลยกรรมจมูกที่เน้นความแม่นยำและการปรับรูปหน้าตามหลักการสุนทรีย์แบบยุโรปที่ปรับให้เข้ากับโครงสร้างใบหน้าแบบเอเชีย",
      cta: "จองการปรึกษา"
    },
    zh: {
      title: "欧洲面部和谐",
      description: "曼谷国际患者面部手术。精准隆鼻和面部轮廓塑形，基于适应亚洲面部解剖学的欧洲美学原则。",
      cta: "预约咨询"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <section className="relative py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/hero-background-LtuVMNwaQ9ZWdC9e4YUEBF.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-foreground mb-6">
                {currentContent.title}
              </h1>
              <div className="accent-bar mb-8"></div>
            </div>

            <p className="text-lg text-foreground/80 max-w-md">
              {currentContent.description}
            </p>

            <button className="btn-luxury">
              {currentContent.cta}
            </button>
          </div>

          {/* Right Whitespace */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
