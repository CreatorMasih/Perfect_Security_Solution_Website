import { Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Shield, value: '500+', label: 'Installations' },
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: Clock, value: '24/7', label: 'Support' },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Partner in Security Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Perfect Security Solution has been at the forefront of security technology 
                for over a decade. We specialize in providing comprehensive CCTV surveillance 
                systems tailored to your specific needs.
              </p>
              <p>
                Our team of certified professionals ensures seamless installation, configuration, 
                and ongoing support. From small retail stores to large corporate offices, we've 
                secured thousands of properties across India.
              </p>
              <p>
                We partner with leading brands to offer you the latest in security technology, 
                combined with our expertise in design and implementation. Your safety is our priority.
              </p>
            </div>

            {/* Contact Person */}
            <div className="mt-8 p-4 bg-secondary rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Contact Person</p>
              <p className="text-lg font-semibold text-foreground">Abhishek Daniel</p>
              <a href="tel:+919713652013" className="text-accent hover:underline">+91 97136 52013</a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card rounded-xl border border-border card-hover text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
