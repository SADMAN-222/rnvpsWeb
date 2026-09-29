'use client';

import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

type Variant = 'up' | 'left' | 'scale';

const variantClass: Record<Variant, string> = {
  up:    'reveal',
  left:  'reveal-left',
  scale: 'reveal-scale',
};

/**
 * AnimateIn – wraps any children in a scroll-triggered reveal animation.
 *
 * Props:
 *  - variant  : 'up' (default) | 'left' | 'scale'
 *  - delay    : extra CSS transition-delay in ms (stagger children manually)
 *  - stagger  : when true, automatically staggers *direct* children by index
 *  - className: forwarded to the wrapper element
 *  - as       : HTML element tag for the wrapper (default 'div')
 */
export function AnimateIn({
  children,
  variant = 'up',
  delay = 0,
  stagger = false,
  className = '',
  as: Tag = 'div',
  style,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  stagger?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If stagger, set CSS custom property --i on each direct child
    if (stagger) {
      Array.from(el.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--i', String(i));
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (stagger) {
      // Observe each child individually so they cascade in
      Array.from(el.children).forEach((child) => {
        child.classList.add(variantClass[variant]);
        observer.observe(child);
      });
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [variant, stagger]);

  const cls = [variantClass[variant], className].filter(Boolean).join(' ');
  const extraStyle: CSSProperties = delay
    ? { transitionDelay: `${delay}ms`, ...style }
    : (style ?? {});

  // @ts-expect-error dynamic tag
  return (
    <Tag
      ref={ref}
      className={stagger ? className : cls}
      style={stagger ? style : extraStyle}
      data-stagger={stagger ? '' : undefined}
    >
      {children}
    </Tag>
  );
}
