import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// URL이 유효한지 확인 (빈 문자열이거나 placeholder인 경우 client 생성을 건너뜀)
const isConfigured = supabaseUrl && !supabaseUrl.includes('your_supabase');

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any; // 설정되지 않았을 경우 null 반환 (ContactForm에서 체크함)

if (!isConfigured) {
  console.warn('Supabase 설정이 되어 있지 않습니다. 환경 변수를 확인해 주세요.');
} else {
  // 연결 테스트
  supabase.from('consultations').select('id').limit(1)
    .then(({ error }) => {
      if (error) {
        console.error('Supabase 연결 테스트 실패:', error.message);
      } else {
        console.log('Supabase 연결 성공');
      }
    })
    .catch(err => console.error('Supabase 연결 중 예외 발생:', err));
}
