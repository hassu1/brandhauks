// app/components/ScrollFixer.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollFixer() {
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [pathname])

  return null
}
