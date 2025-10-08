import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Empoverse | Digital Agency in Morocco - Web, Design & IT",
  description:
    "Empoverse is a leading digital agency in Morocco. We offer web development, creative design, IT solutions & training. Transform your business with us.",
  keywords: [
    "Empoverse",
    "digital agency Morocco",
    "web development Morocco",
    "creative design Morocco",
    "IT solutions Morocco",
    "training Morocco",
    "Tétouan digital agency",
    "Morocco web design",
    "business transformation",
    "digital marketing Morocco",
  ].join(", "),
  authors: [{ name: "Empoverse Team", url: "https://www.empoverse.com" }],
  creator: "Empoverse Digital Agency",
  publisher: "Empoverse",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.empoverse.com"),
  alternates: {
    canonical: "https://www.empoverse.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.empoverse.com/",
    siteName: "Empoverse",
    title: "Empoverse | Digital Agency in Morocco - Web, Design & IT",
    description:
      "Leading digital agency in Morocco specializing in web development, creative design, IT solutions & training.",
    images: [
      {
        url: "https://www.empoverse.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Empoverse - Digital Agency in Morocco",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@empoverse",
    creator: "@empoverse",
    title: "Empoverse | Digital Agency in Morocco - Web, Design & IT",
    description: "Transform your business with Empoverse: Web Development, IT, Design & Training in Morocco.",
    images: ["https://www.empoverse.com/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "MA",
    "geo.placename": "Tétouan, Morocco",
    "geo.position": "35.5889;-5.3626",
    ICBM: "35.5889, -5.3626",
  },
    generator: 'v0.app'
}

// Enhanced JSON-LD Structured Data with your specifications
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.empoverse.com/#website",
      url: "https://www.empoverse.com/",
      name: "Empoverse - Digital Agency in Morocco",
      description:
        "Leading digital agency in Morocco specializing in web development, creative design, IT solutions & training.",
      publisher: {
        "@id": "https://www.empoverse.com/#organization",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.empoverse.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.empoverse.com/#organization",
      name: "Empoverse",
      url: "https://www.empoverse.com",
      logo: "https://www.empoverse.com/images/logo.png",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tétouan",
        addressCountry: "MA",
      },
      sameAs: [
        "https://www.facebook.com/empoverse",
        "https://www.instagram.com/empoverse0",
        "https://www.linkedin.com/company/empoverse",
      ],
      description:
        "Leading digital agency in Morocco specializing in web development, creative design, IT solutions & training.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212602553740",
        contactType: "customer service",
        email: "contact@empoverse.com",
        availableLanguage: ["English", "Arabic", "French", "Spanish"],
        areaServed: "MA",
      },
      numberOfEmployees: "6",
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 35.5889,
          longitude: -5.3626,
        },
        geoRadius: "1000000",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Modern web applications built with cutting-edge technologies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Creative Design",
              description: "Compelling visual identities and creative solutions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IT Solutions",
              description: "Comprehensive IT infrastructure and support services.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Training",
              description: "Professional training and skill development programs.",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.empoverse.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.empoverse.com/",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.empoverse.com/#localbusiness",
      name: "Empoverse",
      image: "https://www.empoverse.com/images/logo.png",
      telephone: "+212602553740",
      email: "contact@empoverse.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tétouan",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.5889,
        longitude: -5.3626,
      },
      url: "https://www.empoverse.com/",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.empoverse.com/" />

        {/* Enhanced Open Graph Tags */}
        <meta property="og:title" content="Empoverse | Digital Agency in Morocco - Web, Design & IT" />
        <meta
          property="og:description"
          content="Leading digital agency in Morocco specializing in web development, creative design, IT solutions & training."
        />
        <meta property="og:url" content="https://www.empoverse.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.empoverse.com/images/logo.png" />
        <meta property="og:site_name" content="Empoverse" />
        <meta property="og:locale" content="en_US" />

        {/* Enhanced Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Empoverse | Digital Agency in Morocco - Web, Design & IT" />
        <meta
          name="twitter:description"
          content="Transform your business with Empoverse: Web Development, IT, Design & Training in Morocco."
        />
        <meta name="twitter:image" content="https://www.empoverse.com/images/logo.png" />
        <meta name="twitter:site" content="@empoverse" />
        <meta name="twitter:creator" content="@empoverse" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Empoverse" />

        {/* Preconnect and DNS Prefetch for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />

        {/* Brand-Focused Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Performance Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* Brand Association Meta Tags */}
        <meta name="application-name" content="Empoverse" />
        <meta name="msapplication-tooltip" content="Empoverse - Digital Agency in Morocco" />
        <meta name="msapplication-starturl" content="https://www.empoverse.com/" />

        {/* Additional SEO Meta Tags for Brand Recognition */}
        <meta name="author" content="Empoverse Team" />
        <meta name="copyright" content="© 2025 Empoverse. All rights reserved." />
        <meta name="company" content="Empoverse" />
        <meta name="classification" content="Digital Agency" />
        <meta name="category" content="Web Development, Design, IT Solutions, Training" />
        <meta name="coverage" content="Morocco" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />

        {/* Google Analytics 4 - Consent Friendly */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
