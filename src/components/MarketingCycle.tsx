import { motion } from "motion/react";
import { Search, Smartphone, MapPin, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "의도적 검색",
    description: "소비자는 해결하고 싶은 문제를 네이버에 검색하며 여정을 시작합니다.",
    tag: "Naver Search"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "SNS & 블로그 탐색",
    description: "숏츠, 릴스, 블로그의 생생한 체험·방문 후기를 통해 마음에 드는 업체를 추려냅니다.",
    tag: "SNS & Blog"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "플레이스 & 리뷰 확인",
    description: "네이버 플레이스에서 업체 정보와 방문자 리뷰, 블로그 후기를 최종적으로 검증합니다.",
    tag: "Naver Place"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "방문 및 예약",
    description: "홈페이지와 위치를 확인한 후, 확신을 가지고 전화하거나 예약 방문을 결정합니다.",
    tag: "Conversion"
  }
];

const services = [
  "브랜드 블로그", "네이버 플레이스 관리", "블로그 상위 노출", "유튜브 숏츠", "인스타 릴스", "네이버 클립"
];

export default function MarketingCycle() {
  return (
    <section className="py-24 px-6 bg-beige overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-bold rounded-full mb-6"
          >
            Consumer Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            소비자가 움직이는 <span className="text-coral">진짜 흐름</span>을 아십니까?
          </motion.h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            단순한 노출이 정답이 아닙니다. 검색부터 방문까지 이어지는 <br className="hidden md:block" />
            소비자의 구매 사이클을 완벽하게 장악해야 합니다.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-navy/5 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory p-8 rounded-3xl border border-charcoal/5 relative group hover:bg-navy hover:text-white transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy mb-6 shadow-sm group-hover:bg-coral group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2 block">Step 0{index + 1}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-navy/10 group-hover:text-coral/30 transition-colors">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-espresso rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden"
        >
          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-coral/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                고은마케팅의 <br />
                <span className="text-coral">고밀도 밀착 마케팅</span>
              </h3>
              <p className="text-white/70 text-lg mb-8">
                우리는 이 모든 사이클에 존재합니다. <br />
                소비자의 시선이 머무는 모든 곳에 최적화된 정보를 배치하여 <br className="hidden md:block" />
                이탈 없는 확실한 성과를 만듭니다.
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">
                    #{service}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-coral rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">통합적 시야</h4>
                    <p className="text-sm text-white/60">단편적인 광고가 아닌 전체적인 마케팅 믹스를 고려합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-coral rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">실질적 전환</h4>
                    <p className="text-sm text-white/60">단순 조회수가 아닌 실제 방문과 매출로 이어지는 기획을 합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-coral rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">밀착 관리</h4>
                    <p className="text-sm text-white/60">대표가 직접 모든 사이클의 퀄리티를 체크하고 관리합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
