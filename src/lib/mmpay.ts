// MyanMyanPay SDK Configuration
// Replace these with your actual credentials when you get them

export interface MMPayConfig {
  appId: string;
  publishableKey: string;
  secretKey: string;
  apiBaseUrl: string;
}

export interface PaymentItem {
  name: string;
  price: number;
  quantity: number;
  description?: string;
}

export interface PaymentRequest {
  orderId: string;
  amount: number;
  items: PaymentItem[];
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResponse {
  success: boolean;
  orderId: string;
  paymentUrl: string;
  qrCode?: string;
  message?: string;
}

// Default config (placeholder - you'll replace with real values)
export const DEFAULT_MMPAY_CONFIG: MMPayConfig = {
  appId: "YOUR_APP_ID",
  publishableKey: "YOUR_PUBLISHABLE_KEY",
  secretKey: "YOUR_SECRET_KEY",
  apiBaseUrl: "https://api.myanmyanpay.com/v1"
};

// Product types for the store
export type ProductType = 'book' | 'course' | 'donation';

export interface StoreProduct {
  id: string;
  type: ProductType;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image?: string;
  features?: string[];
  isAvailable: boolean;
}

// Sample products (replace with your actual content)
export const SAMPLE_BOOKS: StoreProduct[] = [
  {
    id: "book-001",
    type: "book",
    title: "The Developer's Guide to AI Integration",
    description: "A comprehensive guide on integrating AI into modern web applications. Learn practical patterns, ethical considerations, and real-world implementation strategies.",
    price: 25000,
    originalPrice: 35000,
    image: "/assets/books/ai-guide.jpg",
    features: [
      "300+ pages of practical content",
      "10 real-world project examples",
      "Code samples in Python & JavaScript",
      "Lifetime updates included"
    ],
    isAvailable: true
  },
  {
    id: "book-002",
    type: "book",
    title: "Building with Astro & Tailwind",
    description: "Learn how to build blazing fast websites with Astro and style them beautifully with Tailwind CSS. From beginner to production-ready.",
    price: 18000,
    image: "/assets/books/astro-tailwind.jpg",
    features: [
      "200+ pages",
      "Complete project walkthroughs",
      "Deployment strategies",
      "Performance optimization tips"
    ],
    isAvailable: true
  }
];

export const SAMPLE_COURSES: StoreProduct[] = [
  {
    id: "course-001",
    type: "course",
    title: "Full-Stack Development Masterclass",
    description: "A 12-week intensive course covering modern full-stack development. From frontend frameworks to backend APIs and deployment.",
    price: 150000,
    originalPrice: 200000,
    image: "/assets/courses/fullstack.jpg",
    features: [
      "48+ hours of video content",
      "Weekly live Q&A sessions",
      "Private Discord community",
      "Certificate of completion",
      "Job placement assistance"
    ],
    isAvailable: true
  },
  {
    id: "course-002",
    type: "course",
    title: "AI Agent Development with OpenClaw",
    description: "Learn to build intelligent AI agents that can automate tasks, manage workflows, and integrate with your favorite tools.",
    price: 85000,
    image: "/assets/courses/openclaw.jpg",
    features: [
      "24+ hours of content",
      "Hands-on projects",
      "Agent deployment guide",
      "Community access"
    ],
    isAvailable: true
  }
];

export const DONATION_TIERS = [
  { amount: 5000, label: "☕ Coffee", description: "Buy me a coffee" },
  { amount: 10000, label: "🍜 Lunch", description: "Support my lunch" },
  { amount: 25000, label: "📚 Book", description: "Help me buy a book" },
  { amount: 50000, label: "💻 Tool", description: "Support development tools" },
  { amount: 100000, label: "🚀 Sponsor", description: "Become a sponsor" },
];

// Helper to format MMK price
export function formatMMK(amount: number): string {
  return new Intl.NumberFormat('my-MM', {
    style: 'currency',
    currency: 'MMK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// Helper to generate order ID
export function generateOrderId(type: ProductType): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${type.toUpperCase()}-${timestamp}-${random}`;
}