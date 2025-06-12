'use client';

import { domAnimation, LazyMotion, m } from 'framer-motion';

export const MotionDiv = ({ children, ...props }) => (
  <LazyMotion features={domAnimation}>
    <m.div {...props}>{children}</m.div>
  </LazyMotion>
);
