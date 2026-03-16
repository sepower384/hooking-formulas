"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

    // TODO: 실제 API 연동 (Google Sheets, Supabase 등)
    // 지금은 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    router.push("/thank-you");
  };

  const benefits = [
    {
      icon: "🎯",
      title: "병원 전문 마케팅 전략",
      desc: "피부과, 치과, 성형외과 등 진료과목별 맞춤 전략",
    },
    {
      icon: "📈",
      title: "신환 유입 시스템 구축",
      desc: "광고비 의존 없이 꾸준히 환자가 오는 시스템",
    },
    {
      icon: "💰",
      title: "대행 없이 자체 마케팅",
      desc: "월 수백만 원 대행비를 절약하는 인하우스 마케팅",
    },
    {
      icon: "🔥",
      title: "실전 템플릿 30종 제공",
      desc: "블로그, SNS, 광고 카피 바로 쓸 수 있는 템플릿",
    },
  ];

  const testimonials = [
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
      text: "마케팅 몰라서 개원 1년 적자였는데, 강의 듣고 3개월 만에 흑자 전환했습니다.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm text-accent mb-6">
            선착순 30명 한정 · 특별가 마감 임박
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            병원 마케팅,
            <br />
            <span className="text-primary-light">
              더 이상 대행사에 맡기지 마세요
            </span>
          </h1>
          <p className="text-lg text-text-sub max-w-xl mx-auto mb-4 leading-relaxed">
            500개 병원 컨설팅 경험으로 만든
            <br />
            <strong className="text-text-main">
              병원 마케팅 대행 실전 강의
            </strong>
          </p>
          <p className="text-text-muted mb-8">
            대행사 없이도 신환이 넘치는 병원을 만드는 시스템을 알려드립니다.
          </p>
          <a
            href="#signup"
            className="inline-block bg-accent hover:bg-accent-dark text-bg-dark font-bold px-10 py-4 rounded-xl text-lg transition-all"
          >
            무료 강의 안내 받기 ↓
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          혹시 이런 고민 하고 계신가요?
        </h2>
        <div className="grid gap-4 max-w-2xl mx-auto">
          {[
            "매달 대행사비는 나가는데 신환은 안 늘어요",
            "블로그, 인스타, 광고... 뭘 해야 할지 모르겠어요",
            "마케팅 성과를 측정할 수가 없어요",
            "대행사를 바꿔봐도 결과는 비슷해요",
            "진료는 자신 있는데 마케팅은 막막해요",
          ].map((pain, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-bg-card border border-border rounded-xl px-6 py-4"
            >
              <span className="text-xl">😣</span>
              <span className="text-text-sub">{pain}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-primary-light font-semibold mt-8 text-lg">
          ↓ 이 강의 하나로 전부 해결됩니다 ↓
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          이 강의에서 얻어가는 것
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <span className="text-4xl mb-4 block">{b.icon}</span>
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-text-sub text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          커리큘럼 미리보기
        </h2>
        <div className="space-y-4">
          {[
            { week: "1주차", title: "병원 마케팅 기초 & 전략 설계", topics: "시장분석, 타깃설정, 경쟁분석, 포지셔닝" },
            { week: "2주차", title: "네이버 플레이스 & 블로그 마스터", topics: "상위노출 알고리즘, SEO, 키워드 전략" },
            { week: "3주차", title: "SNS 마케팅 & 숏폼 콘텐츠", topics: "인스타그램, 릴스, 유튜브 숏츠, 틱톡" },
            { week: "4주차", title: "광고 세팅 & ROI 최적화", topics: "네이버 광고, 메타 광고, 구글 광고 실전" },
            { week: "5주차", title: "환자 경험 & 재방문 시스템", topics: "CRM, 리뷰관리, 리텐션 전략" },
            { week: "6주차", title: "자동화 시스템 구축 & 스케일업", topics: "마케팅 자동화, KPI 대시보드, 성과 분석" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 bg-bg-card border border-border rounded-xl px-6 py-4"
            >
              <div className="shrink-0 bg-primary/20 text-primary-light font-bold text-sm px-3 py-1 rounded-lg h-fit">
                {item.week}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.topics}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          수강생 리얼 후기
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-accent">★★★★★</span>
              </div>
              <p className="text-text-sub text-sm mb-4 leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div className="text-sm">
                <span className="font-semibold text-text-main">{t.name}</span>
                <span className="text-text-muted ml-2">{t.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="max-w-lg mx-auto px-4 py-16 scroll-mt-8">
        <div className="bg-gradient-to-br from-primary/20 to-bg-card border border-primary/30 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            무료 강의 안내 받기
          </h2>
          <p className="text-text-muted text-center text-sm mb-8">
            아래 정보를 입력하시면 강의 상세 안내를 보내드립니다.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-sub mb-1.5">
                이름
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-bg-dark border border-border rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-sub mb-1.5">
                이메일
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-bg-dark border border-border rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-sub mb-1.5">
                연락처
              </label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-bg-dark border border-border rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent-dark disabled:opacity-50 text-bg-dark font-bold py-4 rounded-xl text-lg transition-all cursor-pointer"
            >
              {isSubmitting ? "신청 중..." : "무료 강의 안내 신청하기"}
            </button>

            <p className="text-text-muted text-xs text-center">
              입력하신 정보는 강의 안내 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">자주 묻는 질문</h2>
        <div className="space-y-4">
          {[
            {
              q: "마케팅을 전혀 몰라도 수강할 수 있나요?",
              a: "네, 완전 초보자도 따라할 수 있도록 기초부터 실전까지 단계별로 구성되어 있습니다.",
            },
            {
              q: "어떤 진료과목 병원이든 적용 가능한가요?",
              a: "치과, 피부과, 성형외과, 정형외과, 한의원 등 모든 진료과목에 적용 가능합니다.",
            },
            {
              q: "강의 기간은 어떻게 되나요?",
              a: "6주 과정이며, 온라인으로 진행됩니다. 수강 기간 중 무제한 질의응답이 가능합니다.",
            },
            {
              q: "환불은 가능한가요?",
              a: "수강 시작 7일 이내 100% 환불 보장합니다.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border rounded-xl px-6 py-5"
            >
              <h3 className="font-semibold mb-2">Q. {faq.q}</h3>
              <p className="text-text-sub text-sm">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky CTA (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg-dark/90 backdrop-blur-sm border-t border-border p-4 md:hidden z-50">
        <a
          href="#signup"
          className="block w-full bg-accent hover:bg-accent-dark text-bg-dark font-bold py-3.5 rounded-xl text-center text-lg transition-all"
        >
          무료 강의 안내 신청하기
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-text-muted text-sm border-t border-border mb-16 md:mb-0">
        <p>© 2026 병원 마케팅 아카데미. All rights reserved.</p>
      </footer>
    </div>
  );
}
