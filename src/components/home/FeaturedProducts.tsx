import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { fetchProducts, Product } from "@/services/productsApi";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts({ forceRefresh: true });
        const featured = data.filter((p) => p.isFeatured);
        setProducts(featured);
      } catch (error) {
        console.error("Failed to load featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="rounded-3xl border border-border bg-gradient-card p-4 sm:p-6 md:p-10 shadow-sm">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Top Picks
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
                Featured Security Systems
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Handpicked systems with reliable performance and clean installation quality.
              </p>
            </div>

            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/products" className="flex items-center gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[420px] animate-pulse rounded-xl border border-border bg-card"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
