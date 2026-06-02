import Icon from "../../components/Icon";

export default function Contact() {
  return (
    <main className="bg-mesh-premium pt-24 pb-20 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Page Header */}
      <header className="mb-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest block">Contact Us</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight font-display tracking-tight">
          오시는 길 및 <span className="italic-highlight">방문 안내</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
          교육 중심 지구에 위치한 엑설런스 아카데미는 학문적 우수성과 성장을 위한 평온하고 안전한 교육 환경을 제공합니다.
        </p>
      </header>

      {/* Map and Address Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Map Area */}
        <div className="lg:col-span-8 h-[500px] relative rounded-3xl overflow-hidden border border-slate-200/60 bg-[#faf6eb] group shadow-sm">
          <img
            alt="아카데미 위치 지도"
            className="w-full h-full object-cover transition-all duration-1000 cursor-pointer sepia-[0.35] brightness-[1.08] contrast-[0.95] saturate-[0.8] group-hover:sepia-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0LQyI6v4PHS_Xlb79_rEHKWafjICLsykNTCWMWECGff3mf6LvJmXYA4yKtl7dCAzs8i4dU2EVdOiWlh5wdcPcUX2XogMyfpEyEBnLGBvy7EbleT5yWzcdCBG0QP06St9SkLf_tYR2Mq-E5uMrqDaHuS-Q_b6RCUP4rxpprTqVl17hC2EY8UE96f8S5T6_Z7tWnNicAHN3Frn_D7yclEgSWTYDKfo9uwMmu_2yxaT1eMEDhkL1vWEwzN9ISq8xwobK63z60Fk2A98J"
          />
          {/* Bright Ivory Tint Overlay */}
          <div className="absolute inset-0 bg-[#faf6eb]/25 mix-blend-multiply pointer-events-none transition-opacity duration-1000 group-hover:opacity-0"></div>
          {/* Floating Map Overlay */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-slate-100 flex items-center gap-3">
            <div className="bg-secondary p-2 rounded-xl text-white shadow-sm shadow-secondary/15 flex items-center justify-center">
              <Icon name="school" className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-xs text-black">메인 캠퍼스</p>
              <p className="text-[9px] text-slate-500 font-semibold mt-0.5">서울 서초구 서초동</p>
            </div>
          </div>
          {/* Find Directions CTA */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 font-bold text-xs px-4 py-3 rounded-full shadow-lg border border-slate-200/50 transition-all active:scale-95">
              <Icon name="map" className="w-4 h-4" />
              네이버 지도
            </button>
            <button className="flex items-center gap-2 bg-secondary text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg hover:opacity-95 shadow-secondary/15 transition-all active:scale-95 premium-glow-btn">
              <Icon name="directions" className="w-4 h-4" />
              길찾기
            </button>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Address Card */}
          <div className="premium-card p-6 flex flex-col justify-between h-full min-h-[220px]">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-50 p-2.5 rounded-xl text-secondary flex items-center justify-center">
                <Icon name="location_on" className="w-5 h-5 text-secondary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">위치 안내</h3>
                <p className="text-sm font-bold text-slate-800 leading-relaxed font-display">
                  서울특별시 서초구 서초동 123 <br />엑설런스 아카데미 빌딩
                </p>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-4 flex flex-col gap-2.5 mt-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-semibold">대표 전화</span>
                <span className="font-bold text-primary">02-1234-5678</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-semibold">이메일</span>
                <span className="font-bold text-primary">admin@excellence.edu</span>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="premium-card p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-50 p-2.5 rounded-xl text-secondary flex items-center justify-center">
                <Icon name="schedule" className="w-5 h-5 text-secondary" />
              </div>
              <div className="space-y-1 flex-grow">
                <h3 className="font-bold text-[10px] text-slate-400 uppercase tracking-wider">운영 시간</h3>
                <div className="flex flex-col gap-2.5 mt-4">
                  <div className="flex justify-between w-full text-xs">
                    <span className="text-slate-500 font-semibold">평일</span>
                    <span className="font-bold text-primary">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between w-full text-xs">
                    <span className="text-slate-500 font-semibold">토요일</span>
                    <span className="font-bold text-primary">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between w-full text-xs border-t border-slate-100 pt-2.5">
                    <span className="text-slate-400 font-semibold">일요일/공휴일</span>
                    <span className="font-bold text-red-500">휴무</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transportation Section */}
      <section className="bg-slate-50 rounded-[32px] py-12 px-6 md:px-8 border border-slate-200/50 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-slate-200/50 pb-6">
          <div>
            <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-1.5 block">Transportation</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary font-display">대중교통 이용 안내</h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md leading-relaxed font-semibold">
            주차 공간이 협소하오니 대중교통 이용을 권장합니다. 엑설런스 아카데미는 주요 지하철 및 버스 노선과 인접해 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Subway Info */}
          <div className="bg-white p-8 rounded-3xl border-t-4 border-secondary shadow-sm border border-slate-200/50">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="subway" className="w-6 h-6 text-secondary" />
              <h3 className="text-base font-bold text-primary font-display">지하철 이용 시</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-[#3CB44A] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-sm text-black mb-0.5">서초역 (2호선)</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    3번 출구에서 도보 400m 직진. 메인 사거리 지난 후 우측에 아카데미 빌딩이 위치해 있습니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#F37321] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-sm text-black mb-0.5">고속터미널역 (3, 7, 9호선)</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    8-1번 출구에서 지선버스 5413번 또는 4423번 탑승 후 2정거장 이동. '엑설런스 아카데미 정문' 정류장 하차.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Bus Info */}
          <div className="bg-white p-8 rounded-3xl border-t-4 border-primary shadow-sm border border-slate-200/50">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="directions_bus" className="w-6 h-6 text-primary" />
              <h3 className="text-base font-bold text-primary font-display">버스 이용 시</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/40">
                <p className="font-bold text-xs text-slate-700 mb-2">서초동 성당 정류장 (정류장 ID: 22-145)</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full">간선: 405, 740, 144</span>
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full">지선: 5413, 3422, 4429</span>
                  <span className="px-2.5 py-1 bg-red-50 text-red-700 text-[10px] font-bold rounded-full">광역: 9100, 9200</span>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/40">
                <p className="font-bold text-xs text-slate-700 mb-2">엑설런스 아카데미 정문 (정류장 ID: 22-150)</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full">마을: 서초02, 서초13</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
