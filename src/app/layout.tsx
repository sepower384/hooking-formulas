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
  title: "후킹공식 250가지 | 병원 마케팅 필수 카피라이팅 공식",
  description:
    "매출을 3배 올리는 후킹공식 250가지를 카테고리별로 정리했습니다. 병원 마케팅에 바로 적용 가능한 카피라이팅 공식 모음.",
  openGraph: {
    title: "후킹공식 250가지 | 클릭을 부르는 카피라이팅 공식 총정리",
    description:
      "병원 마케팅에 바로 적용 가능한 후킹공식 250가지. 호기심, 공포, 숫자, 스토리텔링 등 10가지 카테고리별 완벽 정리.",
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
