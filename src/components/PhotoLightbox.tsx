"use client";

import { useEffect, useRef, type TouchEvent } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export interface LightboxPhoto {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface PhotoLightboxProps {
  photos: LightboxPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD_PX = 50;

/**
 * Full-screen photo viewer shared by event sections. Built on the native
 * <dialog> element, which supplies the focus trap, Escape-to-close, and
 * returning focus to the thumbnail that opened it.
 */
export default function PhotoLightbox({
  photos,
  index,
  onChange,
  onClose,
}: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = index !== null;
  const count = photos.length;

  // Sync the dialog with the open state and lock page scroll while open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + count) % count);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDialogElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;
    const deltaX = e.changedTouches[0].clientX - startX;
    if (deltaX > SWIPE_THRESHOLD_PX) go(-1);
    else if (deltaX < -SWIPE_THRESHOLD_PX) go(1);
  };

  const photo = index !== null ? photos[index] : null;

  const navButton =
    "absolute top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-gold transition-colors";

  return (
    <dialog
      ref={dialogRef}
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(e) => {
        // A click on the dialog itself (the dimmed surround) closes it.
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        else if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black/80"
    >
      {photo && (
        <div
          className="flex h-full w-full flex-col"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-sm text-white/70" aria-live="polite">
              {index! + 1} / {count}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photo viewer"
              autoFocus
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-gold transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous photo"
                  className={`${navButton} left-3 sm:left-6`}
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next photo"
                  className={`${navButton} right-3 sm:right-6`}
                >
                  <FaChevronRight size={16} />
                </button>
              </>
            )}
          </div>

          <p className="mx-auto max-w-3xl px-6 py-4 text-center text-sm sm:text-base text-white/90 leading-snug">
            {photo.caption}
          </p>
        </div>
      )}
    </dialog>
  );
}
