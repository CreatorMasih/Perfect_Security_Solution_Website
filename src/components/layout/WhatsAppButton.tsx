import { Button } from '@/components/ui/button';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const WhatsAppButton = () => {
  const phoneNumber = '919713652013';
  const message = encodeURIComponent('Hi! I am interested in your CCTV products. Please share more details.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <Button
        variant="whatsapp"
        size="iconLg"
        className="rounded-full animate-pulse-glow"
      >
        <WhatsAppIcon className="w-7 h-7 fill-current" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
