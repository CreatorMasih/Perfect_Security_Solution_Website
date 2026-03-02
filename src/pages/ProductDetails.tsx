import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { fetchProducts, Product } from "@/services/productsApi";
import { Button } from "@/components/ui/button";
import ProductImage from "@/components/products/ProductImage";
import { parseImageUrls } from "@/lib/productImages";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const products = await fetchProducts();
        const found = products.find((p) => p.id === id);
        setProduct(found || null);
      } catch (error) {
        console.error("Failed to load product details:", error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [id]);

  const galleryImages = useMemo(() => {
    if (!product) {
      return [];
    }

    return parseImageUrls([product.image, ...(product.images || [])]);
  }, [product]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="p-20 text-center text-lg">Loading product...</div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="p-20 text-center text-lg">Product not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-section py-10 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
            <ProductImage
              primarySrc={galleryImages[selectedImageIndex]}
              sources={galleryImages.filter((_, index) => index !== selectedImageIndex)}
              alt={product.name}
              className="w-full h-full object-contain p-3"
            />

            {galleryImages.length > 1 && (
              <>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setSelectedImageIndex((current) =>
                      current === 0 ? galleryImages.length - 1 : current - 1
                    )
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() =>
                    setSelectedImageIndex((current) =>
                      current === galleryImages.length - 1 ? 0 : current + 1
                    )
                  }
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}
          </div>

          {galleryImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImageIndex === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <ProductImage
                    primarySrc={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button className="w-full sm:w-auto" asChild>
              <a
                href={`https://wa.me/919713652013?text=Hi I'm interested in ${product.name}`}
                target="_blank"
                rel="noreferrer"
              >
                Inquire on WhatsApp
              </a>
            </Button>

            <Button className="w-full sm:w-auto" variant="outline" asChild>
              <a href="tel:+919713652013">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
