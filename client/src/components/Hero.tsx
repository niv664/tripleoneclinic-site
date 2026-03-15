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
      title: "Facial Harmony. Precision Aesthetics.",
      subtitle: "Advanced facial aesthetics in Bangkok for Thai and international patients.",
      description: "Precision rhinoplasty and facial refinement with Botox and fillers, designed to create balanced, natural-looking results.",
      cta: "Book Consultation"
    },
    th: {
      title: "ความกลมกลืนของใบหน้า สุนทรียศาสตร์ที่แม่นยำ",
      subtitle: "สุนทรียศาสตร์ใบหน้าขั้นสูงในกรุงเทพฯ สำหรับผู้ป่วยชาวไทยและต่างชาติ",
      description: "การทำศัลยกรรมจมูกที่แม่นยำและการปรับรูปหน้าด้วยโบท็อกซ์และฟิลเลอร์ ออกแบบมาเพื่อสร้างผลลัพธ์ที่สมดุลและดูเป็นธรรมชาติ",
      cta: "จองการปรึกษา"
    },
    zh: {
      title: "面部和谐。精准美学。",
      subtitle: "曼谷面向泰国及国际患者的高级面部美学。",
      description: "精准隆鼻以及使用肉毒杆菌和填充剂的面部精雕，旨在创造平衡、自然的美容效果。",
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
            <div className="space-y-4">
              <h1 className="text-foreground leading-tight">
                {currentContent.title}
              </h1>
              <p className="text-xl font-medium text-foreground/90">
                {currentContent.subtitle}
              </p>
              <div className="accent-bar"></div>
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
