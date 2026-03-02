import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <FeaturedProducts />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
