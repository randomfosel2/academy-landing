"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Icon from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to update header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "홈", href: "/" },
    { name: "교육과정", href: "/curriculum" },
    { name: "상담 예약", href: "/reservation" },
    { name: "오시는 길", href: "/contact" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center h-20 px-6 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] w-full flex justify-between items-center">
          <Link href="/" className="font-extrabold text-xl text-primary font-display tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-white text-base font-bold shadow-md shadow-secondary/20">E</span>
            엑설런스 아카데미
          </Link>
          
          <div className="hidden md:flex gap-2 items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/40 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold text-xs px-5 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-secondary shadow-sm font-bold"
                      : "text-slate-600 hover:text-secondary hover:bg-white/40"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/reservation"
              className="bg-primary text-white py-2.5 px-6 rounded-full text-xs font-bold transition-all hover:bg-secondary active:scale-95 shadow-md shadow-primary/5 hover:shadow-secondary/15 premium-glow-btn"
            >
              상담 예약하기
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-primary p-2.5 hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center"
            >
              <Icon name="menu" className="w-6 h-6 block" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm md:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Side Bar Navigation */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex flex-col p-6 bg-white w-72 shadow-2xl transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-white text-base font-bold">E</span>
            <div>
              <div className="font-extrabold text-base text-primary font-display leading-tight">엑설런스 아카데미</div>
              <div className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5">K-12 Premium Education</div>
            </div>
          </div>
          <button
            className="text-slate-400 p-1.5 hover:bg-slate-100 hover:text-primary rounded-full transition-colors flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Icon name="close" className="w-5 h-5 block" />
          </button>
        </div>

        <div className="space-y-1.5 flex-grow">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            let iconName = "home";
            if (item.href === "/curriculum") iconName = "menu_book";
            else if (item.href === "/activities") iconName = "campaign";
            else if (item.href === "/reservation") iconName = "event_available";
            else if (item.href === "/contact") iconName = "map";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 p-3.5 rounded-2xl font-semibold text-sm transition-all active:scale-98 ${
                  isActive
                    ? "bg-indigo-50/70 text-secondary font-bold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon name={iconName} className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto">
          <Link
            href="/reservation"
            className="block w-full text-center bg-primary text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:bg-secondary active:scale-95 transition-all"
          >
            상담 예약하기
          </Link>
        </div>
      </div>
    </>
  );
}
