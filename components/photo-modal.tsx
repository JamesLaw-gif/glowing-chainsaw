"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface PhotoModalProps {
  src: string
  alt: string
  children: React.ReactNode
}

export default function PhotoModal({ src, alt, children }: PhotoModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Klikbare thumbnail of element */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-coral transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={src.startsWith("/") ? src : `/${src}`}
                alt={alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
