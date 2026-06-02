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
      title: "겨울방학 대비 1:1 영수 개별 진도 지도 설명회 개최",
      desc: "학부모님들을 모시고 자녀의 학습 성향 및 과목별 취약점 분석, 그리고 이번 겨울방학 동안 진행될 1:1 개인 맞춤형 영어·수학 학습 진도 플랜을 상세히 설명해 드리는 자리를 마련했습니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAawSQpnmqxLite3aO6IeXNCOBvSyCx0dtLorL8YuOFWGkyztO6oOvwckocJcCmT3WKEiLce3WDtktx6f5qiyb5HjG0MOusdaZwMA06gFWH-fCl_Mo8IIZ3BTPmzmgw60Cg9UiucU6P7J06xQGYggN9NApgQDR65j230KUoL0HGdI0Tk-UV7ikvtHtJETyf8EjwNw-vtotTMxlXCSee9545ZS8otVYbBoda3JGkPH_CDDIUMATAvPx8ibl0yGN1olOMrnnUc-S5mT_r"
    },
    {
      id: 2,
      category: "입시 정보",
      date: "2024년 10월 22일",
      title: "2025학년도 수능 영어·수학 출제 경향 및 1:1 전략",
      desc: "최근 수능 및 평가원 모의고사의 출제 경향을 면밀히 분석하고, 절대평가 영어 1등급 공략법과 변별력 높은 수리 영역 킬러/준킬러 문항에 대한 개인 맞춤형 대비법을 제시합니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNtxpJY4OqfcmYs2pjJWb87rG3hChIDLAewS9j64tKUHHcZujFfaIBfLhcmc7k01qw0fg57sXwLS2rT9cheSLBu-hhsXrPRAeedit0aGSQrpgr1VwjFplB2h0Hj47VFgXutq-sTQMfZFYRmQVlTqcoXgWyF9jIJe3edI5FusBmFjg8yAhNOtc5-nyUgHSqPi5XpmgfoWuL7yibTSDzVr3sXXBNu0P58IwDjI5UBdz80ewGFpIXQgdsnZkepK85_-16KYmD6m0YPaX6"
    },
    {
      id: 3,
      category: "학생 수상",
      date: "2024년 10월 20일",
      title: "2학기 중간고사 내신 우수 및 성적 수직 상승생 발표",
      desc: "철저한 1:1 오답 관리와 밀착 지도를 통해 이번 2학기 중간고사에서 영어·수학 1등급을 달성하거나 성적이 큰 폭으로 향상된 엑설런스 아카데미 원생들을 칭찬하고 축하합니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oGSApJdC1B9OSSauPTTGsI6SopIZOER95sfCD7_5GodPitSYwNrsG8kyjZwFy8cwWfWxsu1RvUgc4JEdM7uEZOxAC5VadtUCQz4OE4z4xX3TPzczscvWXA1kJ3t9KpILi5HTDKbRYoTiZ6GQljw01P1sB7YtS3IxIvKpVW0jDSPzdvYR2ayGDDzhUqAH5biZfcKE8QtsB4KdpqreqWaUAUKIlVFdonIOFpEGyq1TokYPws5QnPepXGXt78VD0f_Ezk8E-oYtWB0B"
    },
    {
      id: 4,
      category: "학원 생활",
      date: "2024년 10월 18일",
      title: "초등부 이스턴영어 파닉스 및 매일 영단어 녹음 챌린지",
      desc: "초등 저학년 학생들이 영어에 흥미를 느끼고 스스로 공부하는 습관을 기를 수 있도록 마련된 파닉스 발음 및 일일 영단어 말하기 녹음 챌린지 활동 소식을 전해드립니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0-wgEG9IIJ50RODWvrCAYhc9cwtGVIos9ExDYRtCoTNAaNxEIYEUrz5fidQ0ep8lxl2qZ4BzhTbzW9xp1Q4BgR03Qfp75THBbJA_w_L3Rui5v-hC-dNZBlg9OjTrDViBYV0Ds_P1PnAD8johdiwwlZWOBU_awMnM4LSFT7s-UegsOC-6vu87OLLV4jaEVLD74M0y3BzHIOl3pK4OJVi0plLn7U0DTzdWLBQBy9xtEpqC12eRttYGTNgHTqvmIFG694C_TH860PSPP"
    },
    {
      id: 5,
      category: "학생 수상",
      date: "2024년 10월 15일",
      title: "전국 영어·수학 학력평가(HME) 우수 성적 및 수상 달성",
      desc: "본원의 체계적인 1:1 맞춤 모의 훈련과 개별 첨삭 지도를 바탕으로 전국 단위 영수 학력평가에 응시하여 다수의 원생들이 최우수상 및 메달을 획득하는 빛나는 성과를 거두었습니다.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJZ9sZeQp9l213UW2etqsh2n3Kk9EB9sl-5dsmaJuHFaI1118q5fciUrdffKvm6csTXgKJqfCYUepztwyC-j9unnvVKmquC8QYiihxUW5SjpnnSsw11b9EvjBFoikp_2UEoWDQqAzWIHwp-vE-Es_Djkj_wFdmBDaa9AThz7OaumZq6qJ7H3hUp70lYgqZ5UMuMb9O9XvBrUQuFgA_sIan0k8S77pOuzoaVp3GXexMQn9TW91ix0EQVXAufrLNfKEYENhO_gnr3rk"
    },
    {
      id: 6,
      category: "입시 정보",
      date: "2024년 10월 12일",
      title: "인근 학교별 기출 분석 기반 수행평가 일대일 집중 관리",
      desc: "중·고등부 내신 관리를 정밀하게 밀착 지원하기 위해 학교별 최근 3개년 기출 족보를 분석하여 맞춤 오답 풀이를 지도하고 영어 서술형 수행평가를 1:1로 집중 지도합니다.",
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
          학생들의 성적 향상 스토리부터 유익한 입시 정보, 엑설런스 아카데미의 생생한 교육 소식을 만나보세요.
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
