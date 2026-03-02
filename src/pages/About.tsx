import { Shield, Award, Users, Target, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import aboutImage from "@/assets/ian-schneider-TamMbr4okv4-unsplash.jpg";

const About = () => {
  // 🔥 Dynamic Years Calculation
  const currentYear = new Date().getFullYear();
  const years = currentYear - 2014;

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize your safety with top-quality surveillance solutions that protect what matters most.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Every product we offer is thoroughly tested and comes with comprehensive warranty coverage.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our dedicated team provides personalized solutions tailored to your specific security needs.",
    },
    {
      icon: Target,
      title: "Expert Installation",
      description:
        "Professional installation by certified technicians ensures optimal performance and coverage.",
    },
  ];

  const achievements = [
    "500+ Successful Installations",
    "1000+ Satisfied Customers",
    `${years}+ Years of Experience`,
    "24/7 Technical Support",
    "Pan-India Service Coverage",
    "Authorized Dealer Network",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-section text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted partner in security solutions since 2014.
            We're committed to keeping your homes and businesses safe.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                {years}+ Years of Protecting What Matters
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Perfect Security Solution was founded in 2014 by Abhishek Daniel
                  with a simple mission: to make professional-grade security
                  accessible to every home and business in India.
                </p>
                <p>
                  What started as a small operation has grown into one of the most
                  trusted names in CCTV installation and security solutions.
                  Our journey has been driven by innovation, quality, and an
                  unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we partner with leading global brands to bring you
                  cutting-edge surveillance technology, backed by expert
                  installation and round-the-clock support services.
                </p>
              </div>
            </div>

            {/* Image + Floating Card */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Security team at work"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 🔥 Floating Dynamic Stat */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-card p-5 sm:p-6 rounded-xl shadow-xl border border-border backdrop-blur max-w-[220px]">
                <div className="text-3xl font-bold text-accent mb-1">
                  {years}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of Excellence
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Serving since 2014
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground">
              Our core values guide everything we do, from product selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Achievements
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Milestones That Define Us
              </h2>
              <p className="text-muted-foreground mb-6">
                Over the years, we've achieved significant milestones that reflect
                our commitment to excellence and customer satisfaction.
              </p>
              <p className="text-muted-foreground">
                Our growth is a testament to the trust our customers place in us,
                and we're dedicated to continuing this journey of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
