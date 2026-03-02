import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductImage from "@/components/products/ProductImage";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { parseImageUrls } from "@/lib/productImages";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  price?: number;
  status?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const whatsappUrl = `https://wa.me/919713652013?text=${encodeURIComponent(
    `Hi! I'm interested in ${product.name}. Please share more details.`
  )}`;
  const galleryImages = useMemo(
    () => parseImageUrls([product.image, ...(product.images || [])]),
    [product.image, product.images]
  );

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product.id]);

  const activeImage = galleryImages[selectedImageIndex] || product.image;
  const hasMultipleImages = galleryImages.length > 1;

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
        <ProductImage
          primarySrc={activeImage}
          sources={galleryImages.filter((_, index) => index !== selectedImageIndex)}
          alt={product.name}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {hasMultipleImages && (
          <>
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute left-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2"
              onClick={() =>
                setSelectedImageIndex((current) =>
                  current === 0 ? galleryImages.length - 1 : current - 1
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute right-2 top-1/2 z-20 h-8 w-8 -translate-y-1/2"
              onClick={() =>
                setSelectedImageIndex((current) =>
                  current === galleryImages.length - 1 ? 0 : current + 1
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {galleryImages.map((_, index) => (
                <button
                  key={`${product.id}-dot-${index}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`h-1.5 w-1.5 rounded-full ${
                    selectedImageIndex === index
                      ? "bg-primary"
                      : "bg-foreground/40"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-accent text-accent-foreground border-0">
              New
            </Badge>
          )}
          {product.isFeatured && (
            <Badge className="bg-primary text-primary-foreground border-0">
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute inset-0 z-10 hidden md:flex bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-2">
          <Button variant="secondary" size="icon" asChild>
            <Link to={`/products/${product.id}`}>
              <Eye className="w-5 h-5" />
            </Link>
          </Button>

          <Button variant="whatsapp" size="icon" asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </div>

        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-3 flex items-center gap-2 md:hidden">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/products/${product.id}`} className="flex items-center justify-center gap-1">
              <Eye className="w-4 h-4" />
              View
            </Link>
          </Button>
          <Button variant="whatsapp" size="sm" className="flex-1" asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1">
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-accent">Call for Price</span>

          <Button variant="outline" size="sm" asChild>
            <a href="tel:+919713652013" className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              Inquire
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
