"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "../../components/Icon";

interface Subject {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

interface CurriculumLevel {
  title: string;
  description: string;
  subjects: Subject[];
}

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState<"elementary" | "middle" | "high">("elementary");

  const curriculumData: Record<"elementary" | "middle" | "high", CurriculumLevel> = {
    elementary: {
      title: "초등 기초 프로그램",
      description: "K-5학년을 위한 기초 문해력, 수리력 및 사회적·정서적 성장에 중점을 둡니다.",
      subjects: [
        { icon: "menu_book", title: "국어 (Language Arts)", desc: "몰입형 스토리텔링을 통해 파닉스, 독해력 및 창의적 글쓰기 능력을 배양합니다.", badge: "초등 1-6" },
        { icon: "calculate", title: "수학 (Mathematics)", desc: "구체물 조작과 문제 해결을 통해 탄탄한 수의 기초와 논리력을 구축합니다.", badge: "초등 1-6" },
        { icon: "science", title: "탐구 과학 (Inquiry Science)", desc: "지도된 실험과 관찰을 통해 자연 세계를 탐구하고 과학적 원리를 이해합니다.", badge: "초등 3-6" },
        { icon: "palette", title: "미술 (Visual Arts)", desc: "다양한 예술 매체를 활용하여 자기표현과 소근육 발달을 도모합니다.", badge: "초등 1-4" },
        { icon: "public", title: "사회 (Social Studies)", desc: "지역 사회와 역사, 그리고 세계 시민 의식의 기초를 이해합니다.", badge: "초등 2-5" },
        { icon: "fitness_center", title: "체육 (Physical Education)", desc: "신체 활동과 협동 놀이를 통해 팀워크와 건강한 습관을 기릅니다.", badge: "초등 전학년" }
      ]
    },
    middle: {
      title: "중등 탐구 과정",
      description: "6-8학년을 대상으로 독립적 사고와 심화된 과목 탐색을 장려합니다.",
      subjects: [
        { icon: "functions", title: "수학 (Mathematics)", desc: "구체적인 수의 개념에서 추상적 추론과 공간 개념으로 전환하는 기초 대수 및 기하를 학습합니다.", badge: "중등 1-3" },
        { icon: "biotech", title: "생명 및 지구 과학", desc: "생물학, 생태학 및 지구의 지질학적 과정에 대한 심도 있는 탐구를 수행합니다.", badge: "중등 2-3" },
        { icon: "history_edu", title: "세계사 (World History)", desc: "문명의 발생과 역사적 사건이 현대 세계에 미친 영향을 분석합니다.", badge: "중등 1-2" },
        { icon: "translate", title: "외국어 (Foreign Language)", desc: "회화 유창성과 문화 이해에 중점을 둔 스페인어 또는 프랑스어 입문 과정을 제공합니다.", badge: "중등 전학년" },
        { icon: "computer", title: "디지털 리터러시", desc: "컴퓨터 과학의 기초, 온라인 안전 교육 및 협업을 위한 디지털 도구 활용법을 배웁니다.", badge: "중등 1-3" },
        { icon: "psychology", title: "윤리 및 상담", desc: "인성 발달, 또래 관계 및 윤리적 의사결정 능력 함양에 집중합니다.", badge: "중등 전학년" }
      ]
    },
    high: {
      title: "고등 심화 과정",
      description: "9-12학년을 위한 엄격한 대학 입시 준비 과정 및 AP(Advanced Placement) 옵션을 제공합니다.",
      subjects: [
        { icon: "terminal", title: "컴퓨터 과학 AP", desc: "고급 프로그래밍 논리, 알고리즘 설계 및 소프트웨어 개발 방법론을 마스터합니다.", badge: "AP 과정" },
        { icon: "architecture", title: "심화 물리학", desc: "역학, 열역학 및 전자기학에 대한 정량적 분석과 실험을 수행합니다.", badge: "고등 2-3" },
        { icon: "theater_comedy", title: "공연 예술", desc: "전문적인 수준의 무대 연출, 연극 및 성악 기술을 연마합니다.", badge: "선택 과목" },
        { icon: "bar_chart", title: "경제 및 시민 교육", desc: "글로벌 시장, 정치 체제 및 개인 재무 관리 능력을 분석하고 함양합니다.", badge: "고등 1-2" },
        { icon: "menu_book", title: "문학 분석", desc: "고전 및 현대 문학에 대한 비판적 고찰과 설득력 있는 수사학을 학습합니다.", badge: "고등 전학년" },
        { icon: "microscope", title: "분자 생물학", desc: "유전학 및 세포 과정을 탐구하는 집중적인 실험 중심 강좌를 제공합니다.", badge: "AP 과정" }
      ]
    }
  };

  const currentCurriculum = curriculumData[activeTab];

  return (
    <main className="bg-mesh-premium pt-24 pb-20 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Header Section */}
      <header className="mb-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest block">Our Curriculum</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight font-display tracking-tight">
          탁월한 학업 성취를 위한 <br />
          <span className="italic-highlight">프리미엄 커리큘럼</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
          우리의 커리큘럼은 학생들의 발달 단계에 맞춰 도전 의식을 고취하며, 비판적 사고, 창의성, 그리고 배움에 대한 평생의 열정을 기를 수 있도록 설계되었습니다.
        </p>
      </header>

      {/* Curriculum Hero Image Block */}
      <div className="w-full h-[400px] mb-16 overflow-hidden rounded-3xl shadow-sm border border-slate-200/50 relative bg-slate-100">
        <img
          alt="도서관 전경"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3W5cuOhPslKfJYhIhm9TGCWcXFhfpyxyVbkAdY6AvYKj7bhIGobmJpgYQkQEHmXH5lxkS4b9vYOqugCoOBvZQBSR1BRi0W9joxmTJm-gcrWpyiBmcsUs12RS8q9bATVh-XSw0tIMo5AeTG5ryCQxg9xCO2jP6vf_GGPPN-wtwlw9vmI27Zfl4SrNJNwxjmAnLdp_2-4pkaIfTiZQTmBm6kRONpEhOQkUb5RIWy-8svjoBL67RgTCl3sLzrnXkKlDRahBcZJ_Pr6kG"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Tabbed Interface - Sleek Pill Tabs */}
      <div className="mb-12 text-center">
        <div className="bg-slate-100 p-1.5 rounded-full inline-flex border border-slate-200/40 shadow-inner">
          {(["elementary", "middle", "high"] as const).map((level) => {
            const label = level === "elementary" ? "초등부" : level === "middle" ? "중등부" : "고등부";
            const isActive = activeTab === level;
            return (
              <button
                key={level}
                className={`px-8 py-3 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-secondary shadow-sm"
                    : "text-slate-500 hover:text-primary"
                }`}
                onClick={() => setActiveTab(level)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px]">
        <div className="animate-fadeIn">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-slate-200/50 pb-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display">
                {currentCurriculum.title}
              </h2>
              <p className="text-sm text-slate-500 font-medium">
                {currentCurriculum.description}
              </p>
            </div>
            <button className="flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-bold text-xs shadow-sm transition-all active:scale-95">
              <Icon name="download" className="w-4 h-4" />
              실라버스 및 커리큘럼 가이드 다운로드
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCurriculum.subjects.map((subject, idx) => (
              <div
                key={idx}
                className="premium-card p-8 flex flex-col items-start justify-between min-h-[300px]"
              >
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="bg-indigo-50 p-3 rounded-2xl">
                      <Icon name={subject.icon} className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full">
                      {subject.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary font-display">{subject.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {subject.desc}
                  </p>
                </div>
                
                <Link
                  href="#"
                  className="mt-6 font-bold text-xs text-secondary hover:underline flex items-center gap-1 group"
                >
                  과정 상세정보 
                  <Icon name="arrow_forward" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-secondary" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
