"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LandingPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    // TODO: 실제 API 연동
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-bold tracking-[0.15em] text-text-muted uppercase">
              Hooking Formula
            </span>
          </Link>
          <a
            href="#signup"
            className="text-sm text-primary font-medium hover:text-primary-light transition-colors"
          >
            신청하기 →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary">선착순 30명 한정</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            병원 마케팅,
            <br />
            더 이상 대행사에
            <br />
            <span className="text-primary">의존하지 마세요</span>
          </h1>
          <p className="text-text-sub text-lg max-w-xl mx-auto leading-relaxed mb-10">
            500개 병원 마케팅 경험으로 만든 실전 강의.
            <br />
            6주 안에 자체 마케팅 시스템을 완성합니다.
          </p>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
          >
            무료 강의 안내 받기
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Pain Points
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            이런 고민,
            <span className="text-text-sub"> 하고 계시죠?</span>
          </h2>
          <div className="space-y-3">
            {[
              "매달 대행사비는 나가는데 신환은 안 늘어요",
              "블로그, 인스타, 광고... 뭘 해야 할지 모르겠어요",
              "마케팅 성과를 측정할 수가 없어요",
              "대행사를 바꿔봐도 결과는 비슷해요",
              "진료는 자신 있는데 마케팅은 막막해요",
            ].map((pain, i) => (
              <div
                key={i}
                className="relative flex items-center gap-4 bg-bg-card border border-border rounded-lg px-6 py-4 pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/40 rounded-l-lg" />
                <span className="text-text-sub text-sm">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            What You Get
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            이 강의에서 얻어가는 것
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                num: "01",
                title: "병원 전문 마케팅 전략",
                desc: "피부과, 치과, 성형외과 등 진료과목별 맞춤 전략",
              },
              {
                num: "02",
                title: "신환 유입 시스템 구축",
                desc: "광고비 의존 없이 꾸준히 환자가 오는 시스템",
              },
              {
                num: "03",
                title: "대행 없이 자체 마케팅",
                desc: "월 수백만 원 대행비를 절약하는 인하우스 마케팅",
              },
              {
                num: "04",
                title: "실전 템플릿 30종 제공",
                desc: "블로그, SNS, 광고 카피 바로 쓸 수 있는 템플릿",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-light transition-all"
              >
                <span className="text-3xl font-bold text-border-light font-mono">
                  {b.num}
                </span>
                <h3 className="text-lg font-bold mt-3 mb-2">{b.title}</h3>
                <p className="text-text-sub text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Curriculum
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            6주 커리큘럼
          </h2>
          <div className="space-y-3">
            {[
              { week: "W1", title: "병원 마케팅 기초 & 전략 설계", topics: "시장분석 · 타깃설정 · 경쟁분석 · 포지셔닝" },
              { week: "W2", title: "네이버 플레이스 & 블로그 마스터", topics: "상위노출 알고리즘 · SEO · 키워드 전략" },
              { week: "W3", title: "SNS 마케팅 & 숏폼 콘텐츠", topics: "인스타그램 · 릴스 · 유튜브 숏츠 · 틱톡" },
              { week: "W4", title: "광고 세팅 & ROI 최적화", topics: "네이버 광고 · 메타 광고 · 구글 광고 실전" },
              { week: "W5", title: "환자 경험 & 재방문 시스템", topics: "CRM · 리뷰관리 · 리텐션 전략" },
              { week: "W6", title: "자동화 시스템 & 스케일업", topics: "마케팅 자동화 · KPI 대시보드 · 성과 분석" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-bg-card border border-border rounded-lg px-6 py-5"
              >
                <span className="shrink-0 text-xs font-bold font-mono text-primary bg-primary/10 px-2.5 py-1 rounded">
                  {item.week}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-muted text-sm">{item.topics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            수강생 후기
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "김○○ 원장",
                type: "치과",
                text: "대행사에 월 300만 원 쓰던 걸 끊고 직접 하니 오히려 신환이 2배 늘었습니다.",
              },
              {
                name: "이○○ 원장",
                type: "피부과",
                text: "3개월 만에 네이버 플레이스 1위, 블로그 상위노출까지. 진작 배울 걸.",
              },
              {
                name: "박○○ 원장",
                type: "정형외과",
                text: "개원 1년 적자였는데, 강의 듣고 3개월 만에 흑자 전환했습니다.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-1.5 h-4 bg-primary rounded-sm" />
                  ))}
                </div>
                <p className="text-text-sub text-sm leading-relaxed mb-5">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <div className="w-8 h-8 bg-border-light rounded-full flex items-center justify-center text-xs font-bold text-text-muted">
                    {t.name[0]}
                  </div>
                  <div>
                    <span className="text-sm font-medium">{t.name}</span>
                    <span className="text-text-muted text-xs ml-2">{t.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="scroll-mt-8">
        <div className="max-w-md mx-auto px-6 py-20">
          <div className="text-center mb-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
              Sign Up
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              무료 강의 안내 받기
            </h2>
            <p className="text-text-muted text-sm">
              아래 정보를 입력하시면 상세 안내를 보내드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                이름
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                이메일
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                연락처
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-3.5 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            {error && (
              <p className="text-primary text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold py-4 rounded-lg transition-all cursor-pointer text-sm"
            >
              {isSubmitting ? "신청 중..." : "무료 강의 안내 신청하기"}
            </button>

            <p className="text-text-muted text-[11px] text-center">
              입력하신 정보는 강의 안내 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-2xl font-bold mb-10">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              {
                q: "마케팅을 전혀 몰라도 수강할 수 있나요?",
                a: "네, 기초부터 실전까지 단계별로 구성되어 있어 완전 초보자도 따라할 수 있습니다.",
              },
              {
                q: "어떤 진료과목이든 적용 가능한가요?",
                a: "치과, 피부과, 성형외과, 정형외과, 한의원 등 모든 진료과목에 적용 가능합니다.",
              },
              {
                q: "강의 기간은 어떻게 되나요?",
                a: "6주 온라인 과정이며, 수강 기간 중 무제한 질의응답이 가능합니다.",
              },
              {
                q: "환불은 가능한가요?",
                a: "수강 시작 7일 이내 100% 환불 보장합니다.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-lg px-6 py-5"
              >
                <h3 className="font-medium mb-2 text-sm">Q. {faq.q}</h3>
                <p className="text-text-sub text-sm">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-text-muted text-xs">
            © 2026 Hooking Formula. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs text-text-muted">v1.0</span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg-dark/95 backdrop-blur-md border-t border-border p-4 md:hidden z-50">
        <a
          href="#signup"
          className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg text-center transition-all"
        >
          무료 강의 안내 신청하기
        </a>
      </div>
    </div>
  );
}
