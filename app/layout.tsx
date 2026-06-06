import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "조윤서 — AI Engineer",
  description:
    "비즈니스와 마케팅적 시각으로 사용자 경험을 최적화하여 개발하는 AI 엔지니어입니다.",
  openGraph: {
    title: "조윤서 — AI Engineer",
    description:
      "비즈니스와 마케팅적 시각으로 사용자 경험을 최적화하여 개발하는 AI 엔지니어입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geist.variable} ${notoSansKR.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-bg">{children}</body>
    </html>
  );
}
