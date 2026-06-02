import Link from "next/link";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <main className="bg-mesh-premium pt-20">
      {/* Hero Section - Inspired by Ascone Grid Layout */}
      <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[640px]">
        {/* Left Column: Text & Call to Actions */}
        <div className="lg:col-span-6 space-y-8 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-secondary text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            2024학년도 겨울학기 수강생 선착순 예약 중
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-primary font-display font-extrabold tracking-tight">
            Change the way <br />
            your child learns <br />
            with <span className="italic-highlight">Excellence</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-lg leading-relaxed font-medium">
            초·중·고 학생들의 학습 상태를 정밀하게 진단하고, 수준별 1:1 밀착 관리를 통해 확실한 성적 향상을 이끌어냅니다. 엑설런스 아카데미는 영어와 수학의 완벽한 개념 확립을 지향하는 1:1 맞춤형 영수 전문 브랜드입니다.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/reservation"
              className="bg-primary text-white text-center py-4 px-8 rounded-full font-bold text-sm hover:bg-secondary active:scale-98 shadow-lg shadow-primary/10 transition-all premium-glow-btn"
            >
              간편 무료 상담 예약
            </Link>
            <div className="flex items-center gap-3 px-4 py-2 justify-center sm:justify-start">
              <div className="flex text-amber-500 gap-0.5">
                <Icon name="star" className="w-[18px] h-[18px]" />
                <Icon name="star" className="w-[18px] h-[18px]" />
                <Icon name="star" className="w-[18px] h-[18px]" />
                <Icon name="star" className="w-[18px] h-[18px]" />
                <Icon name="star" className="w-[18px] h-[18px]" />
              </div>
              <div className="text-xs text-slate-500 font-bold">
                학부모 만족도 <span className="text-primary font-extrabold">4.9/5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Bento Mockup Blocks (Overlapping) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative animate-slideUp" style={{ animationDelay: "150ms" }}>
          {/* Card 1: Large image block */}
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-sm border border-slate-200/50 group bg-slate-100">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="수업 환경"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPZmCRohHRDW0w7PeMVnbS_uRhzaxwSWtStE32nuSeyQRs6dxp9fpRSsTHQMV4WmGXwNzYg0zyOWTR3owNIdep6om_je_WXLM9-tjE38SvVkTjwTjZlXlkGzjAwof561L3ovLJ4ApECsht587IHB64nrBIuRNvkWig8aofUi5Yyf-SFoE5du5eoOxznP2MnO_uxU2RHH_8rzNm8dmhVMAE53pA0pCxBLD-JoofSAiV2dPLhInf5TdRA7KW5NNm1SaSam8z06-JJsz"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-75">Premium Campus</p>
              <p className="text-sm font-bold mt-0.5">최첨단 스마트 교실</p>
            </div>
          </div>

          {/* Card 2: Stat Block (Ascone 56+ Currencies block) */}
          <div className="bg-[#f0f5f2] rounded-3xl p-6 border border-slate-200/20 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700 mb-4">
                <Icon name="workspace_premium" className="w-5 h-5" />
              </div>
              <h4 className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                토익 시험 및 주요 과목<br />성적 향상률
              </h4>
            </div>
            <div className="mt-4">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 tracking-tight font-display">98%</p>
            </div>
          </div>

          {/* Card 3: Dark Block (Ascone Users Active) */}
          <div className="bg-[#0f1e36] text-white rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="flex -space-x-2">
              <span className="w-7 h-7 rounded-full bg-slate-300 border-2 border-primary flex items-center justify-center text-[10px] text-black font-bold">👦</span>
              <span className="w-7 h-7 rounded-full bg-slate-400 border-2 border-primary flex items-center justify-center text-[10px] text-black font-bold">👧</span>
              <span className="w-7 h-7 rounded-full bg-slate-500 border-2 border-primary flex items-center justify-center text-[10px] text-black font-bold">👩</span>
              <span className="w-7 h-7 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-[8px] text-white font-bold">+1k</span>
            </div>
            <div className="mt-8">
              <p className="text-lg font-bold">1,200+</p>
              <p className="text-[10px] text-slate-400 font-medium">대치/서초 누적 예약자 및 재학생</p>
            </div>
          </div>

          {/* Card 4: Light Stat Chart block */}
          <div className="bg-[#fcf8f2] rounded-3xl p-6 border border-slate-200/20 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 mb-4">
                <Icon name="monitoring" className="w-5 h-5" />
              </div>
              <h4 className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                밀착형 학생 히스토리 학업 케어
              </h4>
            </div>
            <div className="mt-4">
              <p className="text-3xl md:text-4xl font-black text-amber-600 tracking-tight font-display">1:1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Banner Section - Premium Local Education Institutions */}
      <section className="bg-white border-y border-slate-200/50 py-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 text-slate-500 font-bold text-sm md:text-base tracking-wider text-center">
          <div>국제학력인증평가 공식준비소</div>
          <div>한국창의학회 회원기관</div>
          <div>K-12 교육과정 표준인증</div>
          <div>서초지구 학원연합회 정회원</div>
        </div>
      </section>

      {/* Philosophy Section - About Us Layout */}
      <section className="py-section-padding-desktop bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight font-display">
              초·중·고 학생을 위한 <br />
              <span className="underline-highlight">단 하나의 올바른 교육</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              엑설런스 아카데미는 규율 잡힌 보살핌 속에서 모든 학생이 비범한 성취를 이룰 수 있는 잠재력을 가지고 있다는 원칙 위에 세워졌습니다. 1:1 개별 진도표에 입각한 밀착형 영수 관리로, 학생 한 명 한 명의 강점은 극대화하고 취약점은 완벽히 보완합니다.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              우리는 수준 높은 맞춤형 수업과 철저한 교과 내신 분석, 그리고 학습 현황에 대한 정기 오딧 시스템을 통해 아이들의 성장을 돕습니다. 학부모와 학생 모두에게 신뢰를 주며 배움의 즐거움을 함께 나누는 것이 우리의 사명입니다.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-50/70 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <img
              className="relative z-10 rounded-2xl w-full aspect-video object-cover shadow-md group-hover:scale-[1.01] transition-transform duration-500"
              alt="전문 교육진"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvUjKecdb7F4UC3cH49OP2jCyfD-M4VJR4aKA_mAFi_pCZcQ2FcHK7w32bGgNaXfg37K5RN-JWFPTnAh9NMZoYrt9LrdLSTFaSAZL_SXOOANCtBm2O5xXbozjLa80FJOpLIpFEsSN3RNcuWHbfQViNIdHD0om4xZGuqe-wtTt8OF1bDgyec8mVBbnppARgWn858NxWKArJYPHODs6um4VdE7v-Rmz2tjsghhlm_lLL_LkgQv2dpMMxNoZ836BgJNqEOcaUNUKQBS4X"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us: 3 Grid Cards */}
      <section className="py-section-padding-desktop bg-slate-50 border-t border-slate-200/20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-primary font-display">왜 엑설런스 아카데미인가?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="premium-card p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-2xl text-secondary mb-6">
                  <Icon name="school" className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3 font-headline-md">경험이 풍부한 일대일 강사진</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  일대일 맞춤지도의 풍부한 노하우를 갖춘 영수 전문 강사진이 개별 학습 속도를 분석하여 세심하고 탄탄한 교육을 제공합니다.
                </p>
              </div>
              <Link href="/curriculum" className="text-xs font-bold text-secondary flex items-center gap-1.5 hover:underline mt-6">
                자세히 보기 <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="premium-card p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-2xl text-secondary mb-6">
                  <Icon name="auto_stories" className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3 font-headline-md">영어·수학 집중 커리큘럼</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  초·중·고 핵심 교과 과정 분석을 기반으로, 영역별 개념 학습부터 수능 실전 대비까지 1:1 맞춤 진도를 통해 학습 효과를 극대화합니다.
                </p>
              </div>
              <Link href="/curriculum" className="text-xs font-bold text-secondary flex items-center gap-1.5 hover:underline mt-6">
                자세히 보기 <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="premium-card p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-2xl text-secondary mb-6">
                  <Icon name="monitoring" className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3 font-headline-md">일대일 밀착 학습 오딧<br />(Learning Audit)</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  일일 학습 피드백 시스템과 정기 리포트 발행을 바탕으로, 단 한 명의 학생도 학업의 흐름을 놓치지 않도록 관리합니다.
                </p>
              </div>
              <Link href="/curriculum" className="text-xs font-bold text-secondary flex items-center gap-1.5 hover:underline mt-6">
                자세히 보기 <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section - Inspired by Monie Success CTA banner */}
      <section className="bg-white py-section-padding-desktop">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-primary text-white rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-lg shadow-primary/5">
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display">
                아이의 밝은 교육적 미래를 설계할 준비가 되셨나요?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-medium">
                초·중·고등 프리미엄 1:1 맞춤 상담이 학업 성장의 열쇠입니다. 지금 원하는 날짜와 시간을 지정해 신청서 접수를 시작해 보세요.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
              <Link
                href="/reservation"
                className="bg-secondary text-white text-center py-4 px-8 rounded-full font-bold text-sm hover:opacity-95 shadow-md shadow-secondary/15 transition-all premium-glow-btn"
              >
                상담 예약 시작하기
              </Link>
              <Link
                href="/contact"
                className="border border-slate-700 text-slate-200 text-center py-4 px-8 rounded-full font-bold text-sm hover:bg-slate-800 transition-all"
              >
                캠퍼스 투어 정보
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
