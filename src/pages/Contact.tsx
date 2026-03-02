import { useState } from 'react';
import type { ComponentType } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
    toast({
      title: 'Please fill in required fields',
      description: 'Name, phone, and message are required.',
      variant: 'destructive',
    });
    return;
  }

  if (formData.message.length < 20) {
    toast({
      title: 'Message too short',
      description: 'Please provide more details about your requirements.',
      variant: 'destructive',
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const params = new URLSearchParams({
  action: "addInquiry",
  name: formData.name,
  phone: formData.phone,
  email: formData.email,
  product: formData.product,
  message: formData.message,
});

await fetch(
  `https://script.google.com/macros/s/AKfycbxPzJMvb1J6oJKF50AszFZpEb6StsB5KY6Lq2v9fges36yqFIG1BPNsbp-JBFB-3lSg/exec?${params.toString()}`
);
    toast({
      title: 'Inquiry Submitted!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      product: '',
      message: '',
    });

  } catch (error) {
    console.error('Error submitting inquiry:', error);
    toast({
      title: 'Error',
      description: 'Failed to submit inquiry. Please try again.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const contactInfo: Array<{
    icon: ComponentType<{ className?: string }>;
    label: string;
    value: string;
    href: string | null;
  }> = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97136 52013',
      href: 'tel:+919713652013',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: '+91 97136 52013',
      href: 'https://wa.me/919713652013',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'pssmahasamund786@gmail.com',
      href: 'mailto:pssmahasamund786@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Shop No. 40, 1st Floor, Radhamohan Tower, Bhainshan Road, Near Agrasen Chowk, Samta Colony, Raipur (C.G.) ',                                    
      href: 'https://maps.google.com',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Sat: 9:00 AM - 7:00 PM',
      href: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-14 md:py-24">
        <div className="container-section text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 md:mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have a question or need a quote? We're here to help. 
            Reach out to us and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 97136 52013"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your security requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">Minimum 20 characters</p>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>

                <div className="pt-2">
                  <p className="text-sm font-medium text-foreground mb-3">Our Location</p>
                  <div className="rounded-xl overflow-hidden border border-border bg-secondary/30">
                    <iframe
                      src="https://www.google.com/maps?q=Radhamohan+Tower+Raipur&output=embed"
                      width="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="Perfect Security Solution location map"
                      className="h-[180px] sm:h-[220px] w-full"
                    />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/G93gnYPoNWdANT7Q6?g_st=awb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent mt-2 inline-block hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? Here are all the ways you can contact us.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl border border-border card-hover"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground font-medium hover:text-accent transition-colors break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Person */}
              <div className="p-4 sm:p-6 bg-secondary rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-1">Contact Person</p>
                <p className="text-xl font-bold text-foreground">Abhishek Daniel</p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3 mt-4">
                  <Button variant="phone" size="sm" className="w-full sm:w-auto" asChild>
                    <a href="tel:+919713652013" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="sm" className="w-full sm:w-auto" asChild>
                    <a
                      href="https://wa.me/919713652013"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
