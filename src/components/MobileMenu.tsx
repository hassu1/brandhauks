'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileMenu(){
     const pathname = usePathname();
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          try {
            const basic = window.Haptic?.Basic;
            basic?.MobileMenu?.();          
          } catch (e) {
            console.error('Haptic re-init failed:', e);
          }
        }
      }, [pathname]);

    return null
}