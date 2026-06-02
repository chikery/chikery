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
  title: "조윤서 Jay Cho — AI Engineer & Creative",
  description:
    "사진학과 출신 AI 엔지니어. 예술적 감성과 기술을 연결하는 창작자입니다.",
  openGraph: {
    title: "조윤서 Jay Cho — AI Engineer & Creative",
    description:
      "사진학과 출신 AI 엔지니어. 예술적 감성과 기술을 연결합니다.",
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
