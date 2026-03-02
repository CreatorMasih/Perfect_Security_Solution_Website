import { useEffect, useMemo, useState } from "react";
import { FALLBACK_PRODUCT_IMAGE, parseImageUrls } from "@/lib/productImages";

interface ProductImageProps {
  alt: string;
  className?: string;
  primarySrc?: string;
  sources?: string[];
}

const ProductImage = ({
  alt,
  className,
  primarySrc = "",
  sources = [],
}: ProductImageProps) => {
  const sourceKey = useMemo(
    () => [primarySrc, ...sources].join("|"),
    [primarySrc, sources]
  );

  const candidates = useMemo(() => {
    const urls = parseImageUrls([primarySrc, ...sources]);
    return urls.length > 0 ? [...urls, FALLBACK_PRODUCT_IMAGE] : [FALLBACK_PRODUCT_IMAGE];
  }, [primarySrc, sources]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [sourceKey]);

  return (
    <img
      src={candidates[activeIndex]}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        setActiveIndex((current) =>
          current < candidates.length - 1 ? current + 1 : current
        );
      }}
    />
  );
};

export default ProductImage;
