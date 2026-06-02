"use client";

import { useState } from "react";
import Icon from "../../components/Icon";

interface Post {
  id: number;
  category: "학원 생활" | "입시 정보" | "학생 수상";
  date: string;
  title: string;
  desc: string;
  imgUrl: string;
}

export default function Activities() {
  const [filter, setFilter] = useState<string>("전체보기");
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const posts: Post[] = [
    {
      id: 1,
      category: "학원 생활",
      date: "2024년 10월 24일",
      title: "신규 과학 기술 센터 개관: 더 넓은 세계로의 도약",
      desc: "최첨단 과학 기술 센터의 개관 소식을 전해드립니다. 로보틱스, 생명공학, 지속 가능한 공학 분야에서 학생들이 직접 실습하며 꿈을 키워나갈 수 있는 최적의 환경을 제공합니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAawSQpnmqxLite3aO6IeXNCOBvSyCx0dtLorL8YuOFWGkyztO6oOvwckocJcCmT3WKEiLce3WDtktx6f5qiyb5HjG0MOusdaZwMA06gFWH-fCl_Mo8IIZ3BTPmzmgw60Cg9UiucU6P7J06xQGYggN9NApgQDR65j230KUoL0HGdI0Tk-UV7ikvtHtJETyf8EjwNw-vtotTMxlXCSee9545ZS8otVYbBoda3JGkPH_CDDIUMATAvPx8ibl0yGN1olOMrnnUc-S5mT_r"
    },
    {
      id: 2,
      category: "입시 정보",
      date: "2024년 10월 22일",
      title: "SAT 집중 워크숍 시리즈 안내",
      desc: "시험 전략 및 핵심 영역 분석을 통해 학생들의 SAT 성적 향상을 이끄는 특별 집중 워크숍 시리즈입니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNtxpJY4OqfcmYs2pjJWb87rG3hChIDLAewS9j64tKUHHcZujFfaIBfLhcmc7k01qw0fg57sXwLS2rT9cheSLBu-hhsXrPRAeedit0aGSQrpgr1VwjFplB2h0Hj47VFgXutq-sTQMfZFYRmQVlTqcoXgWyF9jIJe3edI5FusBmFjg8yAhNOtc5-nyUgHSqPi5XpmgfoWuL7yibTSDzVr3sXXBNu0P58IwDjI5UBdz80ewGFpIXQgdsnZkepK85_-16KYmD6m0YPaX6"
    },
    {
      id: 3,
      category: "학생 수상",
      date: "2024년 10월 20일",
      title: "내셔널 메리트 장학생 최종 선발",
      desc: "전국 최상위 성적을 기록하며 엑설런스 아카데미에서 2024년 내셔널 메리트 장학생으로 선발된 학생들의 수상을 진심으로 축하합니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oGSApJdC1B9OSSauPTTGsI6SopIZOER95sfCD7_5GodPitSYwNrsG8kyjZwFy8cwWfWxsu1RvUgc4JEdM7uEZOxAC5VadtUCQz4OE4z4xX3TPzczscvWXA1kJ3t9KpILi5HTDKbRYoTiZ6GQljw01P1sB7YtS3IxIvKpVW0jDSPzdvYR2ayGDDzhUqAH5biZfcKE8QtsB4KdpqreqWaUAUKIlVFdonIOFpEGyq1TokYPws5QnPepXGXt78VD0f_Ezk8E-oYtWB0B"
    },
    {
      id: 4,
      category: "학원 생활",
      date: "2024년 10월 18일",
      title: "인문학 신규 교육과정: 비판적 사고의 함양",
      desc: "K-12 인문학 프로그램에 철학과 글로벌 윤리를 통합하여 한층 더 깊이 있고 폭넓은 학습 기회를 학생들에게 제공합니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0-wgEG9IIJ50RODWvrCAYhc9cwtGVIos9ExDYRtCoTNAaNxEIYEUrz5fidQ0ep8lxl2qZ4BzhTbzW9xp1Q4BgR03Qfp75THBbJA_w_L3Rui5v-hC-dNZBlg9OjTrDViBYV0Ds_P1PnAD8johdiwwlZWOBU_awMnM4LSFT7s-UegsOC-6vu87OLLV4jaEVLD74M0y3BzHIOl3pK4OJVi0plLn7U0DTzdWLBQBy9xtEpqC12eRttYGTNgHTqvmIFG694C_TH860PSPP"
    },
    {
      id: 5,
      category: "학생 수상",
      date: "2024년 10월 15일",
      title: "축구 대표팀 우승: 역사적인 시즌 마무리",
      desc: "우리 아카데미 대표 이글스 팀이 치열한 지역 결승전에서 승리하여 트로피를 차지하며 최고의 팀워크와 스포츠맨십을 입증했습니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJZ9sZeQp9l213UW2etqsh2n3Kk9EB9sl-5dsmaJuHFaI1118q5fciUrdffKvm6csTXgKJqfCYUepztwyC-j9unnvVKmquC8QYiihxUW5SjpnnSsw11b9EvjBFoikp_2UEoWDQqAzWIHwp-vE-Es_Djkj_wFdmBDaa9AThz7OaumZq6qJ7H3hUp70lYgqZ5UMuMb9O9XvBrUQuFgA_sIan0k8S77pOuzoaVp3GXexMQn9TW91ix0EQVXAufrLNfKEYENhO_gnr3rk"
    },
    {
      id: 6,
      category: "입시 정보",
      date: "2024년 10월 12일",
      title: "효과적인 스피치 기법: 워크숍 하이라이트",
      desc: "최근에 성황리에 개최된 스피치 및 설득 기술 워크숍에서 참가 학생들은 세련된 프레젠테이션 수사학적 기량을 연마했습니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZnHTwG02su3DhsJ864cUxzzNV3GohNuZHRVnBD4B3dhwGKz0bakOFHLjI6UnMDKO_H95Q_oKJfjQBRuUydM7ciaL0wxSQTpnpvfrVZyK8qdSli9BRoDDl0qhafnuCSBAFieDTUYke5Gho4yrYV-heQSH5Mg019CF2exD-sbZXgFN9VUgPYoBYHBFPhB9vL4Yl21G4x_-J1QNCSshr6D2EvF-zEfzwINHNU1yE9LIwfVJyTXvNrVGC2aaSLo-WuX14BgMLtw_7mftf"
    }
  ];

  const filteredPosts = filter === "전체보기" 
    ? posts 
    : posts.filter(p => p.category === filter);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
    }, 1200);
  };

  const featuredPost = filteredPosts.find(p => p.id === 1);
  const secondaryPosts = filteredPosts.filter(p => p.id === 2 || p.id === 3);
  const regularPosts = filteredPosts.filter(p => p.id >= 4);

  const hasLayoutGrid = filter === "전체보기";

  return (
    <main className="bg-mesh-premium pt-24 pb-20 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Page Header */}
      <header className="mb-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest block">News & Activities</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight font-display tracking-tight">
          원내 활동 및 <span className="italic-highlight">소식</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
          학생들의 눈부신 성취부터 다양한 방과 후 활동까지, Excellence Academy의 활기찬 일상을 만나보세요.
        </p>
      </header>

      {/* Filter Tabs - Sleek Pill Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-100 p-1.5 rounded-full inline-flex border border-slate-200/40 shadow-inner">
          {["전체보기", "학원 생활", "입시 정보", "학생 수상"].map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-secondary shadow-sm"
                    : "text-slate-500 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Grid Layout or standard grid depending on filter */}
      {hasLayoutGrid ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Post (Large Card) */}
          {featuredPost && (
            <article className="md:col-span-8 group cursor-pointer">
              <div className="premium-card overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/9] w-full overflow-hidden relative bg-slate-100">
                  <img
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-102"
                    src={featuredPost.imgUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-indigo-50 text-secondary font-bold text-[10px] rounded-full uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-primary group-hover:text-secondary transition-colors font-display leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                      {featuredPost.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-secondary font-bold text-xs group-hover:gap-3 transition-all mt-6">
                    전체 기사 보기 <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Sidebar Secondary Posts */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {secondaryPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="premium-card overflow-hidden flex flex-col h-full">
                  <div className="aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                      src={post.imgUrl}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <span className={`px-2.5 py-0.5 text-[9px] font-bold rounded-full uppercase mb-2 inline-block ${
                        post.category === "입시 정보" 
                          ? "bg-blue-50 text-blue-700" 
                          : "bg-orange-50 text-orange-700"
                      }`}>
                        {post.category}
                      </span>
                      <h3 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors font-display leading-snug">
                        {post.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium">{post.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Regular Grid Posts */}
          {regularPosts.map((post) => (
            <article key={post.id} className="md:col-span-4 group cursor-pointer">
              <div className="premium-card overflow-hidden h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    src={post.imgUrl}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 font-bold text-[9px] rounded-full uppercase mb-2 inline-block">
                      {post.category}
                    </span>
                    <h3 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors font-display leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium mt-1">
                      {post.desc}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="premium-card overflow-hidden h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    src={post.imgUrl}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 font-bold text-[9px] rounded-full uppercase mb-2 inline-block">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors font-display leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium mt-1">
                      {post.desc}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Load More Button */}
      <div className="mt-16 text-center">
        <button
          onClick={handleLoadMore}
          disabled={isLoadingMore}
          className="px-10 py-4 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-full shadow-sm transition-all active:scale-95 inline-flex items-center gap-2 disabled:opacity-50"
        >
          {isLoadingMore ? (
            <>
              <Icon name="refresh" className="w-4 h-4 animate-spin text-slate-700" />
              새로운 소식 불러오는 중...
            </>
          ) : (
            <>
              더 많은 소식 보기 <Icon name="expand_more" className="w-4 h-4 text-slate-750" />
            </>
          )}
        </button>
      </div>
    </main>
  );
}
