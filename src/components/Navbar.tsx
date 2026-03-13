import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-charcoal/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-black tracking-tighter text-navy">
          GOEUN <span className="text-coral">MARKETING</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#portfolio" className="text-sm font-semibold hover:text-coral transition-colors">포트폴리오</a>
          <a href="#contact" className="text-sm font-semibold hover:text-coral transition-colors">상담신청</a>
          <a 
            href="tel:010-6542-3522" 
            className="flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-navy/90 transition-all"
          >
            <Phone className="w-4 h-4" />
            전화상담
          </a>
        </div>

        {/* Floating Action Buttons for Mobile */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 md:hidden">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://pf.kakao.com"
            className="w-14 h-14 bg-[#FEE500] rounded-full flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-7 h-7 text-[#3C1E1E]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:010-6542-3522"
            className="w-14 h-14 bg-navy rounded-full flex items-center justify-center shadow-lg"
          >
            <Phone className="w-7 h-7 text-white" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
