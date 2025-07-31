"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


// declare global {
//   interface Window {
//     Haptic?: {
//       Basic?: {
        
//             textanimation?: () => void;
//             PortfolioFilterImage?: () => void;
//       };
//     };
//   }
// }
export default function ServiceAnimate(){

    const pathname = usePathname();
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          try {
            const basic = window.Haptic?.Basic;
            basic?.textanimation?.();          
            basic?.PortfolioFilterImage?.();
          } catch (e) {
            console.error('Haptic re-init failed:', e);
          }
        }
      }, [pathname]);

    return(
        <>
                {/* <!-- End of Service  section 4.2
    ============================================= --> */}
<section id="bi-service-4_2" className="bi-service-section-4_2">
    <div className="bi-service-title-text text-center headline">
        <div className="service-emoji-logo wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1000ms">
            <Image width={800} height={500} style={{width:'15%', height:'auto'}} src="/assets/img/logo/smile.png" alt="" />
        </div>
        <h2 className="">Ditch the Hassle - Say Hello to What&apos;s Next</h2>
    </div>
    <div className="service-matter"></div>
</section>
{/* <!-- End of Service section 4.2
    ============================================= --> */}

        </>
    )
}