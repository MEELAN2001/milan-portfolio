'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Pointer-driven 3D tilt with a soft spring return. `max` is the peak
 * rotation in degrees; `glare` adds a subtle light sweep that tracks the
 * pointer for depth without relying on a real light source.
 */
export default function TiltCard({
  children,
  className,
  max = 10,
  glare = true,
  scale = 1.015,
  variants,
  ...props
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springCfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springCfg);
  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);

  if (shouldReduceMotion) {
    // `variants` is destructured out above (motion-only) so it never leaks
    // onto this plain element as an invalid DOM attribute.
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  function handlePointerMove(e) {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden="true"
          className="tilt-glare"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 55%)`,
          }}
        />
      )}
    </motion.div>
  );
}
