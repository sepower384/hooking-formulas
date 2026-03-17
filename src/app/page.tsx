"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/hookingFormulas";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const totalFormulas = categories.reduce(
    (sum, cat) => sum + cat.formulas.length,
    0
  );

  const activeCat = categories[activeCategory];

  return (
    <div className="min-h-screen flex">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-bg-dark/95 backdrop-blur-md border-b border-border z-50 lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <span className="text-primary font-bold text-sm tracking-widest">HOOKING</span>
            <span className="text-text-muted text-sm ml-1">FORMULA</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-text-sub p-1 cursor-pointer"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {sidebarOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-bg-sidebar border-r border-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-6 pt-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] text-text-muted uppercase">
              Hooking Formula
            </span>
          </div>
          <h1 className="text-lg font-bold leading-snug mt-3">
            쓰레드/릴스
            <br />
            <span className="text-primary">후킹 카피라이팅</span>
            <br />
            공식집
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-text-main">{totalFormulas}</span>
            <span className="text-xs text-text-muted">공식 수록</span>
          </div>
        </div>

        {/* Category Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <p className="text-[10px] font-bold tracking-[0.15em] text-text-muted uppercase px-3 mb-3">
            Categories
          </p>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCategory(i);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all cursor-pointer group ${
                activeCategory === i
                  ? "bg-primary/10 border-l-2 border-primary"
                  : "hover:bg-white/5 border-l-2 border-transparent"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.emoji}</span>
                  <span
                    className={`text-sm font-medium ${
                      activeCategory === i ? "text-text-main" : "text-text-sub group-hover:text-text-main"
                    }`}
                  >
                    {cat.name}
                  </span>
                </div>
                <span
                  className={`text-xs font-mono ${
                    activeCategory === i ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {cat.formulas.length}
                </span>
              </div>
            </button>
          ))}
        </nav>

        {/* Sidebar CTA */}
        <div className="p-4 border-t border-border">
          <Link
            href="/landing"
            className="block w-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3 rounded-lg text-center transition-all"
          >
            실전 강의 알아보기
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 min-h-screen">
        {/* Hero Section */}
        <section className="relative border-b border-border mt-14 lg:mt-0">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border max-w-16" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-text-muted uppercase">
                250 Proven Formulas
              </span>
              <div className="h-px flex-1 bg-border max-w-16" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              클릭을 만드는 건
              <br />
              재능이 아니라{" "}
              <span className="text-primary">공식</span>입니다
            </h2>
            <p className="text-text-sub text-base md:text-lg max-w-xl leading-relaxed mb-10">
              쓰레드, 릴스, 숏폼에서 검증된 후킹 카피라이팅 공식 {totalFormulas}가지.
              <br className="hidden md:block" />
              복사해서 바로 쓰세요.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm text-text-muted">{categories.length}개 카테고리</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm text-text-muted">실전 예시 포함</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm text-text-muted">원클릭 복사</span>
              </div>
            </div>
          </div>
        </section>

        {/* Active Category Content */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 py-12">
          {/* Category Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{activeCat.emoji}</span>
                <h3 className="text-2xl md:text-3xl font-bold">{activeCat.name}</h3>
              </div>
              <p className="text-text-sub text-sm">{activeCat.description}</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-4xl font-bold text-border-light font-mono">
                {String(activeCategory + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-text-muted block">
                / {String(categories.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Formula Cards */}
          <div className="space-y-2 animate-fade-in-up" key={activeCategory}>
            {activeCat.formulas.map((f, idx) => (
              <div
                key={f.id}
                className="group relative bg-bg-card hover:bg-bg-card-hover border border-border hover:border-border-light rounded-lg px-5 py-4 transition-all duration-200 animate-slide-in"
                style={{ animationDelay: `${idx * 20}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 text-[11px] text-text-muted font-mono mt-0.5 w-7 text-right">
                        {f.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-text-main leading-relaxed">
                          {f.formula}
                        </p>
                        <p className="text-text-sub text-sm mt-1.5 pl-0 border-l-2 border-primary/30 ml-0 pl-3">
                          {f.example}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(f.formula, f.id)}
                    className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all bg-white/5 hover:bg-primary hover:text-white text-text-muted text-xs px-3 py-1.5 rounded cursor-pointer"
                  >
                    {copiedId === f.id ? "✓" : "복사"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Category Navigation */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
            <button
              onClick={() => setActiveCategory(Math.max(0, activeCategory - 1))}
              disabled={activeCategory === 0}
              className="text-sm text-text-sub hover:text-text-main disabled:opacity-30 disabled:cursor-default transition-colors cursor-pointer"
            >
              ← 이전 카테고리
            </button>
            <div className="flex gap-1.5">
              {categories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === activeCategory ? "bg-primary w-6" : "bg-border-light hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setActiveCategory(Math.min(categories.length - 1, activeCategory + 1))
              }
              disabled={activeCategory === categories.length - 1}
              className="text-sm text-text-sub hover:text-text-main disabled:opacity-30 disabled:cursor-default transition-colors cursor-pointer"
            >
              다음 카테고리 →
            </button>
          </div>
        </section>

        {/* Funnel Section */}
        <section className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
            {/* Thank you note */}
            <div className="mb-16">
              <p className="text-text-sub leading-relaxed max-w-2xl">
                여기까지 읽어주셨다면, 콘텐츠 마케팅에 진심이신 분이라고 생각합니다.
                <br className="hidden md:block" />
                위 공식들은 저희가 실제 현장에서 쓰고 있는 공식 그대로입니다.
                <br className="hidden md:block" />
                마음껏 가져가셔서 쓰레드, 릴스, 숏폼에 바로 적용해보세요.
              </p>
            </div>

            {/* About + CTA */}
            <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
              {/* Top line */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <p className="text-xs font-medium text-text-muted tracking-wide">
                    저희가 하는 일에 대해 잠깐 소개드립니다
                  </p>
                </div>

                <div className="max-w-2xl space-y-5 text-text-sub leading-relaxed">
                  <p>
                    저희는{" "}
                    <span className="text-text-main font-medium">
                      병원 마케팅을 전문으로 하고 있는 회사
                    </span>
                    입니다.
                  </p>
                  <p>
                    지금까지 수백 개 병원의 마케팅을 대행하면서 쌓은 노하우를 바탕으로,
                    <br className="hidden md:block" />
                    요즘은 하나의 교육 프로그램을 운영하고 있습니다.
                  </p>
                  <p>
                    <span className="text-text-main">
                      마케팅 경험이 전혀 없는 왕초보도,
                    </span>
                    <br className="hidden md:block" />
                    처음부터 시작해서 병원을 상대로 마케팅 대행을 부업으로 시작할 수 있도록
                    <br className="hidden md:block" />
                    실전 위주로 교육하고 있습니다.
                  </p>
                  <p className="text-text-muted text-sm pt-2">
                    억지로 권하진 않겠습니다.
                    <br />
                    다만, 조금이라도 궁금하신 분들만 아래에서 확인해주세요.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    href="/landing"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-all text-sm"
                  >
                    어떤 교육인지 확인해보기
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                  <span className="text-text-muted text-xs">
                    무료로 안내만 받아보실 수 있습니다
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
            <p className="text-text-muted text-xs">
              © 2026 Hooking Formula. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs text-text-muted">v1.0</span>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg-dark/95 backdrop-blur-md border-t border-border p-4 lg:hidden z-30">
        <Link
          href="/landing"
          className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg text-center transition-all"
        >
          실전 강의 알아보기
        </Link>
      </div>
    </div>
  );
}
