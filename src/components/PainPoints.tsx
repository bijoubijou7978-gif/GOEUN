import { motion } from "motion/react";
import { MessageSquare, Target, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: <MessageSquare className="w-10 h-10 text-white" />,
    title: "대표 직접 1:1 밀착 관리",
    description: "수시로 바뀌는 담당자, 느린 피드백에 지치셨나요? 고은마케팅은 대표가 직접 모든 과정을 1:1로 통제하며 압도적인 속도와 퀄리티를 보장합니다.",
    tag: "Communication"
  },
  {
    icon: <Target className="w-10 h-10 text-white" />,
    title: "매출 직결형 맞춤 전략",
    description: "남들과 똑같은 템플릿, 기계적인 복붙 포스팅은 안 합니다. 오직 대표님의 브랜드만을 위한 치열한 분석으로 매출을 견인하는 전략을 짭니다.",
    tag: "Strategy"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-white" />,
    title: "성과 중심의 투명한 데이터",
    description: "의미 없는 조회수나 허수 트래픽으로 포장하지 않습니다. 실제 유입과 전환, 그리고 매출이 어떻게 달라졌는지 팩트 기반의 데이터로만 보고합니다.",
    tag: "Reporting"
  }
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-1.5 bg-coral/10 text-coral text-sm font-bold rounded-full mb-6"
            >
              Why GOEUN Marketing?
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-6">
              담당자가 누군지도 모르는 공장형 대행사, <br />
              언제까지 <span className="text-navy relative inline-block">
                광고비만 버리실 건가요?
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-3 bg-coral/20 -z-10" 
                />
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/60 lg:max-w-sm pb-2 font-medium leading-relaxed"
          >
            단순 노출만 약속하고 책임지지 않는 마케팅은 끝났습니다. <br />
            고은마케팅은 오직 <strong className="text-navy font-bold">'매출 상승'</strong>이라는 결과로만 증명하는 진짜 파트너입니다.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-coral/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl shadow-charcoal/5 border border-charcoal/5 h-full flex flex-col transition-all duration-500 group-hover:border-coral/30">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center shadow-lg shadow-navy/20 group-hover:bg-coral group-hover:rotate-6 transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/20 group-hover:text-coral/40 transition-colors">
                    {item.tag}
                  </span >
                </div>

                <h3 className="text-2xl font-black mb-6 group-hover:text-navy transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-charcoal/60 leading-relaxed text-lg mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-navy/40 group-hover:text-coral transition-colors">
                  <div className="w-8 h-[2px] bg-current" />
                  <span>Solution {index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
