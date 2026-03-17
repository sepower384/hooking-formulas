import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "쓰레드/릴스 후킹 카피라이팅 공식집 250",
  description:
    "클릭률을 3배 올리는 후킹 카피라이팅 공식 250가지. 쓰레드, 릴스, 숏폼에 바로 적용 가능한 실전 공식집.",
  openGraph: {
    title: "쓰레드/릴스 후킹 카피라이팅 공식집 250",
    description:
      "상위 1% 크리에이터가 쓰는 후킹 공식 250가지를 카테고리별로 정리. 쓰레드, 릴스, 숏폼 콘텐츠에 바로 적용.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
