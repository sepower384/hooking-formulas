"use client";

import Link from "next/link";

export default function ThankYouPage() {
  // TODO: 실제 카카오톡 오픈채팅방 URL로 교체
  const kakaoOpenChatUrl = "https://open.kakao.com/o/gXXXXXXX";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Success */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <svg width="28" height="28" fill="none" stroke="#E11D48" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
            신청이 완료되었습니다
          </h1>
          <p className="text-text-sub text-sm leading-relaxed">
            입력하신 이메일로 강의 상세 안내를 보내드렸습니다.
            <br />
            <span className="text-text-muted">메일이 안 보이면 스팸함도 확인해주세요.</span>
          </p>
        </div>

        {/* Kakao CTA */}
        <div className="bg-[#FEE500] rounded-xl p-6 mb-4">
          <p className="text-[#1A1A1A] font-bold text-lg mb-1.5">
            카카오톡 오픈채팅방 입장
          </p>
          <p className="text-[#1A1A1A]/60 text-sm mb-5 leading-relaxed">
            수강생 전용 커뮤니티에서 실시간 Q&A와 마케팅 팁을 받아보세요.
          </p>
          <a
            href={kakaoOpenChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333] text-[#FEE500] font-semibold px-6 py-3 rounded-lg transition-all text-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.727 1.818 5.117 4.545 6.463-.2.727-.727 2.636-.818 3.045-.11.5.182.491.382.355.155-.109 2.473-1.682 3.473-2.364.464.064.936.1 1.418.1 5.523 0 10-3.463 10-7.691S17.523 3 12 3z" />
            </svg>
            오픈채팅방 입장하기
          </a>
        </div>

        {/* Bonus */}
        <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
          <p className="text-[10px] font-bold tracking-[0.15em] text-primary uppercase mb-4">
            Bonus
          </p>
          <ul className="space-y-3">
            {[
              "병원 마케팅 체크리스트 PDF",
              "후킹 문구 템플릿 50종",
              "네이버 플레이스 최적화 가이드",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-text-sub">
                <div className="w-1 h-1 bg-primary rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-text-muted text-sm hover:text-text-sub transition-colors"
        >
          ← 후킹공식 250가지로 돌아가기
        </Link>
      </div>
    </div>
  );
}
