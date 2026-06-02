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
      title: "초등 영수 개별 맞춤 과정",
      description: "초등 1-6학년 학생들을 대상으로 영어와 수학의 기초를 다지고, 공부하는 습관을 형성합니다.",
      subjects: [
        { icon: "translate", title: "초등 영어 (이스턴영어)", desc: "영어 발음과 파닉스부터 일상 회화, 교과 연계 단어 및 기본 문장 구조를 개별 학습 속도에 맞추어 마스터합니다.", badge: "초등 1-6" },
        { icon: "calculate", title: "초등 수학 (개념 & 연산)", desc: "1:1 집중 지도를 통해 탄탄한 연산 기초와 수학적 사고력을 확립하고, 개인 맞춤형 문장제 문제 풀이 능력을 배양합니다.", badge: "초등 1-6" },
        { icon: "assignment_turned_in", title: "일대일 일일 피드백", desc: "매 수업마다 오답 노트를 작성하고 1:1 개별 첨삭과 피드백을 진행하여 단 한 명의 학생도 뒤처지지 않도록 관리합니다.", badge: "초등 전학년" }
      ]
    },
    middle: {
      title: "중등 영수 내신 대비 과정",
      description: "중등 1-3학년을 대상으로 학교별 내신 만점과 특목고/자사고 진학을 위한 심화 학습을 지원합니다.",
      subjects: [
        { icon: "history_edu", title: "중등 영어 (문법 & 내신)", desc: "학교별 교과서 완벽 연계 단어/문법 학습, 기출 시험 유형 심화 분석 및 철저한 수행평가 일대일 첨삭을 진행합니다.", badge: "중등 1-3" },
        { icon: "functions", title: "중등 수학 (대수 & 기하)", desc: "기초 대수와 공간 개념 확립부터 일대일 오답 처리를 통한 난도 높은 심화 문제 및 서술형 평가 정복을 목표로 합니다.", badge: "중등 1-3" },
        { icon: "analytics", title: "취약점 정밀 분석 리포트", desc: "단원평가 및 주간 학습 리포트를 토대로 개개인의 취약한 유형을 정밀 진단하고 개별 학습 보완 계획을 수립합니다.", badge: "중등 전학년" }
      ]
    },
    high: {
      title: "고등 영수 수능 & 대입 심화",
      description: "고등 1-3학년 학생들의 대입 성공을 위해 철저한 학교별 내신과 수능 절대평가 1등급을 공략합니다.",
      subjects: [
        { icon: "translate", title: "고등 영어 (수능 & 모의고사)", desc: "EBS 연계 교재 심화 분석, 모의고사 핵심 유형 독해, 어법 완성 및 변형 문제 해결 능력을 1:1 맞춤형으로 기릅니다.", badge: "고등 1-3" },
        { icon: "calculate", title: "고등 수학 (수능 & 내신)", desc: "수학 I/II, 미적분, 확률과 통계, 기하 등 대입 필수 과목의 수리 개념을 마스터하고 고난도 준킬러/킬러 문항을 대비합니다.", badge: "고등 1-3" },
        { icon: "psychology", title: "1:1 입시 상담 및 학습 오딧", desc: "학생 개인별 학생부 히스토리와 모의고사 성적을 바탕으로 한 입시 전략 컨설팅 및 밀착형 학습 멘토링을 제공합니다.", badge: "고등 전학년" }
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
          개별 성장을 실현하는 <br />
          <span className="italic-highlight">1:1 맞춤형 영수 커리큘럼</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
          엑설런스 아카데미의 커리큘럼은 초·중·고등부 학생들이 스스로 학습 주도성을 가질 수 있도록 수준별 맞춤 진도와 개별 케어 프로그램을 통해 철저한 성적 향상을 이끌어냅니다.
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
