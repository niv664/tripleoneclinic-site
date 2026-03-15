/**
 * Patient Journey Section - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - 5-step horizontal flow
 * - Centered layout with connecting lines
 * - Light background
 * - Multi-language support
 */

import { useLanguage } from "@/contexts/LanguageContext";

interface JourneyStep {
  number: number;
  titleEn: string;
  titleTh: string;
  titleZh: string;
  descEn: string;
  descTh: string;
  descZh: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: 1,
    titleEn: 'Online Consultation',
    titleTh: 'ปรึกษาออนไลน์',
    titleZh: '在线咨询',
    descEn: 'Connect with our team remotely',
    descTh: 'เชื่อมต่อกับทีมของเราจากระยะไกล',
    descZh: '与我们的团队远程联系',
  },
  {
    number: 2,
    titleEn: 'Travel to Bangkok',
    titleTh: 'เดินทางไปกรุงเทพฯ',
    titleZh: '前往曼谷',
    descEn: 'Arrange your visit',
    descTh: 'จัดการการเยี่ยมชมของคุณ',
    descZh: '安排您的访问',
  },
  {
    number: 3,
    titleEn: 'Surgery',
    titleTh: 'ศัลยกรรม',
    titleZh: '手术',
    descEn: 'Expert surgical care',
    descTh: 'การดูแลผ่าตัดจากผู้เชี่ยวชาญ',
    descZh: '专家手术护理',
  },
  {
    number: 4,
    titleEn: 'Recovery Hotel',
    titleTh: 'โรงแรมฟื้นตัว',
    titleZh: '恢复酒店',
    descEn: 'Comfortable recovery stay',
    descTh: 'ที่พักฟื้นตัวที่สะดวกสบาย',
    descZh: '舒适的恢复住宿',
  },
  {
    number: 5,
    titleEn: 'Follow-up',
    titleTh: 'ติดตามผล',
    titleZh: '后续跟进',
    descEn: 'Ongoing support',
    descTh: 'การสนับสนุนอย่างต่อเนื่อง',
    descZh: '持续支持',
  },
];

export default function PatientJourney() {
  const { language } = useLanguage();

  const getTitle = (step: JourneyStep) => {
    switch (language) {
      case "th":
        return step.titleTh;
      case "zh":
        return step.titleZh;
      default:
        return step.titleEn;
    }
  };

  const getDescription = (step: JourneyStep) => {
    switch (language) {
      case "th":
        return step.descTh;
      case "zh":
        return step.descZh;
      default:
        return step.descEn;
    }
  };

  const sectionTitle = language === "th" ? "การเดินทางของผู้ป่วยต่างประเทศ" : language === "zh" ? "国际患者之旅" : "International Patient Journey";

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">{sectionTitle}</h2>
          <div className="flex justify-center">
            <div className="accent-bar"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-5 gap-4 mb-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-accent text-primary font-georgia font-bold text-lg flex items-center justify-center mb-4">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm font-georgia font-bold text-foreground mb-2">
                    {getTitle(step)}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-foreground/70">{getDescription(step)}</p>

                  {/* Connector Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-1/2 top-6 w-full h-0.5 bg-accent/30 transform translate-x-1/2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent text-primary font-georgia font-bold flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-0.5 h-12 bg-accent/30 mt-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-georgia font-bold text-foreground mb-1">
                    {getTitle(step)}
                  </h3>
                  <p className="text-sm text-foreground/70">{getDescription(step)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
