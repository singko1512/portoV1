import React from 'react'
import { profileImage } from '../data/content'

export function ProfileImage({ variant = 'default', className = '' }) {
  const isCircle = variant === 'circle'
  const sizeClass = isCircle ? 'h-48 w-48 rounded-full' : 'h-72 w-full max-w-xs'

  return (
    <div
      className={`group relative overflow-hidden border border-zinc-800/40 bg-zinc-950 p-1 shadow-cinematic transition duration-500 hover:border-white/50 ${
        isCircle ? 'rounded-full' : 'rounded-2xl'
      } ${sizeClass} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 via-transparent to-black/80" />
      <img
        src={profileImage}
        alt="Daffa Hibban"
        loading="lazy"
        className={`relative z-10 h-full w-full object-cover object-center transition duration-500 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 ${
          isCircle ? 'rounded-full' : 'rounded-xl'
        }`}
      />
    </div>
  )
}
