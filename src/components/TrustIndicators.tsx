import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

function Counter({ value, suffix = "", label }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-bold text-white mb-2 flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-white/80 font-medium">{label}</p>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 2 }}
        className="h-1 bg-white mx-auto mt-4"
      />
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <section className="py-24 px-6 bg-coral text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <Counter value={100} suffix="%" label="대표 직접 기획" />
          <Counter value={90} suffix="%+" label="클라이언트 재계약률" />
          <Counter value={632} suffix="건" label="누적 작업 건수" />
          <Counter value={584} suffix="건" label="매출 증가 사례" />
        </div>
      </div>
    </section>
  );
}
