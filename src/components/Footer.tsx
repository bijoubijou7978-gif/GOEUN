export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end border-b border-white/10 pb-12 mb-12">
          <div>
            <h2 className="text-2xl font-black text-white mb-6">GOEUN MARKETING</h2>
            <p className="max-w-md leading-relaxed">
              고은마케팅은 단순한 대행사가 아닙니다. <br />
              광고주의 성장을 최우선으로 생각하는 1:1 밀착 마케팅 파트너입니다.
            </p>
          </div>
          <div className="text-right">
            <p className="text-white font-bold mb-2">상담문의</p>
            <p className="text-2xl text-coral font-bold">010-6542-3522</p>
            <p className="mt-2">평일 10:00 - 18:00 (주말/공휴일 휴무)</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 text-sm">
          <p>© 2026 Go-eun Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
