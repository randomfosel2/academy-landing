"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Icon from "../../components/Icon";

interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

export default function Reservation() {
  const [selectedDate, setSelectedDate] = useState<number>(11);
  const [selectedTime, setSelectedTime] = useState<string>("오후 01:00");
  const [studentLevel, setStudentLevel] = useState<"elem" | "middle" | "high">("elem");
  const [grade, setGrade] = useState<string>("1");
  const [phone, setPhone] = useState<string>("");
  const [guardianName, setGuardianName] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [studentName, setStudentName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  // November 2024 Mock Calendar details
  const startDayOffset = 5; // Nov 1st 2024 is Friday (0=Sun, 1=Mon, ..., 5=Fri)
  const totalDays = 30;
  const reservedDates = [1, 2, 5, 9, 15, 16, 23, 24, 30]; // Mock unavailable dates

  const timeSlots: TimeSlot[] = [
    { time: "오전 10:00", isAvailable: true },
    { time: "오전 11:00", isAvailable: false },
    { time: "오후 01:00", isAvailable: true },
    { time: "오후 02:00", isAvailable: true },
    { time: "오후 03:00", isAvailable: true },
    { time: "오후 04:00", isAvailable: true },
    { time: "오후 05:00", isAvailable: false },
    { time: "오후 06:00", isAvailable: true },
  ];

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 3 && val.length <= 7) {
      val = val.slice(0, 3) + "-" + val.slice(3);
    } else if (val.length > 7) {
      val = val.slice(0, 3) + "-" + val.slice(3, 7) + "-" + val.slice(7, 11);
    }
    setPhone(val);
  };

  const handleLevelChange = (level: "elem" | "middle" | "high") => {
    setStudentLevel(level);
    setGrade("1"); // Reset to 1st grade on switch
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newReservation = {
      id: Date.now(),
      guardianName,
      phone,
      level: studentLevel === "elem" ? "초등" : studentLevel === "middle" ? "중등" : "고등",
      grade: `${grade}학년`,
      schoolName: schoolName || "(기입 안 함)",
      studentName: studentName || "(기입 안 함)",
      notes: notes || "(기입 안 함)",
      date: `2024년 11월 ${selectedDate}일`,
      time: selectedTime,
      status: "접수대기",
      createdAt: new Date().toISOString(),
    };
    
    try {
      const existing = localStorage.getItem("academy_reservations");
      const list = existing ? JSON.parse(existing) : [];
      list.push(newReservation);
      localStorage.setItem("academy_reservations", JSON.stringify(list));
    } catch (err) {
      console.error("Failed to save reservation:", err);
    }

    setIsSuccessModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    document.body.style.overflow = "auto";
    // Reset form
    setGuardianName("");
    setPhone("");
    setSchoolName("");
    setStudentName("");
    setNotes("");
    setSelectedDate(11);
    setSelectedTime("오후 01:00");
    setStudentLevel("elem");
    setGrade("1");
  };

  // Render calendar days
  const calendarCells = [];
  
  // Previous month mock days (Oct 27 - 31)
  const prevMonthDays = [27, 28, 29, 30, 31];
  prevMonthDays.forEach((d) => {
    calendarCells.push(
      <div key={`prev-${d}`} className="p-3 text-center text-slate-300 text-xs font-semibold">
        {d}
      </div>
    );
  });

  // Current month days (Nov 1 - 30)
  for (let d = 1; d <= totalDays; d++) {
    const isReserved = reservedDates.includes(d);
    const isSelected = selectedDate === d;
    const dayOfWeek = (startDayOffset + d - 1) % 7;
    let colorClass = "text-slate-700";
    if (dayOfWeek === 0) colorClass = "text-red-500"; // Sunday
    if (dayOfWeek === 6) colorClass = "text-blue-500"; // Saturday

    if (isReserved) {
      calendarCells.push(
        <button
          key={`day-${d}`}
          type="button"
          disabled
          className="w-10 h-10 mx-auto flex items-center justify-center rounded-full text-slate-300 bg-slate-50/50 cursor-not-allowed text-xs font-bold"
        >
          {d}
        </button>
      );
    } else {
      calendarCells.push(
        <button
          key={`day-${d}`}
          type="button"
          onClick={() => setSelectedDate(d)}
          className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full text-xs font-bold transition-all calendar-cell-premium ${
            isSelected
              ? "selected"
              : `${colorClass}`
          }`}
        >
          {d}
        </button>
      );
    }
  }

  // Grade selection options based on student level
  const maxGrades = studentLevel === "elem" ? 6 : 3;
  const gradeOptions = [];
  for (let i = 1; i <= maxGrades; i++) {
    gradeOptions.push(
      <option key={i} value={i}>
        {i}학년
      </option>
    );
  }

  return (
    <main className="bg-mesh-premium pt-24 pb-20 px-6 max-w-[800px] mx-auto min-h-screen">
      {/* Header Section */}
      <header className="mb-12 text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest block">Quick Booking</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary font-display tracking-tight">
          간편 상담 <span className="italic-highlight">예약</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">학습 상담을 원하시는 날짜와 시간을 선택하고 간단히 정보를 입력해 주세요.</p>
      </header>

      {/* Step 1: Calendar & Time */}
      <section className="mb-8 bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-black border-b border-slate-100 pb-4">
          <Icon name="calendar_month" className="w-6 h-6 text-secondary" />
          <h2 className="text-lg font-bold font-display">1. 날짜 및 시간 선택</h2>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-sm text-slate-800">2024년 11월</h3>
            <div className="flex gap-2">
              <button type="button" className="w-8 h-8 flex items-center justify-center border border-slate-200 hover:bg-slate-50 rounded-full transition-colors text-slate-600">
                <Icon name="chevron_left" className="w-4 h-4" />
              </button>
              <button type="button" className="w-8 h-8 flex items-center justify-center border border-slate-200 hover:bg-slate-50 rounded-full transition-colors text-slate-600">
                <Icon name="chevron_right" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-2 mb-8 text-center">
            {/* Days header */}
            <div className="font-bold text-xs text-red-500 py-1">일</div>
            <div className="font-bold text-xs text-slate-400 py-1">월</div>
            <div className="font-bold text-xs text-slate-400 py-1">화</div>
            <div className="font-bold text-xs text-slate-400 py-1">수</div>
            <div className="font-bold text-xs text-slate-400 py-1">목</div>
            <div className="font-bold text-xs text-slate-400 py-1">금</div>
            <div className="font-bold text-xs text-blue-500 py-1">토</div>
            
            {/* Calendar grid items */}
            {calendarCells}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-100 pt-6">
            {timeSlots.map((slot) => {
              const isSelected = selectedTime === slot.time;
              if (!slot.isAvailable) {
                return (
                  <button
                    key={slot.time}
                    type="button"
                    disabled
                    className="bg-slate-50 text-slate-400 p-3.5 rounded-2xl text-xs cursor-not-allowed font-bold border border-transparent"
                  >
                    {slot.time}
                  </button>
                );
              }

              return (
                <button
                  key={slot.time}
                  type="button"
                  onClick={() => setSelectedTime(slot.time)}
                  className={`p-3.5 rounded-2xl text-xs font-bold border transition-all ${
                    isSelected
                      ? "border-secondary bg-blue-50/50 text-secondary shadow-sm"
                      : "border-slate-200 text-slate-600 hover:border-secondary"
                  }`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step 2: Form */}
      <section className="bg-white border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-8 text-black border-b border-slate-100 pb-4">
          <Icon name="edit_document" className="w-6 h-6 text-secondary" />
          <h2 className="text-lg font-bold font-display">2. 예약 정보 입력</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Selected Info Summary Tag */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-wrap gap-4 text-xs font-bold text-slate-600 justify-between">
            <div>선택된 날짜: <span className="text-secondary font-extrabold">2024년 11월 {selectedDate}일</span></div>
            <div>선택된 시간: <span className="text-secondary font-extrabold">{selectedTime}</span></div>
          </div>

          {/* Guardian Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              예약자 성함 (보호자) <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              type="text"
              required
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
              className="w-full premium-input"
              placeholder="보호자 성함을 입력해 주세요"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              연락처 <span className="text-red-500 font-bold">*</span>{" "}
              <span className="text-slate-400 font-medium text-[10px]">(숫자만 입력, 자동 하이픈)</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={handlePhoneChange}
              placeholder="010-0000-0000"
              className="w-full premium-input"
            />
          </div>

          {/* School Level - Radio pill tabs */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              학생 구분 <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="grid grid-cols-3 gap-3 bg-slate-50 p-1 rounded-2xl border border-slate-200/50">
              {(["elem", "middle", "high"] as const).map((level) => {
                const label = level === "elem" ? "초등" : level === "middle" ? "중등" : "고등";
                const isSelected = studentLevel === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => handleLevelChange(level)}
                    className={`py-3 text-center rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-white text-secondary shadow-sm"
                        : "text-slate-500 hover:text-primary"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grade */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">
              학년 <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full premium-input bg-white cursor-pointer"
            >
              {gradeOptions}
            </select>
          </div>

          {/* School Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 flex justify-between">
              <span>학교명</span>
              <span className="text-slate-400 font-medium text-[10px]">(선택)</span>
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full premium-input"
              placeholder="재학 중인 학교명을 입력해 주세요"
            />
          </div>

          {/* Student Name */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 flex justify-between">
              <span>학생 이름</span>
              <span className="text-slate-400 font-medium text-[10px]">(선택)</span>
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full premium-input"
              placeholder="수강할 학생 이름을 입력해 주세요"
            />
          </div>

          {/* Consultation Notes */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 flex justify-between">
              <span>상담 희망 내용</span>
              <span className="text-slate-400 font-medium text-[10px]">(선택)</span>
            </label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full premium-input resize-none"
              placeholder="궁금하신 점이나 상담하고 싶은 구체적인 내용을 적어주세요."
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <input
              type="checkbox"
              required
              id="privacy"
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-secondary focus:ring-secondary transition-all"
            />
            <label className="text-xs font-semibold text-slate-600 cursor-pointer" htmlFor="privacy">
              개인정보 수집 및 이용에 동의합니다.{" "}
              <Link href="#" className="text-secondary font-bold underline">
                개인정보처리방침
              </Link>{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white font-bold text-sm py-4 rounded-full hover:bg-secondary active:scale-[0.98] transition-all shadow-md shadow-primary/10 hover:shadow-secondary/15 premium-glow-btn"
          >
            예약 신청 완료
          </button>
        </form>
      </section>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fadeIn" onClick={handleCloseModal}></div>
          <div className="relative bg-white rounded-3xl p-8 md:p-10 max-w-sm w-full text-center shadow-2xl animate-slideUp border border-slate-100">
            <div className="w-16 h-16 bg-indigo-50 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Icon name="check_circle" className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-xl font-extrabold text-black mb-3 font-display">예약 접수 완료</h2>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed font-semibold">
              상담 예약 신청이 정상적으로 완료되었습니다.
              <br />
              기재해주신 번호로 담당자가 곧 연락드리겠습니다.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-xs hover:bg-secondary active:scale-95 transition-all shadow-md shadow-primary/10"
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
