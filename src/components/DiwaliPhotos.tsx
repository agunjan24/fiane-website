"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExpand } from "react-icons/fa";
import PhotoLightbox from "./PhotoLightbox";
import { type DiwaliPhoto } from "@/data/diwali2026";

const tileBase =
  "group relative block w-full h-full overflow-hidden rounded-2xl bg-white/5 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

function Tile({
  photo,
  sizes,
  priority,
  onOpen,
}: {
  photo: DiwaliPhoto;
  sizes: string;
  priority?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View photo: ${photo.caption}`}
      className={tileBase}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${photo.focus ?? ""} transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white/90 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <FaExpand size={12} />
      </span>
      <span className="absolute bottom-0 left-0 p-3 sm:p-4 text-left text-xs sm:text-sm text-white leading-snug">
        {photo.caption}
      </span>
    </button>
  );
}

/** The lead photo, rendered beside the impact figure. */
export function DiwaliLeadPhoto({
  photos,
}: {
  photos: DiwaliPhoto[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="relative aspect-[3/2]">
        <Tile
          photo={photos[0]}
          sizes="(max-width: 1024px) 100vw, 60vw"
          onOpen={() => setOpen(0)}
        />
      </div>
      <PhotoLightbox
        photos={photos}
        index={open}
        onChange={setOpen}
        onClose={() => setOpen(null)}
      />
    </>
  );
}

const shapeClass: Record<NonNullable<DiwaliPhoto["shape"]>, string> = {
  wide: "col-span-2",
  tall: "row-span-2",
};

/**
 * Mosaic of the remaining photos. Two columns on phones, four on desktop;
 * "wide" and "tall" tiles span two cells so the 12-cell grid packs with no gaps.
 */
export function DiwaliMosaic({ photos }: { photos: DiwaliPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <ul className="grid grid-flow-dense grid-cols-2 lg:grid-cols-4 auto-rows-[9.5rem] sm:auto-rows-[14rem] lg:auto-rows-[16rem] gap-3 sm:gap-4">
        {photos.slice(1).map((photo, i) => (
          <li
            key={photo.src}
            className={photo.shape ? shapeClass[photo.shape] : ""}
          >
            <Tile
              photo={photo}
              sizes={
                photo.shape === "wide"
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : "(max-width: 1024px) 50vw, 25vw"
              }
              onOpen={() => setOpen(i + 1)}
            />
          </li>
        ))}
      </ul>
      <PhotoLightbox
        photos={photos}
        index={open}
        onChange={setOpen}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
