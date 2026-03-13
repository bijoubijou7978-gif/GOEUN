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
            className="text-navy font-medium mb-4 tracking-wide"
          >
            단 한 곳의 파트너를 위해
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            대표의 모든 노하우를 <br />
            <span className="text-coral">1:1</span>로 쏟아붓습니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-charcoal/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            수십 개의 업체를 기계적으로 관리하지 않습니다. <br />
            고은마케팅은 소수 정예 1:1 관리 시스템으로 <br />
            내 사업처럼 치열하게 고민하고 성과를 만듭니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 1.2 
            }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-navy/90 transition-all shadow-lg hover:shadow-navy/20"
            >
              대표 1:1 무료 상담 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
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
