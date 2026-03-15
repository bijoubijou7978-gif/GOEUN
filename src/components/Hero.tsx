import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Floating Object */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-floating" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-navy/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-coral font-bold mb-4 tracking-widest text-sm md:text-base"
          >
            매출의 판도를 바꾸는 압도적 마케팅
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.15] mb-6 text-navy tracking-tight"
          >
            공장형 대행사에 <br />
            지치셨습니까? <br />
            <span className="text-coral">결과로 증명</span>합니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-charcoal/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            단순히 상위 노출만 약속하는 마케팅은 죽었습니다. <br />
            고은마케팅은 오직 <strong className="text-navy font-bold">소수 정예 파트너</strong>만을 위해 <br />
            대표가 직접 모든 사이클을 통제하고 <strong className="text-navy font-bold">압도적인 매출 성과</strong>를 만듭니다.
          </motion.p>
        </div>

        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="CEO working"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-oatmeal rounded-2xl -z-10 shadow-inner" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-coral/20 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
