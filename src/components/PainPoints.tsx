import { motion } from "motion/react";
import { MessageSquare, Target, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: <MessageSquare className="w-10 h-10 text-white" />,
    title: "철저한 소통",
    description: "담당자가 누군지도 모르는 대행사는 그만. 대표와 직접 소통하며 실시간 피드백을 주고받습니다.",
    tag: "Communication"
  },
  {
    icon: <Target className="w-10 h-10 text-white" />,
    title: "맞춤 기획",
    description: "업종별 특성을 무시한 기계적인 광고가 아닌, 브랜드의 강점을 극대화하는 맞춤형 전략을 수립합니다.",
    tag: "Strategy"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-white" />,
    title: "투명한 보고",
    description: "복잡한 용어로 가득한 보고서 대신, 실제 매출과 직결되는 핵심 성과를 투명하게 공유합니다.",
    tag: "Reporting"
  }
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-32 px-6 bg-oatmeal relative overflow-hidden">
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
              Why Go-eun Marketing?
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-6">
              혹시 지금, 내 담당자가 누군지도 모른 채 <br />
              <span className="text-navy relative inline-block">
                광고비만 내고 계신가요?
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
            className="text-lg text-charcoal/60 lg:max-w-sm pb-2"
          >
            대행사에 지친 광고주님들의 마음을 누구보다 잘 압니다. <br />
            고은마케팅은 '진짜 파트너'로서 해결책을 제시합니다.
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
