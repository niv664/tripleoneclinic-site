/**
 * Consultation Section - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Dark navy background with white text
 * - Centered content with CTAs
 * - Prominent WhatsApp button
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Consultation() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Book Your Consultation",
      description: "Experience European facial harmony surgery in Bangkok. Our expert surgeon specializes in rhinoplasty and facial contouring for international patients.",
      scheduleBtn: "Schedule Now",
      whatsappBtn: "WhatsApp Consultation",
      info: "Available for online consultations 24/7. Response within 2 hours during business hours."
    },
    th: {
      title: "จองการปรึกษาของคุณ",
      description: "สัมผัสประสบการณ์ศัลยกรรมความกลมกลืนของใบหน้าแบบยุโรปในกรุงเทพฯ ศัลยแพทย์ผู้เชี่ยวชาญของเราเชี่ยวชาญด้านศัลยกรรมจมูกและการปรับรูปหน้าสำหรับผู้ป่วยต่างประเทศ",
      scheduleBtn: "จองเลย",
      whatsappBtn: "ปรึกษาผ่าน WhatsApp",
      info: "พร้อมให้ปรึกษาออนไลน์ 24/7 ตอบกลับภายใน 2 ชั่วโมงในเวลาทำการ"
    },
    zh: {
      title: "预约咨询",
      description: "在曼谷体验欧洲面部和谐手术。我们的专家医生专门从事隆鼻手术和国际患者面部轮廓塑形。",
      scheduleBtn: "立即预约",
      whatsappBtn: "WhatsApp咨询",
      info: "24/7在线咨询。工作时间内2小时内回复。"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-primary-foreground mb-6">{currentContent.title}</h2>
          <div className="flex justify-center mb-8">
            <div className="accent-bar"></div>
          </div>

          <p className="text-lg text-primary-foreground/90 mb-12">
            {currentContent.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-3 bg-accent text-accent-foreground font-inter font-medium rounded-sm transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              {currentContent.scheduleBtn}
            </button>
            <button className="px-8 py-3 border-2 border-accent text-accent font-inter font-medium rounded-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
              {currentContent.whatsappBtn}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              {currentContent.info}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
