"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/hookingFormulas";

export default function Home() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const totalFormulas = categories.reduce(
    (sum, cat) => sum + cat.formulas.length,
    0
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary-light mb-6">
            병원 마케팅 전문 카피라이팅 공식집
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            클릭을 부르는
            <br />
            <span className="animate-shimmer">후킹공식 {totalFormulas}가지</span>
          </h1>
          <p className="text-lg md:text-xl text-text-sub max-w-2xl mx-auto mb-8 leading-relaxed">
            &quot;왜 내 광고는 클릭이 안 될까?&quot;
            <br />
            상위 1% 마케터만 쓰는 후킹공식을
            <br className="md:hidden" />
            {" "}카테고리별로 총정리했습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-bg-card border border-border rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-accent">{totalFormulas}</div>
              <div className="text-sm text-text-muted">후킹 공식</div>
            </div>
            <div className="bg-bg-card border border-border rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-accent">
                {categories.length}
              </div>
              <div className="text-sm text-text-muted">카테고리</div>
            </div>
            <div className="bg-bg-card border border-border rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-text-muted">실전 적용</div>
            </div>
          </div>
          <a
            href="#formulas"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            공식 보러가기 ↓
          </a>
        </div>
      </section>

      {/* Category Quick Nav */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={`#category-${i}`}
              className="bg-bg-card border border-border rounded-lg px-4 py-2 text-sm hover:border-primary/50 hover:bg-bg-card-hover transition-all"
            >
              {cat.emoji} {cat.name}
              <span className="ml-1.5 text-text-muted">
                ({cat.formulas.length})
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Formulas */}
      <section id="formulas" className="max-w-6xl mx-auto px-4 py-12">
        {categories.map((cat, catIdx) => (
          <div
            key={catIdx}
            id={`category-${catIdx}`}
            className="mb-12 scroll-mt-8"
          >
            <button
              onClick={() =>
                setOpenCategory(openCategory === catIdx ? null : catIdx)
              }
              className="w-full text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between bg-bg-card border border-border rounded-2xl px-6 py-5 hover:border-primary/40 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{cat.emoji}</span>
                    <h2 className="text-xl md:text-2xl font-bold">
                      {cat.name}
                    </h2>
                    <span className="bg-primary/20 text-primary-light text-xs font-semibold px-2.5 py-1 rounded-full">
                      {cat.formulas.length}개
                    </span>
                  </div>
                  <p className="text-text-sub text-sm ml-12">
                    {cat.description}
                  </p>
                </div>
                <span
                  className={`text-2xl text-text-muted transition-transform duration-300 ${
                    openCategory === catIdx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
            </button>

            {openCategory === catIdx && (
              <div className="mt-4 grid gap-3 animate-fade-in-up">
                {cat.formulas.map((f) => (
                  <div
                    key={f.id}
                    className="group bg-bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/30 hover:bg-bg-card-hover transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-text-muted font-mono bg-bg-dark px-2 py-0.5 rounded">
                            #{f.id}
                          </span>
                          <span className="font-semibold text-text-main">
                            {f.formula}
                          </span>
                        </div>
                        <p className="text-text-sub text-sm ml-10">
                          💡 {f.example}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(f.formula, f.id);
                        }}
                        className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 hover:bg-primary/40 text-primary-light text-xs px-3 py-1.5 rounded-lg cursor-pointer"
                      >
                        {copiedId === f.id ? "✓ 복사됨" : "복사"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-primary/30 to-bg-card border border-primary/30 rounded-3xl px-8 py-12 text-center animate-pulse-glow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            공식만 알면 끝일까요?
          </h2>
          <p className="text-text-sub mb-2 text-lg">
            후킹공식을 <strong className="text-text-main">병원 마케팅</strong>에
            제대로 적용하는 방법이 있습니다.
          </p>
          <p className="text-text-muted mb-8">
            500개 병원 마케팅 경험으로 만든 실전 강의를 확인하세요.
          </p>
          <Link
            href="/landing"
            className="inline-block bg-accent hover:bg-accent-dark text-bg-dark font-bold px-10 py-4 rounded-xl text-lg transition-all"
          >
            병원 마케팅 대행 강의 알아보기 →
          </Link>
        </div>
      </section>

      {/* Sticky CTA (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg-dark/90 backdrop-blur-sm border-t border-border p-4 md:hidden z-50">
        <Link
          href="/landing"
          className="block w-full bg-accent hover:bg-accent-dark text-bg-dark font-bold py-3.5 rounded-xl text-center text-lg transition-all"
        >
          병원 마케팅 강의 무료 안내 받기
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-text-muted text-sm border-t border-border mb-16 md:mb-0">
        <p>© 2026 병원 마케팅 아카데미. All rights reserved.</p>
      </footer>
    </div>
  );
}
