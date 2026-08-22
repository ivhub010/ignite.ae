'use client';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 4);
        setValue(Math.round(ease * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { value, ref };
}

function AedCounter() {
  const { value, ref } = useCountUp(123000, 2400);
  return <div ref={ref} className="pip-impact-num">AED {value.toLocaleString()}+</div>;
}

function Counter({ color, target, prefix = '', suffix = '' }: { color: string; target: number; prefix?: string; suffix?: string }) {
  const { value, ref } = useCountUp(target, 1800);
  return <div ref={ref} className="impact-num" style={{ color }}>{prefix}{value.toLocaleString()}{suffix}</div>;
}

const PinkIsPunkClient = { AedCounter, Counter };
export default PinkIsPunkClient;