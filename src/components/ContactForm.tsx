import { motion } from "motion/react";
import React, { useState } from "react";
import { Check, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

const marketingOptions = [
  "플레이스 최적화 & 상위 노출",
  "체험단 모집",
  "SNS (숏츠, 릴스) 영상 배포",
  "브랜드 블로그 운영",
  "최상위 블로그 배포"
];

export default function ContactForm() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option) 
        : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 환경 변수 읽기 (Vite 방식)
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    // 설정 확인 로그 및 경고
    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your_supabase') || supabaseKey.includes('your_supabase')) {
      alert('Supabase 설정이 누락되었습니다.\n\n우측 상단 [Settings] -> [Environment Variables] 메뉴에서\nVITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 등록해 주세요.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const company = formData.get("company") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    try {
      // 10초 타임아웃 설정
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('서버 응답 시간이 초과되었습니다. (네트워크 상태를 확인해 주세요)')), 10000)
      );

      // 데이터 삽입 실행
      if (!supabase) {
        throw new Error('Supabase 클라이언트가 초기화되지 않았습니다. 환경 변수 설정을 확인해 주세요.');
      }

      const insertPromise = supabase
        .from('consultations')
        .insert([
          { 
            company, 
            name, 
            phone, 
            marketing_options: selectedOptions, 
            message,
            created_at: new Date().toISOString()
          }
        ]);

      const result = await Promise.race([insertPromise, timeoutPromise]) as any;

      if (result.error) throw result.error;
      
      setIsSubmitted(true);
      console.log('Successfully submitted to Supabase');
    } catch (error: any) {
      console.error('Supabase submission error:', error);
      alert(`신청 중 오류가 발생했습니다.\n\n사유: ${error.message || '알 수 없는 오류'}\n\n도움말: 환경 변수가 정확한지, 혹은 Supabase의 RLS 설정이 'Disabled'인지 다시 한번 확인해 주세요.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-oatmeal">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            내 사업을 가장 잘 이해해 줄 마케팅 파트너, <br />
            지금 바로 대표와 1:1로 상의하세요.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-charcoal/5"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">상담 신청이 완료되었습니다!</h3>
              <p className="text-charcoal/60">대표가 직접 확인 후 24시간 이내에 연락드리겠습니다.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Floating Label Inputs */}
                {[
                  { id: "company", label: "업체명", placeholder: "업체명을 입력해 주세요" },
                  { id: "name", label: "담당자 이름", placeholder: "담당자 이름을 입력해 주세요" },
                  { id: "phone", label: "연락처", placeholder: "연락처를 입력해 주세요" },
                ].map((field) => (
                  <div key={field.id} className="relative group">
                    <input
                      type="text"
                      id={field.id}
                      name={field.id}
                      required
                      className="w-full bg-ivory border-2 border-transparent focus:border-navy rounded-2xl px-6 py-4 outline-none transition-all peer placeholder-transparent"
                      placeholder={field.placeholder}
                    />
                    <label
                      htmlFor={field.id}
                      className="absolute left-6 top-4 text-charcoal/40 transition-all pointer-events-none peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-navy peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-navy peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Pill Buttons for Multi-select */}
              <div>
                <p className="text-sm font-bold mb-4 text-charcoal/70">어떤 마케팅이 고민이신가요? (중복 선택 가능)</p>
                <div className="flex flex-wrap gap-3">
                  {marketingOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleOption(option)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all transform active:scale-95 ${
                        selectedOptions.includes(option)
                          ? "bg-navy text-white shadow-lg scale-105"
                          : "bg-ivory text-charcoal/60 hover:bg-charcoal/5"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea with character count */}
              <div className="relative">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  className="w-full bg-ivory border-2 border-transparent focus:border-navy rounded-2xl px-6 py-4 min-h-[150px] outline-none transition-all"
                  placeholder="예: 체육관 신규 원생 문의가 줄었어요, 펜션 비수기 예약이 안 잡혀요 등 현재 가장 답답한 점을 편하게 남겨주세요."
                />
                <div className="absolute bottom-4 right-4 text-xs text-charcoal/40">
                  {message.length} / 500자
                </div>
              </div>

              {/* Pulse Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                animate={!isSubmitting ? { scale: [1, 1.02, 1] } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-full bg-coral text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-coral/20 hover:bg-coral/90 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    대표 1:1 무료 진단 신청하기
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
