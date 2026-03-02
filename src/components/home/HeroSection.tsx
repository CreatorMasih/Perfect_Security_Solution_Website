import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/9795077-uhd_4096_2160_25fps.mp4";

const HeroSection = () => {
  const proofPoints = [
    "Professional on-site installation",
    "24/7 technical assistance",
    "Warranty-backed product range",
  ];

  return (
    <section className="relative min-h-[78vh] md:min-h-[88vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/88 to-primary/55" />
      </div>

      {/* Content */}
      <div className="relative container-section pt-24 pb-14 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/15 px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 fade-in-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground">
              Premium CCTV Solutions for Homes and Businesses
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-5 fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Security That Looks Professional.
            <br />
            <span className="text-gradient">Protection That Feels Reliable.</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg text-primary-foreground/85 mb-8 leading-relaxed fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            From camera planning to final installation, we deliver complete surveillance setups with clean execution and dependable post-install support.
          </p>

          {/* Features */}
          <ul
            className="grid gap-2.5 mb-8 md:mb-10 fade-in-up sm:flex sm:flex-wrap sm:gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            {proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/95">{point}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="tel:+919713652013" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-5 fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Link
              to="/products"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4"
            >
              Browse security systems
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
