'use client'

import { useState } from 'react'

interface SafeImageProps {
  src: string
  alt: string
  /** CSS object-position value, e.g. "center" or "70% center" */
  position?: string
  /** Short label shown in the premium fallback when the image is missing */
  fallbackLabel?: string
  /** Optional second line in the fallback */
  fallbackHint?: string
  priority?: boolean
  className?: string
}

/**
 * Renders a local brand image and, if the file is missing or fails to load,
 * falls back to a premium CSS placeholder (warm gradient + brand mark).
 * This keeps the landing page beautiful even before real assets are dropped
 * into /public/brand.
 */
export function SafeImage({
  src,
  alt,
  position = 'center',
  fallbackLabel = 'Yayoo Femme',
  fallbackHint = 'Sélection personnalisée',
  priority = false,
  className = '',
}: SafeImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
        style={{
          background:
            'radial-gradient(circle at 78% 18%, rgba(232,198,189,0.55), transparent 42%), linear-gradient(135deg, #FFFDFC 0%, #F6E8E4 52%, #F3ECE5 100%)',
        }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(167,100,93,0.10)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <span className="font-serif text-lg italic tracking-tight text-[#A7645D]">{fallbackLabel}</span>
          <span className="h-px w-10 bg-[#C98278]/50" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8B7B70]">
            {fallbackHint}
          </span>
        </div>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      style={{ objectPosition: position }}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}
