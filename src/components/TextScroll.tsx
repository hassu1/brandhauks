'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

   

export default function TextScroll() {

  

  return (
    <>
      {/* <!-- Start of Text Scroll  section
        ============================================= --> */}
      <section
        id="bi-text-scroll-1"
        className="bi-text-scroll-section-1 position-relative"
      >
        <div className="bi-text-scroll-content">
          <div className="bi-text-scroll-item-1 headline text-uppercase">
            <h3>Brand Hawks Creative Digital Agency</h3>
          </div>
        </div>
      </section>
      {/* <!-- End of Text Scroll section 
        ============================================= --> */}
    </>
  );
}