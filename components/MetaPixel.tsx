"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function MetaPixel() {
  const pathname = usePathname();
  const search = useSearchParams();

  // Track route changes as page views
  useEffect(() => {
    if (!pixelId || typeof window === "undefined") return;
    // page_view on every route change
    // @ts-ignore
    window.fbq?.("track", "PageView");
  }, [pathname, search]);

  if (!pixelId) return null;

  return (
    <>
      {/* Meta Pixel base code */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* NoScript fallback (fires on first load if JS disabled) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
