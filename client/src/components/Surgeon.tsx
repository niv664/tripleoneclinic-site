/**
 * Surgeon Section - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Split layout with image and biography
 * - Credentials and expertise highlighted
 * - Light background
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Surgeon() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Meet the Surgeon",
      credentials: [
        "Board Certified Plastic Surgeon",
        "Specialist in Rhinoplasty",
        "Facial Contouring Expert",
        "International Patient Care Specialist"
      ],
      bio1: "With over 15 years of experience specializing in facial harmony and nasal refinement, our surgeon has performed over 2,000 procedures for international patients from around the world.",
      bio2: "Triple One Clinic focuses on precision facial surgery with a philosophy based on European facial proportions adapted for Asian facial anatomy. Specialized in rhinoplasty, eyelid surgery, and facial contouring.",
      cta: "Schedule Consultation"
    },
    th: {
      title: "พบศัลยแพทย์",
      credentials: [
        "ศัลยแพทย์พลาสติกที่ได้รับการรับรอง",
        "ผู้เชี่ยวชาญด้านศัลยกรรมจมูก",
        "ผู้เชี่ยวชาญด้านการปรับรูปหน้า",
        "ผู้เชี่ยวชาญด้านการดูแลผู้ป่วยต่างประเทศ"
      ],
      bio1: "ด้วยประสบการณ์กว่า 15 ปีในการเชี่ยวชาญด้านความกลมกลืนของใบหน้าและการปรับจมูก ศัลยแพทย์ของเราได้ทำการผ่าตัดกว่า 2,000 ครั้งสำหรับผู้ป่วยต่างประเทศจากทั่วโลก",
      bio2: "Triple One Clinic มุ่งเน้นไปที่ศัลยกรรมใบหน้าที่มีความแม่นยำโดยมีปรัชญาที่อิงตามสัดส่วนใบหน้าแบบยุโรปที่ปรับให้เข้ากับโครงสร้างใบหน้าแบบเอเชีย เชี่ยวชาญด้านศัลยกรรมจมูก ศัลยกรรมเปลี่ยนตา และการปรับรูปหน้า",
      cta: "จองการปรึกษา"
    },
    zh: {
      title: "认识医生",
      credentials: [
        "认证整形外科医生",
        "隆鼻手术专家",
        "面部轮廓塑形专家",
        "国际患者护理专家"
      ],
      bio1: "拥有超过15年的面部和谐与鼻部精致化专业经验，我们的医生为来自世界各地的国际患者进行了超过2000例手术。",
      bio2: "Triple One Clinic专注于精准面部手术，其理念基于适应亚洲面部解剖学的欧洲面部比例。专门从事隆鼻手术、眼睑手术和面部轮廓塑形。",
      cta: "预约咨询"
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1">
            <div className="bg-secondary rounded-sm overflow-hidden shadow-sm aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <p className="text-foreground/40 font-georgia text-lg">Surgeon Portrait</p>
              </div>
            </div>
          </div>

          {/* Right - Biography */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-foreground mb-4">{currentContent.title}</h2>
              <div className="accent-bar mb-6"></div>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              {currentContent.credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground font-inter">{credential}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-foreground/80">
                {currentContent.bio1}
              </p>
              <p className="text-foreground/80">
                {currentContent.bio2}
              </p>
            </div>

            {/* CTA */}
            <button className="btn-luxury">
              {currentContent.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
