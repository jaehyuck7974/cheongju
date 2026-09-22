import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "청주 한 바퀴 | 맞춤 관광 코스 플래너",
  description: "청주 10개 명소를 선택하고 도보·자동차 이동시간과 추천 동선을 비교하는 관광 코스 플래너",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
