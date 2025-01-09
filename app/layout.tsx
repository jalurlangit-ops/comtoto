'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://phillybellesart.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://phillybellesart.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "8142921"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Comtoto : Deposit Pulsa Tanpa Potongan Dan Slot Deposit Dana",
            "reviewBody": "Comtoto : Deposit Pulsa Tanpa Potongan Dan Slot Deposit Dana, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Comtoto : Deposit Pulsa Tanpa Potongan Dan Slot Deposit Dana</title>
        <meta name="description" content="Comtoto hadir sebagai platform terpercaya bagi para pecinta permainan slot online dengan menawarkan kemudahan dalam melakukan transaksi. Salah satu keunggulan utama Comtoto adalah fitur deposit pulsa tanpa potongan. Dengan ini, Anda dapat melakukan top-up saldo tanpa harus kehilangan sebagian dana karena biaya tambahan" />
        <meta name="keywords" content="Comtoto, Deposit Pulsa Tanpa Potongan, Slot Deposit Dana, Deposit Pulsa Indosat, Slot Gacor 5000, Deposit Pulsa Tri, Slot Gacor Deposit 5000, Macauslot88 Deposit Pulsa IM3, Dana Slot 77, Slot Deposit 1000 Via Dana" />
        <meta name="google-site-verification" content="veMyOTuOGYmEQDMDDL9R58xwmmCMdesJMcTMkYDqZ3Q" />
        <meta name="application-name" content="Comtoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="Comtoto" />
        <meta name="publisher" content="Comtoto" />
        <meta name="copyright" content="Comtoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Comtoto : Deposit Pulsa Tanpa Potongan Dan Slot Deposit Dana" />
        <meta property="og:description" content="Comtoto hadir sebagai platform terpercaya bagi para pecinta permainan slot online dengan menawarkan kemudahan dalam melakukan transaksi. Salah satu keunggulan utama Comtoto adalah fitur deposit pulsa tanpa potongan. Dengan ini, Anda dapat melakukan top-up saldo tanpa harus kehilangan sebagian dana karena biaya tambahan" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="Comtoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Comtoto" />
        <meta name="twitter:title" content="Comtoto : Deposit Pulsa Tanpa Potongan Dan Slot Deposit Dana" />
        <meta name="twitter:description" content="Comtoto hadir sebagai platform terpercaya bagi para pecinta permainan slot online dengan menawarkan kemudahan dalam melakukan transaksi. Salah satu keunggulan utama Comtoto adalah fitur deposit pulsa tanpa potongan. Dengan ini, Anda dapat melakukan top-up saldo tanpa harus kehilangan sebagian dana karena biaya tambahan" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
