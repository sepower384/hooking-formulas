"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LandingPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // 3월 17일 19:30 카운트다운
  useEffect(() => {
    const target = new Date("2026-03-17T19:30:00+09:00").getTime();
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // 저장 실패해도 사용자 흐름은 유지
    }
    setIsSubmitting(false);
    router.push("/thank-you");
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-bold tracking-[0.15em] text-text-muted uppercase">
              Marketing Lab
            </span>
          </Link>
          <a
            href="#signup"
            className="text-sm text-primary font-medium hover:text-primary-light transition-colors"
          >
            무료 강의 신청 →
          </a>
        </div>
      </nav>

      {/* Live Badge */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-primary font-medium">
            LIVE 무료 강의 — 오늘 저녁 7시 30분
          </span>
          <span className="text-sm text-text-muted">|</span>
          <span className="text-sm font-mono text-text-main">
            {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs text-text-muted">3월 17일 (월) 오후 7:30</span>
            <span className="text-xs text-primary font-medium">무료 LIVE</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] mb-6">
            퇴근 후 2시간,
            <br />
            <span className="text-primary">병원 마케팅 대행</span>으로
            <br />
            월 200 버는 법
          </h1>
          <p className="text-text-sub text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            <span className="text-text-main font-medium">연 매출 120억</span> 병원 마케팅 회사가
            <br />
            마케팅 경험 0, 인맥 0, 자본금 0인 왕초보도
            <br className="hidden md:block" />
            병원 마케팅 대행을 부업으로 시작하는 로드맵을 무료 공개합니다.
          </p>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
          >
            무료 강의 신청하기
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* 이런 분들을 위한 강의 */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            For You
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            이런 분들을 위해 준비했습니다
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: "N잡을 시작하고 싶은 직장인", desc: "퇴근 후 시간을 활용해 수익을 만들고 싶은 분" },
              { label: "수입을 늘리고 싶은 프리랜서", desc: "고정 클라이언트를 확보할 수 있는 분야를 찾는 분" },
              { label: "새로운 직업을 탐색 중인 분", desc: "성장하는 시장에서 전문성을 쌓고 싶은 분" },
              { label: "취업 준비 중인 분", desc: "실무 스킬 + 포트폴리오를 동시에 만들고 싶은 분" },
              { label: "부업으로 월 100~300 목표인 분", desc: "초기 비용 없이 시작할 수 있는 부업을 찾는 분" },
              { label: "마케팅에 관심은 있지만 막막한 분", desc: "뭐부터 해야 할지 모르겠는 완전 초보자" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-bg-card border border-border rounded-lg px-6 py-4 pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/40 rounded-l-lg" />
                <p className="font-medium text-sm text-text-main mb-0.5">{item.label}</p>
                <p className="text-text-muted text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 왜 병원 마케팅인가 */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Why Hospital Marketing
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            왜 하필 <span className="text-primary">병원</span> 마케팅인가
          </h2>
          <div className="space-y-3">
            {[
              { num: "01", title: "시장이 거대하다", desc: "전국 병·의원 7만 개 이상. 마케팅이 필요하지 않은 병원은 없습니다." },
              { num: "02", title: "단가가 높다", desc: "병원 마케팅 대행 평균 월 100~300만 원. 3곳만 잡아도 월 수백입니다." },
              { num: "03", title: "경쟁이 적다", desc: "병원 전문 마케터는 부족합니다. 진입하면 빠르게 자리잡을 수 있습니다." },
              { num: "04", title: "장기 계약이 기본", desc: "한 번 시작하면 최소 6개월~1년. 매달 안정적인 수익이 들어옵니다." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-bg-card border border-border rounded-lg px-6 py-5"
              >
                <span className="shrink-0 text-2xl font-bold text-border-light font-mono">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-sub text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 강의에서 다루는 내용 */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            What You'll Learn
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            이 무료 강의에서 알려드리는 것
          </h2>
          <p className="text-text-muted text-sm mb-10">
            3월 17일 (월) 저녁 7:30 · 약 2~3시간 · LIVE 진행
          </p>
          <div className="space-y-3">
            {[
              "경험 0에서 병원 마케팅 대행을 시작하는 구체적 단계",
              "병원 원장님에게 제안해서 계약을 따내는 실전 방법",
              "초보도 바로 성과를 낼 수 있는 마케팅 세팅법",
              "월 100~300만 원 수익 구조 만드는 현실적 로드맵",
              "대행사 경력 없이도 전문가처럼 보이는 포지셔닝 전략",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-bg-card border border-border rounded-lg px-6 py-4"
              >
                <div className="w-5 h-5 shrink-0 bg-primary/10 border border-primary/30 rounded flex items-center justify-center">
                  <svg width="12" height="12" fill="none" stroke="#E11D48" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm text-text-sub">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 계약 사례 */}
      <section className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Real Results
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            수강생 실제 계약 사례
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { period: "6개월 계약", amount: "5,200만원", type: "피부과 마케팅 대행" },
              { period: "3개월 계약", amount: "2,400만원", type: "치과 마케팅 대행" },
              { period: "12개월 계약", amount: "3,600만원", type: "성형외과 SNS 운영" },
              { period: "6개월 계약", amount: "4,800만원", type: "정형외과 통합 마케팅" },
            ].map((item, i) => (
              <div key={i} className="bg-bg-card border border-border rounded-xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{item.amount}</p>
                <p className="text-sm text-text-main font-medium mb-1">{item.period}</p>
                <p className="text-xs text-text-muted">{item.type}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs text-center">
            * 실제 수강생 계약 사례이며, 개인별 결과는 다를 수 있습니다.
          </p>
        </div>
      </section>

      {/* 수강생 스토리 */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
            Real Stories
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            먼저 시작한 분들의 이야기
          </h2>
          <p className="text-text-muted text-sm mb-10">
            마케팅을 아무것도 몰랐던 분들이 지금은 월 수백~수천만 원을 만들고 있습니다.
          </p>

          {/* 직장인 페르소나 */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-primary rounded-full" />
              <span className="text-xs font-bold tracking-wider text-text-muted uppercase">직장인 N잡러</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "김○○",
                  tag: "IT회사 재직 · 8개월 차",
                  highlight: "월 1,200만원 달성",
                  text: "회사 다니면서 퇴근 후 2시간씩 투자했어요. 처음엔 반신반의했는데 2개월 만에 피부과 첫 계약 성공. 6개월 계약 5,200만 원이었습니다. 지금은 병원 4곳 관리하면서 월 1,200만 원 찍고 있어요. 본업 월급보다 3배 많습니다.",
                },
                {
                  name: "이○○",
                  tag: "금융권 직장인 · 5개월 차",
                  highlight: "3개월 만에 월급 초과",
                  text: "주변에서 다들 부업 한다길래 저도 시작했는데, 다른 부업은 시급이 너무 낮더라고요. 병원 마케팅은 달랐습니다. 3개월 계약 2,400만 원짜리 치과 계약을 따냈을 때 진짜 인생이 바뀐 느낌이었어요. 회사 눈치 안 보게 됐습니다.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-bg-card border border-border rounded-xl p-6">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {t.highlight}
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
                      <span className="text-text-muted text-xs ml-2">{t.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 회사 외 수익이 막막했던 페르소나 */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-primary rounded-full" />
              <span className="text-xs font-bold tracking-wider text-text-muted uppercase">회사 밖 수익이 막막했던 분들</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "정○○",
                  tag: "경력단절 · 6개월 차",
                  highlight: "0원 → 월 800만원",
                  text: "육아하면서 뭘 할 수 있을까 막막했는데, 아이 재운 후 2~3시간씩 공부하고 영업했어요. 첫 계약이 한의원 6개월 3,000만 원. 지금은 3곳 관리하면서 월 800만 원 벌고 있습니다. 마케팅은 정말 아무것도 몰랐거든요.",
                },
                {
                  name: "최○○",
                  tag: "퇴사 후 무직 · 4개월 차",
                  highlight: "퇴사 후 월 1,000만원 돌파",
                  text: "회사를 그만두고 막막했습니다. 배달, 쿠팡 다 해봤는데 시간 대비 수입이 너무 낮았어요. 이 강의 듣고 정형외과 6개월 계약 4,800만 원 따냈습니다. 한 곳만 더 추가했는데 벌써 월 1,000만 원이 넘어요.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-bg-card border border-border rounded-xl p-6">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {t.highlight}
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
                      <span className="text-text-muted text-xs ml-2">{t.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 프리랜서 페르소나 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-primary rounded-full" />
              <span className="text-xs font-bold tracking-wider text-text-muted uppercase">프리랜서</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "박○○",
                  tag: "디자인 프리랜서 · 7개월 차",
                  highlight: "기존 수입 + 월 900만원 추가",
                  text: "디자인 외주만 하다 보니 수입이 들쑥날쑥했어요. 병원 마케팅을 배우고 나서 기존 디자인 클라이언트에게 마케팅까지 제안했더니 계약 단가가 3배로 뛰었습니다. 지금은 병원 전문 마케터로 포지셔닝하고 있어요.",
                },
                {
                  name: "한○○",
                  tag: "영상 프리랜서 · 5개월 차",
                  highlight: "월 1,200만원 안정 수입",
                  text: "영상 편집 건당 10~20만 원 받던 게 전부였는데, 병원 마케팅 대행으로 전환하니 6개월 계약 5,200만 원짜리 일이 들어왔어요. 매달 안정적으로 들어오니 정신적으로도 여유가 생겼습니다. 프리랜서의 고질적인 수입 불안이 사라졌어요.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-bg-card border border-border rounded-xl p-6">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {t.highlight}
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
                      <span className="text-text-muted text-xs ml-2">{t.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="scroll-mt-8">
        <div className="max-w-md mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-8">
            <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
              Free Live Class
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              무료 LIVE 강의 신청
            </h2>
            <p className="text-text-muted text-sm mb-1">
              3월 17일 (월) 저녁 7:30
            </p>
            <p className="text-text-muted text-xs">
              신청 후 카카오톡 오픈채팅방으로 안내드립니다.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { val: pad(timeLeft.hours), label: "시간" },
              { val: pad(timeLeft.minutes), label: "분" },
              { val: pad(timeLeft.seconds), label: "초" },
            ].map((t, i) => (
              <div key={i} className="text-center">
                <div className="bg-bg-card border border-border rounded-lg w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold font-mono text-text-main">
                    {t.val}
                  </span>
                </div>
                <span className="text-[10px] text-text-muted mt-1 block">{t.label}</span>
              </div>
            ))}
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
              className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold py-4 rounded-lg transition-all cursor-pointer"
            >
              {isSubmitting ? "신청 중..." : "무료 강의 신청하기 →"}
            </button>

            <p className="text-text-muted text-[11px] text-center leading-relaxed">
              신청 즉시 카카오톡 오픈채팅방으로 연결됩니다.
              <br />
              입력하신 정보는 강의 안내 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-lg font-bold mb-6">Q&A</h2>
          <div className="space-y-3">
            {[
              { q: "정말 무료인가요?", a: "네, 이번 LIVE 강의는 100% 무료입니다." },
              { q: "마케팅 경험이 없어도 되나요?", a: "네, 완전 초보자 기준으로 진행합니다." },
              { q: "녹화본을 받을 수 있나요?", a: "LIVE 참석자에 한해 제공됩니다." },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-lg px-6 py-4"
              >
                <h3 className="font-medium text-sm mb-1">Q. {faq.q}</h3>
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
            © 2026 Marketing Lab. All rights reserved.
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
          오늘 7:30 무료 강의 신청하기
        </a>
      </div>
    </div>
  );
}
