export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'dome', name: 'Dome Cameras' },
  { id: 'bullet', name: 'Bullet Cameras' },
  { id: 'ptz', name: 'PTZ Cameras' },
  { id: 'dvr-nvr', name: 'DVR/NVR Systems' },
  { id: 'accessories', name: 'Accessories' },
];

export const products: Product[] = [
  // {
  //   id: '1',
  //   name: 'HD Dome Camera 2MP',
  //   category: 'dome',
  //   description: 'High-definition 2MP dome camera with night vision, perfect for indoor surveillance. Features wide-angle lens and vandal-proof housing.',
  //   price: 3499,
  //   image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
  //   features: ['2MP Resolution', 'Night Vision 20m', 'Vandal-proof', 'Wide Angle 110°'],
  //   isFeatured: true,
  // },
  // {
  //   id: '2',
  //   name: 'Pro Bullet Camera 4MP',
  //   category: 'bullet',
  //   description: 'Professional 4MP bullet camera with advanced IR night vision up to 40 meters. Weather-resistant for outdoor installations.',
  //   price: 5999,
  //   image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?w=400&h=400&fit=crop',
  //   features: ['4MP Ultra HD', 'IR Range 40m', 'IP67 Weatherproof', 'Smart Motion Detection'],
  //   isFeatured: true,
  //   isNew: true,
  // },
  // {
  //   id: '3',
  //   name: 'PTZ Camera 360°',
  //   category: 'ptz',
  //   description: 'Full PTZ control with 360° pan, 90° tilt, and 20x optical zoom. Ideal for large area monitoring.',
  //   price: 15999,
  //   image: 'https://images.unsplash.com/photo-1529510131926-6d465e2e8be2?w=400&h=400&fit=crop',
  //   features: ['360° Pan', '20x Optical Zoom', 'Auto Tracking', 'Remote Control'],
  //   isFeatured: true,
  // },
  // {
  //   id: '4',
  //   name: '8 Channel DVR System',
  //   category: 'dvr-nvr',
  //   description: 'Complete 8-channel DVR system with 2TB storage. Supports remote viewing via mobile app.',
  //   price: 12499,
  //   image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  //   features: ['8 Channels', '2TB Storage', 'Mobile App', 'H.265+ Compression'],
  //   isNew: true,
  // },
  // {
  //   id: '5',
  //   name: '16 Channel NVR Pro',
  //   category: 'dvr-nvr',
  //   description: 'Enterprise-grade 16-channel NVR with 4TB storage and 4K support. Perfect for large installations.',
  //   price: 24999,
  //   image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop',
  //   features: ['16 Channels', '4TB Storage', '4K Support', 'RAID Backup'],
  //   isFeatured: true,
  // },
  // {
  //   id: '6',
  //   name: 'Mini Dome 1080P',
  //   category: 'dome',
  //   description: 'Compact mini dome camera with 1080P resolution. Discreet design for offices and retail.',
  //   price: 2499,
  //   image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=400&fit=crop',
  //   features: ['1080P Full HD', 'Compact Design', 'Wide Dynamic Range', 'Audio Support'],
  // },
  // {
  //   id: '7',
  //   name: 'Solar Bullet Camera',
  //   category: 'bullet',
  //   description: 'Wire-free solar-powered bullet camera with built-in battery. Perfect for remote locations.',
  //   price: 8999,
  //   image: 'https://images.unsplash.com/photo-1580910051074-3eb694886f8b?w=400&h=400&fit=crop',
  //   features: ['Solar Powered', 'Wire-free', '4G Connectivity', 'Cloud Storage'],
  //   isNew: true,
  // },
  // {
  //   id: '8',
  //   name: 'CCTV Cable 100m',
  //   category: 'accessories',
  //   description: 'High-quality RG59 coaxial cable with power for CCTV installations. 100 meters roll.',
  //   price: 1999,
  //   image: 'https://images.unsplash.com/photo-1609741199878-a5e0f9c84d10?w=400&h=400&fit=crop',
  //   features: ['100m Length', 'RG59 + Power', 'Weather Resistant', 'Easy Installation'],
  // },
  // {
  //   id: '9',
  //   name: 'Power Supply 8CH',
  //   category: 'accessories',
  //   description: '12V 10A CCTV power supply unit supporting up to 8 cameras. Built-in surge protection.',
  //   price: 1499,
  //   image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
  //   features: ['12V 10A Output', '8 Camera Support', 'Surge Protection', 'LED Indicators'],
  // },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'all') return products;
  return products.filter(p => p.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
