import { motion } from "motion/react";
import { BookOpen, MonitorPlay, FileText, Store } from "lucide-react";

const channels = [
  {
    id: "01",
    title: "브랜드 블로그",
    subtitle: "브랜드의 신뢰를 대신 쌓아드립니다.",
    description: "운영 가치, 철학, 전문성, 고객과의 소통 방식, 업체 탄생 스토리 등을 차곡차곡 쌓아갑니다. 고객이 글을 읽으며 '아, 이래서 여기가 인기가 좋구나!' 하고 깊은 신뢰를 느끼게 만드는 기본이자 핵심입니다.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "02",
    title: "SNS (숏츠, 릴스, 클립)",
    subtitle: "숏클릴 제작 & 업로드",
    description: "짧고 강렬한 영상으로 트렌디한 흐름을 타고 궁금증과 호기심을 자극합니다. 수많은 콘텐츠 속에서도 소비자의 눈에 확 들어오게 만들어, 우리 브랜드를 최초로 인지시키는 중요한 역할을 합니다.",
    icon: <MonitorPlay className="w-8 h-8" />,
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    id: "03",
    title: "블로그 포스팅",
    subtitle: "실제 블로거 모집과 배포 그리고 검증 & 상위노출",
    description: "정보성, 홍보성, 후기성 글을 통해 업체에 대한 세밀한 이야기들을 전달합니다. 소비자가 궁금해하는 장단점과 디테일한 정보들을 꼼꼼하게 채워주어 선택에 확신을 더합니다.",
    icon: <FileText className="w-8 h-8" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: "04",
    title: "네이버 플레이스",
    subtitle: "플레이스SEO최적화와 관리 & 상위노출",
    description: "업체의 정확한 정보와 위치를 확인하고, 실제 방문했던 사람들의 리뷰를 통해 마지막으로 검증하는 공간입니다. 풍부하고 진정성 있는 리뷰가 쌓일수록 방문 전환율은 폭발적으로 상승합니다.",
    icon: <Store className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  }
];

export default function MarketingChannels() {
  return (
    <section className="py-24 px-6 bg-navy text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white"
          >
            각 채널이 모여 <br className="md:hidden" />
            <span className="text-coral">하나의 완벽한 정보</span>가 됩니다
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            단순히 여러 곳에 올리는 것이 아닙니다. <br className="hidden md:block" />
            각 채널의 명확한 역할과 의미를 이해하고, 유기적으로 연결하여 폭발적인 시너지를 만듭니다.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden group"
            >
              <div className="flex items-start gap-6">
                <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${channel.bgColor} ${channel.color} group-hover:scale-110 transition-transform duration-300`}>
                  {channel.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-black text-charcoal/30">{channel.id}</span>
                    <h3 className="text-2xl font-bold text-navy">{channel.title}</h3>
                  </div>
                  <h4 className="text-coral font-medium mb-4">{channel.subtitle}</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
