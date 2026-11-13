"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.77, 0, 0.18, 1] as const;

/** Image opens like a shutter from the bottom, while the photo eases back from a zoom. */
export default function WipeImage({
  src,
  alt,
  sizes,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  delay?: number;
}) {
  // Watch an unclipped wrapper: browsers treat a fully clipped element as
  // invisible, so watching the shutter itself never triggers the reveal.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className="wipe-anchor">
      <motion.div
        className={`wipe ${className ?? ""}`}
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.3, ease: EASE, delay }}
      >
        <motion.div
          className="wipe__img"
          initial={{ scale: 1.35 }}
          animate={inView ? { scale: 1 } : undefined}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1], delay }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} />
        </motion.div>
      </motion.div>
    </div>
  );
}
