import './globals.css';
import { Cinzel, EB_Garamond } from 'next/font/google';
import config from '@/lib/data';

const display = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});
const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"Event","name":"Wisuda Dimas Prasetyo","description":"Undangan wisuda digital"};

export const metadata = {
  metadataBase: new URL("https://undangan-wisuda-ten.vercel.app"),
  title: "Undangan Wisuda Digital — Dimas Prasetyo",
  description: "Undangan syukuran wisuda digital yang elegan. Bagikan kebanggaan kelulusan dan undang orang tersayang untuk merayakannya.",
  applicationName: "Undangan Digital",
  keywords: ["undangan wisuda", "undangan syukuran wisuda", "undangan kelulusan digital", "graduation invitation"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://undangan-wisuda-ten.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://undangan-wisuda-ten.vercel.app",
    siteName: "Undangan Digital",
    title: "Undangan Wisuda Digital — Dimas Prasetyo",
    description: "Undangan syukuran wisuda digital yang elegan. Bagikan kebanggaan kelulusan dan undang orang tersayang untuk merayakannya.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Undangan Wisuda Digital — Dimas Prasetyo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Wisuda Digital — Dimas Prasetyo",
    description: "Undangan syukuran wisuda digital yang elegan. Bagikan kebanggaan kelulusan dan undang orang tersayang untuk merayakannya.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#1e2a4a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${garamond.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
