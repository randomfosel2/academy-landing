"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "../../components/Icon";

interface ReservationItem {
  id: number;
  guardianName: string;
  phone: string;
  level: string; // "초등" | "중등" | "고등"
  grade: string;
  schoolName: string;
  studentName: string;
  notes: string;
  date: string;
  time: string;
  status: string; // "접수대기" | "예약확정"
  createdAt: string;
}

// Phase 2: Loosely Coupled Event Handler (Mock SMS Module)
const setupSMSNotificationListener = () => {
  if (typeof window === "undefined") return;

  const handleStatusChange = (e: Event) => {
    const customEvent = e as CustomEvent;
    const { guardianName, phone, date, time, status } = customEvent.detail;
    
    if (status === "예약확정") {
      const smsMessage = `[엑설런스 아카데미] ${guardianName}님, 예약이 확정되었습니다. 일시: ${date} ${time}`;
      console.log(`%c[SMS API Dispatch] 문자가 발송되었습니다. 수신처: ${phone} / 내용: ${smsMessage}`, "color: #38bdf8; font-weight: bold;");
      alert(`[자동 SMS 알림 발송 - Phase 2 데모]\n\n수신처: ${phone}\n내용: ${smsMessage}`);
    } else if (status === "예약취소") {
      const smsMessage = `[엑설런스 아카데미] ${guardianName}님, 예약이 취소되었습니다. 문의 사항이 있으시면 대표 번호로 연락 바랍니다.`;
      console.log(`%c[SMS API Dispatch] 취소 안내 문자가 발송되었습니다. 수신처: ${phone} / 내용: ${smsMessage}`, "color: #f87171; font-weight: bold;");
      alert(`[자동 SMS 알림 발송 - 취소 안내]\n\n수신처: ${phone}\n내용: ${smsMessage}`);
    }
  };

  window.removeEventListener("reservation-status-change", handleStatusChange);
  window.addEventListener("reservation-status-change", handleStatusChange);
};

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<ReservationItem[]>([]);
  const [filter, setFilter] = useState<string>("전체");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Setup Phase 2 Listener
    setupSMSNotificationListener();

    // Load reservations from localStorage
    const saved = localStorage.getItem("academy_reservations");
    if (saved) {
      try {
        setReservations(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse reservations:", err);
      }
    } else {
      // Mock initial data if empty
      const initialMock: ReservationItem[] = [
        {
          id: 1,
          guardianName: "김학부모",
          phone: "010-1234-5678",
          level: "초등",
          grade: "3학년",
          schoolName: "서초초등학교",
          studentName: "김학생",
          notes: "학업 진도 및 기초 연산 능력 상담 희망합니다.",
          date: "2024년 11월 12일",
          time: "오후 02:00",
          status: "접수대기",
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          guardianName: "이학부모",
          phone: "010-9876-5432",
          level: "고등",
          grade: "2학년",
          schoolName: "반포고등학교",
          studentName: "이학생",
          notes: "수학 AP 및 수시 컨설팅 상담 희망합니다.",
          date: "2024년 11월 14일",
          time: "오후 03:00",
          status: "예약확정",
          createdAt: new Date().toISOString(),
        }
      ];
      localStorage.setItem("academy_reservations", JSON.stringify(initialMock));
      setReservations(initialMock);
    }
  }, []);

  // Update Status Event Dispatcher (Loosely coupled Phase 2 trigger)
  const handleConfirmReservation = (id: number) => {
    const updated = reservations.map((res) => {
      if (res.id === id) {
        const newStatus = "예약확정";
        
        const event = new CustomEvent("reservation-status-change", {
          detail: {
            id: res.id,
            guardianName: res.guardianName,
            phone: res.phone,
            date: res.date,
            time: res.time,
            status: newStatus,
          }
        });
        window.dispatchEvent(event);

        return { ...res, status: newStatus };
      }
      return res;
    });

    setReservations(updated);
    localStorage.setItem("academy_reservations", JSON.stringify(updated));
  };

  const handleCancelReservation = (id: number) => {
    if (!confirm("정말로 이 예약을 취소 처리하시겠습니까?")) return;
    const updated = reservations.map((res) => {
      if (res.id === id) {
        const newStatus = "예약취소";
        
        const event = new CustomEvent("reservation-status-change", {
          detail: {
            id: res.id,
            guardianName: res.guardianName,
            phone: res.phone,
            date: res.date,
            time: res.time,
            status: newStatus,
          }
        });
        window.dispatchEvent(event);

        return { ...res, status: newStatus };
      }
      return res;
    });

    setReservations(updated);
    localStorage.setItem("academy_reservations", JSON.stringify(updated));
  };

  const handleDeleteReservation = (id: number) => {
    if (!confirm("정말로 이 예약 내역을 영구 삭제하시겠습니까?")) return;
    const updated = reservations.filter((res) => res.id !== id);
    setReservations(updated);
    localStorage.setItem("academy_reservations", JSON.stringify(updated));
  };

  const handleResetData = () => {
    localStorage.removeItem("academy_reservations");
    window.location.reload();
  };

  // Filter & Search Logic
  const filteredReservations = reservations.filter((res) => {
    const matchesFilter = filter === "전체" || res.level === filter;
    const matchesSearch = 
      res.guardianName.includes(searchTerm) || 
      res.studentName.includes(searchTerm) ||
      res.phone.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="pt-24 pb-20 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black font-headline-xl">관리자 어드민 (Admin Dashboard)</h1>
          <p className="text-sm text-gray-500 mt-2">상담 예약 신청 접수 내역을 확인 및 승인하고 필터링할 수 있습니다.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleResetData}
            className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-lg transition-colors"
          >
            데이터 초기화
          </button>
          <Link
            href="/reservation"
            className="px-4 py-2 bg-black text-white hover:opacity-90 text-xs font-semibold rounded-lg transition-all"
          >
            예약 신청 페이지 이동
          </Link>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Level Filters */}
        <div className="flex gap-2 w-full md:w-auto">
          {["전체", "초등", "중등", "고등"].map((level) => {
            const isActive = filter === level;
            return (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`flex-grow md:flex-grow-0 px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  isActive
                    ? "border-secondary bg-blue-50 text-secondary font-bold"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {level}
              </button>
            );
          })}
        </div>
        
        {/* Search Input */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="예약자명 / 학생명 / 연락처 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
          />
          <Icon name="search" className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </section>

      {/* Reservations Table */}
      <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-6">상태</th>
                <th className="py-4 px-6">보호자 (예약자)</th>
                <th className="py-4 px-6">연락처</th>
                <th className="py-4 px-6">구분 / 학년</th>
                <th className="py-4 px-6">학교 / 학생명</th>
                <th className="py-4 px-6">희망 날짜/시간</th>
                <th className="py-4 px-6">상담 희망 내용</th>
                <th className="py-4 px-6 text-center">작업</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredReservations.length > 0 ? (
                filteredReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                    {/* Status badge */}
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-full ${
                        res.status === "예약확정"
                          ? "bg-green-100 text-green-800"
                          : res.status === "예약취소"
                          ? "bg-red-100 text-red-800"
                          : "bg-orange-100 text-orange-800"
                      }`}>
                        {res.status}
                      </span>
                    </td>
                    {/* Guardian Name */}
                    <td className="py-4 px-6 font-bold text-black">{res.guardianName}</td>
                    {/* Phone */}
                    <td className="py-4 px-6 text-gray-600 font-semibold">{res.phone}</td>
                    {/* Level / Grade */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-800 text-[10px] font-bold rounded">
                          {res.level}
                        </span>
                        <span className="font-semibold text-black">{res.grade}</span>
                      </div>
                    </td>
                    {/* School / Student Name */}
                    <td className="py-4 px-6 text-xs text-gray-600">
                      <div>학교: <span className="font-semibold text-black">{res.schoolName}</span></div>
                      <div className="mt-1">학생: <span className="font-semibold text-black">{res.studentName}</span></div>
                    </td>
                    {/* Hope Date / Time */}
                    <td className="py-4 px-6 text-xs">
                      <div className="font-bold text-black">{res.date}</div>
                      <div className="text-secondary font-semibold mt-1">{res.time}</div>
                    </td>
                    {/* Notes */}
                    <td className="py-4 px-6 max-w-xs truncate text-xs text-gray-600" title={res.notes}>
                      {res.notes}
                    </td>
                    {/* Confirm Button */}
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {res.status === "접수대기" && (
                          <>
                            <button
                              onClick={() => handleConfirmReservation(res.id)}
                              className="px-3 py-1.5 bg-secondary text-white hover:opacity-90 text-[11px] font-semibold rounded-lg shadow-sm transition-all"
                            >
                              확정
                            </button>
                            <button
                              onClick={() => handleCancelReservation(res.id)}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold rounded-lg border border-slate-200 shadow-sm transition-all"
                            >
                              취소
                            </button>
                          </>
                        )}
                        {res.status === "예약확정" && (
                          <>
                            <span className="text-green-600 font-bold text-xs flex items-center gap-1 mr-1">
                              <Icon name="check" className="w-3.5 h-3.5 text-green-600" />
                              확정됨
                            </span>
                            <button
                              onClick={() => handleCancelReservation(res.id)}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold rounded-lg border border-slate-200 shadow-sm transition-all"
                            >
                              취소
                            </button>
                          </>
                        )}
                        {res.status === "예약취소" && (
                          <span className="text-red-500 font-bold text-xs flex items-center gap-1 mr-2">
                            <Icon name="close" className="w-3.5 h-3.5 text-red-500" />
                            취소됨
                          </span>
                        )}
                        <button
                          onClick={() => handleDeleteReservation(res.id)}
                          className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all ml-1"
                          title="삭제"
                        >
                          <Icon name="delete" className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-gray-500">
                    접수된 예약 내역이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Phase 2 Architecture Explainer Box */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
        <h3 className="font-bold text-secondary text-sm flex items-center gap-2 mb-2">
          <Icon name="info" className="w-4 h-4 text-secondary" />
          Phase 2 확장 설계 구조 (Loosely Coupled SMS Notification)
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          본 어드민 대시보드는 <strong>이벤트 기반 아키텍처(Event-driven Architecture)</strong>를 적용하여 설계되었습니다.
          관리자가 <strong>[예약 확정]</strong>을 클릭하여 예약 상태가 변경되면 <code>reservation-status-change</code> 커스텀 이벤트가 브라우저 윈도우 객체로 발행(Publish)됩니다.
          이를 감지한 SMS 전송 수신 리스너(Subscriber)가 자동으로 트리거되어 학부모에게 예약 안내 메시지를 발송하는 비동기적인 구조를 갖추어, 메인 어드민 모듈과 SMS 문자 모듈 사이의 결합도를 낮추었습니다.
        </p>
      </section>
    </main>
  );
}
