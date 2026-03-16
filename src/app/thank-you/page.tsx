"use client";

import Link from "next/link";

export default function ThankYouPage() {
  // TODO: 실제 카카오톡 오픈채팅방 URL로 교체
  const kakaoOpenChatUrl = "https://open.kakao.com/o/gXXXXXXX";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-gradient-to-br from-primary/20 to-bg-card border border-primary/30 rounded-3xl p-10">
          {/* Success Icon */}
          <div className="text-6xl mb-6">🎉</div>

          <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
            신청이 완료되었습니다!
          </h1>

          <p className="text-text-sub mb-2 leading-relaxed">
            입력하신 이메일로 강의 상세 안내를 보내드렸습니다.
          </p>
          <p className="text-text-muted text-sm mb-8">
            메일이 안 보이면 스팸함도 확인해주세요.
          </p>

          {/* Kakao CTA */}
          <div className="bg-[#FEE500] rounded-2xl p-6 mb-6">
            <p className="text-[#3C1E1E] font-bold text-lg mb-2">
              카카오톡 오픈채팅방에 입장하세요!
            </p>
            <p className="text-[#3C1E1E]/70 text-sm mb-4">
              수강생 전용 커뮤니티에서 실시간 Q&A,
              <br />
              마케팅 팁, 네트워킹을 즐기세요.
            </p>
            <a
              href={kakaoOpenChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3C1E1E] hover:bg-[#2A1515] text-[#FEE500] font-bold px-8 py-3.5 rounded-xl text-lg transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.727 1.818 5.117 4.545 6.463-.2.727-.727 2.636-.818 3.045-.11.5.182.491.382.355.155-.109 2.473-1.682 3.473-2.364.464.064.936.1 1.418.1 5.523 0 10-3.463 10-7.691S17.523 3 12 3z" />
              </svg>
              카카오톡 오픈채팅방 입장하기
            </a>
          </div>

          {/* Bonus */}
          <div className="bg-bg-card border border-border rounded-xl p-5 mb-6">
            <p className="text-sm text-text-muted mb-2">
              🎁 오픈채팅방 입장 시 추가 혜택
            </p>
            <ul className="text-text-sub text-sm space-y-1.5 text-left">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                병원 마케팅 체크리스트 PDF
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                후킹 문구 템플릿 50종
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                네이버 플레이스 최적화 가이드
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="text-text-muted text-sm hover:text-text-sub transition-colors"
          >
            ← 후킹공식 250가지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
