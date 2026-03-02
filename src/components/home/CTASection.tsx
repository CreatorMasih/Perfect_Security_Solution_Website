import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const CTASection = () => {
  const whatsappUrl = 'https://wa.me/919713652013?text=' + encodeURIComponent(
    'Hi! I would like to get a quote for CCTV installation. Please contact me.'
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative container-section">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary-foreground/20 bg-primary-foreground/5 p-5 sm:p-8 text-center shadow-xl md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 md:mb-6">
            Ready to Upgrade Your Security Setup?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 md:mb-10">
            Book a quick discussion with our team to get the right camera plan, wiring design,
            and installation approach for your property.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Get Free Consultation
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="tel:+919713652013" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call +91 97136 52013
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/65">
            Contact Person: <strong className="text-primary-foreground/90">Abhishek Daniel</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
