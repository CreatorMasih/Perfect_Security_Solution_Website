import { FALLBACK_PRODUCT_IMAGE, parseImageUrls } from "@/lib/productImages";

const PRODUCTS_API_URL =
  "https://script.google.com/macros/s/AKfycbxPzJMvb1J6oJKF50AszFZpEb6StsB5KY6Lq2v9fges36yqFIG1BPNsbp-JBFB-3lSg/exec";
const PRODUCTS_CACHE_KEY = "products_cache_v1";
const PRODUCTS_CACHE_TTL_MS = 5 * 60 * 1000;

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  image: string;
  images: string[];
  isFeatured?: boolean;
}

let memoryCache: { data: Product[]; timestamp: number } | null = null;
let inFlightRequest: Promise<Product[]> | null = null;

function parseFeaturedValue(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return value === 1;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return ["yes", "true", "1", "y"].includes(normalized);
  }

  return false;
}

function isCacheFresh(timestamp: number): boolean {
  return Date.now() - timestamp < PRODUCTS_CACHE_TTL_MS;
}

function readStorageCache(): { data: Product[]; timestamp: number } | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(PRODUCTS_CACHE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as { data: Product[]; timestamp: number };
    if (!Array.isArray(parsed?.data) || typeof parsed?.timestamp !== "number") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function writeStorageCache(cache: { data: Product[]; timestamp: number }) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(PRODUCTS_CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore storage write errors on low-storage/private mode.
  }
}

async function requestProductsFromApi(): Promise<Product[]> {
  const res = await fetch(`${PRODUCTS_API_URL}?action=getProducts`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data?.success) {
    throw new Error("Failed to fetch products");
  }

  return (data.products || []).map((p: any): Product => {
    const images = parseImageUrls([p.image_urls, p.image_url, p.image]);

    return {
      id: p.id,
      name: p.name,
      category: p.category,
      description: p.description,
      price: Number(p.price_inr || 0),
      image: images[0] || FALLBACK_PRODUCT_IMAGE,
      images,
      isFeatured: parseFeaturedValue(
        p.featured ?? p.is_featured ?? p.isFeatured ?? p.Featured
      ),
    };
  });
}

export async function fetchProducts(options?: {
  forceRefresh?: boolean;
}): Promise<Product[]> {
  const forceRefresh = options?.forceRefresh === true;

  if (!forceRefresh) {
    if (memoryCache && isCacheFresh(memoryCache.timestamp)) {
      return memoryCache.data;
    }

    const storageCache = readStorageCache();
    if (storageCache && isCacheFresh(storageCache.timestamp)) {
      memoryCache = storageCache;
      return storageCache.data;
    }

    if (inFlightRequest) {
      return inFlightRequest;
    }
  }

  inFlightRequest = (async () => {
    try {
      const products = await requestProductsFromApi();
      const nextCache = { data: products, timestamp: Date.now() };
      memoryCache = nextCache;
      writeStorageCache(nextCache);
      return products;
    } catch (error) {
      if (memoryCache?.data?.length) {
        return memoryCache.data;
      }

      const storageCache = readStorageCache();
      if (storageCache?.data?.length) {
        memoryCache = storageCache;
        return storageCache.data;
      }

      throw error;
    } finally {
      inFlightRequest = null;
    }
  })();

  return inFlightRequest;
}

export async function addInquiry(payload: {
  type: string;
  product_id?: string;
  name?: string;
  phone?: string;
  message?: string;
}) {
  const res = await fetch(PRODUCTS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "addInquiry",
      ...payload,
    }),
  });

  const data = await res.json();

  if (!data?.success) {
    throw new Error("Failed to send inquiry");
  }

  return data;
}
