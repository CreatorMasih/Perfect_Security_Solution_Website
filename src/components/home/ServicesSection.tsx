import { Camera, Wrench, HeadphonesIcon, Settings } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation',
    description: 'Professional installation of surveillance cameras for homes, offices, and commercial spaces.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Regular maintenance and quick repair services to keep your security systems running smoothly.',
  },
  {
    icon: Settings,
    title: 'System Configuration',
    description: 'Expert setup of DVR/NVR systems, remote viewing, and mobile app integration.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to address any security concerns or system issues.',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Complete Security Solutions
          </h2>
          <p className="text-muted-foreground">
            From consultation to installation and ongoing support, we provide 
            end-to-end security services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border card-hover group"
            >
              <div className="w-14 h-14 mb-5 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
