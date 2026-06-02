import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "성적이 오르는 1:1 영수전문, 엑설런스 아카데미",
  description: "우리 아이만을 위한 맞춤 학습 솔루션! 체계적인 커리큘럼과 밀착 오답 관리를 통해 기초 확립부터 심화 정복까지 빈틈없이 지도합니다.",
  openGraph: {
    title: "성적이 오르는 1:1 영수전문, 엑설런스 아카데미",
    description: "우리 아이만을 위한 맞춤 학습 솔루션! 체계적인 커리큘럼과 밀착 오답 관리를 통해 기초 확립부터 심화 정복까지 빈틈없이 지도합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "엑설런스 아카데미",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
