import { motion } from "motion/react";

const projects = [
  {
    title: "프리미엄 피트니스 & 댄스 스튜디오",
    category: "피트니스 / 다이어트 / 댄스",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    description: "로컬 키워드 상위 노출 및 신규 회원 문의 300% 증가",
    successRate: "98%"
  },
  {
    title: "감성 숙소 & 독채 풀빌라",
    category: "공간 / 숙박업",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    description: "비수기 예약률 80% 달성 및 브랜드 블로그 브랜딩",
    successRate: "95%"
  },
  {
    title: "프리미엄 입주청소 전문 브랜드",
    category: "입주청소 전문",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
    description: "플레이스 최적화 및 지역 맘카페 바이럴 마케팅 성공",
    successRate: "92%"
  },
  {
    title: "디자인 인테리어 전문 업체",
    category: "인테리어 업체",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "포트폴리오 기반 브랜딩 및 고단가 계약 전환 성공",
    successRate: "96%"
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            핵심 포트폴리오
          </motion.h2>
          <p className="text-charcoal/60">다양한 업종의 성공 레퍼런스로 실력을 증명합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-oatmeal rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                {/* Mockup Frame Simulation */}
                <div className="absolute inset-0 p-4">
                  <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                    {/* Hover Scroll Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto"
                        whileHover={{ y: "-50%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Overlay on hover (Desktop) / Always visible (Mobile) */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                  <span className="text-coral font-bold text-sm mb-2 uppercase tracking-wider">매출 상승 성공률</span>
                  <span className="text-4xl font-bold mb-4">{project.successRate}</span>
                  <div className="h-1 w-12 bg-coral rounded-full mb-4"></div>
                  <p className="text-sm opacity-80">고은마케팅의 전략으로<br />증명된 실질적 성과</p>
                </div>

                {/* Mobile Success Badge */}
                <div className="absolute top-4 right-4 bg-navy text-white px-4 py-2 rounded-full text-xs font-bold md:hidden shadow-lg border border-white/20">
                  성공률 {project.successRate}
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-coral text-sm font-bold mb-2">{project.category}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-charcoal/60">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
