import "./globals.css";
import Script from "next/script";
import AnimationInit from "@components/components/AnimationInit";

export const metadata = {
  title: "Brand Hawks - Dubai, UAE",
  description: "Brand Hawks is an emerging digital marketing, web and app development agency in Dubai, UAE. Brand Hawks has assisted and completed over 110+ projects in Dubai.",
  alternates: {
    canonical: 'https://www.brandhawks.ae/',
  },
  keywords:
    "agency, app, business, company, corporate, designer, freelance, fullpage, modern, office, personal, portfolio, professional, web, web agency",
  icons: {
    icon: "/assets/img/logo/f-icon.png",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       {/* <!-- Standard favicon --> */}
        <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favIcons/16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favIcons/32x32.png"/>
        
        {/* <!-- Apple devices (iPhones, iPads) --> */}
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favIcons/180x180"/>
        
        {/* <!-- Android devices + general web --> */}
        <link rel="icon" type="image/png" sizes="192x192" href="assets/images/favIcons/192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="assets/images/favIcons/512x512.png"/>
      {/* <!-- Mobile Specific Meta --> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/assets/css/fontawesome.css"/>
      <link rel="stylesheet" href="/assets/css/animate.css"/>
      <link rel="stylesheet" href="/assets/css/global.css"/>
      <link rel="stylesheet" href="/assets/css/swiper.min.css"/>
      <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
      <link rel="stylesheet" href="/assets/css/style.css"/>
      </head>

      <body className="home-4">
        {/* <AnimationInit /> */}
     

        {children}

       

        {/* Load jQuery and essential plugins first */}
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/jquery.marquee.min.js"
          strategy="beforeInteractive"
        />
        
        {/* Then load all other scripts */}
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/counter.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/knob.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollToPlugin.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.filterizr.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/hover-revel.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/split-type.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.meanmenu.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/tilt.jquery.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/matter.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/script.js" strategy="afterInteractive" />

        <Script id="preloader-script" strategy="afterInteractive">
          {`
          setTimeout(() => {
            document.getElementById('preloader').style.backgroundImage = "url('../img/white-01.png')";
          }, 2000);
        `}
        </Script>
      </body>
    </html>
  );
}
