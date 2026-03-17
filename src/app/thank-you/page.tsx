"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  // TODO: 실제 카카오톡 오픈채팅방 URL로 교체
  const kakaoOpenChatUrl = "https://open.kakao.com/o/gXXXXXXX";

  // 3초 후 자동 리다이렉트 (원하면 활성화)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.open(kakaoOpenChatUrl, "_blank");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

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
            신청 완료!
          </h1>
          <p className="text-text-sub text-sm leading-relaxed mb-1">
            3월 17일 (월) 저녁 7:30에 만나요.
          </p>
          <p className="text-text-muted text-xs">
            아래 카카오톡 오픈채팅방에 꼭 입장해주세요.
            <br />
            강의 링크와 자료를 채팅방에서 안내드립니다.
          </p>
        </div>

        {/* Kakao CTA */}
        <div className="bg-[#FEE500] rounded-xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#1A1A1A] rounded-full animate-pulse" />
            <p className="text-[#1A1A1A] font-bold text-sm">
              필수 입장
            </p>
          </div>
          <p className="text-[#1A1A1A] font-bold text-xl mb-1.5">
            카카오톡 오픈채팅방
          </p>
          <p className="text-[#1A1A1A]/60 text-sm mb-5 leading-relaxed">
            강의 링크 · 실시간 Q&A · 추가 자료
            <br />
            모두 오픈채팅방에서 진행됩니다.
          </p>
          <a
            href={kakaoOpenChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333] text-[#FEE500] font-semibold px-6 py-3.5 rounded-lg transition-all text-sm w-full justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.727 1.818 5.117 4.545 6.463-.2.727-.727 2.636-.818 3.045-.11.5.182.491.382.355.155-.109 2.473-1.682 3.473-2.364.464.064.936.1 1.418.1 5.523 0 10-3.463 10-7.691S17.523 3 12 3z" />
            </svg>
            오픈채팅방 입장하기
          </a>
        </div>

        {/* Info */}
        <div className="bg-bg-card border border-border rounded-xl p-5 mb-6">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-text-muted">일시</span>
              <span className="text-text-main font-medium">3월 17일 (월) 19:30</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <span className="text-text-muted">소요 시간</span>
              <span className="text-text-main font-medium">약 2~3시간</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <span className="text-text-muted">참여 방법</span>
              <span className="text-text-main font-medium">카카오톡 채팅방 내 링크</span>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-text-muted text-sm hover:text-text-sub transition-colors"
        >
          ← 카피라이팅 공식집으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
