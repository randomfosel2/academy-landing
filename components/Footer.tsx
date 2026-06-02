import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-5 max-w-xs">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-white text-base font-bold shadow-md shadow-secondary/15">E</span>
            <div className="font-extrabold text-lg text-primary font-display tracking-tight">
              엑설런스 아카데미
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            학문적 안정성과 학생의 성공을 최우선으로 하는 최상위 K-12 사립 교육 기관입니다. 1998년부터 학업 성취, 인성 교육, 혁신적인 학습 경험을 통해 미래의 리더를 양성하고 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-slate-800 tracking-widest uppercase">학원 정보</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  교육과정
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  원내 활동
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  상담 예약
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-slate-800 tracking-widest uppercase">법적 고지</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  오시는 길
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-slate-500 hover:text-secondary font-semibold transition-colors">
                  사이트맵
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-xs text-slate-400 hover:text-secondary font-bold transition-colors">
                  관리자 모드 (어드민)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 py-8 border-t border-slate-200/50 text-center md:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-slate-400 font-medium">
          © 2024 엑설런스 아카데미. All rights reserved. 정식 등록 교육 기관.
        </p>
        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all hover:scale-105 shadow-sm">
            <Icon name="public" className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all hover:scale-105 shadow-sm">
            <Icon name="share" className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all hover:scale-105 shadow-sm">
            <Icon name="alternate_email" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
