'use client';

import { motion, useReducedMotion } from 'framer-motion';

const MOTION_INITIAL = (y) => ({ opacity: 0, y });
const MOTION_ANIMATE = { opacity: 1, y: 0 };

/**
 * Scroll-triggered fade/slide-in. Animates once, respects
 * prefers-reduced-motion by rendering the final state immediately.
 *
 * `as` intentionally only supports 'div' | 'article' — both are written as
 * literal `motion.div` / `motion.article` JSX rather than a computed
 * `motion[as]` lookup. Turbopack's server/client boundary analysis can't
 * follow a dynamic property access into framer-motion's tag-proxy, which
 * crashes prerendering ("createMotionComponent is on the client"); literal
 * JSX tags are statically analyzable and avoid that entirely.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Static = as;
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  const motionProps = {
    className,
    initial: MOTION_INITIAL(y),
    whileInView: MOTION_ANIMATE,
    viewport: { once, amount },
    transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    ...props,
  };

  return as === 'article' ? (
    <motion.article {...motionProps}>{children}</motion.article>
  ) : (
    <motion.div {...motionProps}>{children}</motion.div>
  );
}

/**
 * Wraps a list of children and staggers their entrance via variants. Only
 * ever used with `as="div"` in this project — kept to a literal tag for the
 * same reason as Reveal above.
 */
export function RevealGroup({
  children,
  as: _as, // always renders motion.div; accepted so callers can pass as="div" without it leaking to the DOM
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.2,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const RevealItem = motion.div;
