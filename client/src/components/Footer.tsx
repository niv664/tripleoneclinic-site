/**
 * Footer Component - Triple One Clinic
 * 
 * Design: Minimalist Luxury
 * - Dark navy background
 * - Contact information and links
 * - Clean, minimal design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031854316/Jx2RQ3hkgjwjAzenjUPkpP/ChatGPTImage13mrt2026,22_17_57_d37fadfa.png"
              alt="Triple One Clinic Logo"
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-primary-foreground/70">
              Advanced facial surgery in Bangkok for international patients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Procedures
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Surgeon
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-primary-foreground">Contact</h4>
            <div className="text-sm space-y-2 text-primary-foreground/70">
              <p>Bangkok, Thailand</p>
              <p>+66 (0) 2 XXX XXXX</p>
              <p>info@tripleoneclinic.com</p>
              <p>Available 24/7 for consultations</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Triple One Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
