import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "엑설런스 아카데미 | 1:1 맞춤지도 초중고 영수전문학원",
  description: "초·중·고 1:1 밀착형 개별 맞춤지도 영수 전문 엑설런스 아카데미입니다. 학생 개개인의 수준 분석과 맞춤 피드백을 통해 확실한 성적 향상을 이끕니다.",
  openGraph: {
    title: "엑설런스 아카데미 | 1:1 맞춤지도 초중고 영수전문학원",
    description: "초·중·고 1:1 밀착형 개별 맞춤지도 영수 전문 엑설런스 아카데미입니다. 학생 개개인의 수준 분석과 맞춤 피드백을 통해 확실한 성적 향상을 이끕니다.",
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
