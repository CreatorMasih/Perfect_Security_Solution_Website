import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../../assets/PSS.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="rounded-md bg-primary-foreground/10 p-1 ring-1 ring-primary-foreground/20">
                <img
                  src={logo}
                  alt="Perfect Security Solution Logo"
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-primary-foreground leading-tight">
                  Perfect Security
                </h1>
                <p className="text-xs text-accent -mt-0.5">
                  Solution
                </p>
              </div>
            </Link>

            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for comprehensive CCTV and security
              solutions. Protecting homes and businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                "Dome Cameras",
                "Bullet Cameras",
                "PTZ Cameras",
                "DVR/NVR Systems",
                "Accessories",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">

              {/* Phone */}
              <li>
                <a
                  href="tel:+919713652013"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +91 97136 52013
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:pssmahasamund786@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  pssmahasamund786@gmail.com
                </a>
              </li>

              {/* Address + Map */}
              <li>
  <div className="bg-primary-foreground/5 p-4 rounded-xl">

    <div className="flex flex-col md:flex-row gap-4 items-start">

      {/* Address */}
      <div className="flex items-start gap-2 text-sm text-primary-foreground/80 md:w-3/5">
        <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
        <div>
          <p>Shop No. 40, 1st Floor</p>
          <p>Radhamohan Tower, Bhainshan Road</p>
          <p>Near Agrasen Chowk</p>
          <p>Samta Colony, Raipur (C.G.)</p>

          <a
            href="https://maps.app.goo.gl/G93gnYPoNWdANT7Q6?g_st=awb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent mt-2 inline-block hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="md:w-2/5 w-full rounded-lg overflow-hidden border border-primary-foreground/20 shadow-sm">
        <iframe
          src="https://www.google.com/maps?q=Radhamohan+Tower+Raipur&output=embed"
          width="100%"
          height="140"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-lg"
        />
      </div>

    </div>

  </div>
</li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Perfect Security Solution. All rights reserved.
            </p>
            <p>Contact: Abhishek Daniel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
