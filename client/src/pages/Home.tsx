import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Procedures from '@/components/Procedures';
import TransformationResults from '@/components/TransformationResults';
import PatientJourney from '@/components/PatientJourney';
import Surgeon from '@/components/Surgeon';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Home Page - Triple One Clinic
 * 
 * Design Philosophy: Minimalist Luxury
 * - Clean, spacious layouts with generous whitespace
 * - Navy (#1a2332) and Gold (#c9a961) color palette
 * - Georgia serif for headings, Inter sans-serif for body
 * - Smooth, understated interactions
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Procedures />
        <TransformationResults />
        <PatientJourney />
        <Surgeon />
        <Consultation />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
