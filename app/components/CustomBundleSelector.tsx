"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { courses, Course, WHATSAPP_NUMBER, CUSTOM_DISCOUNT_PERCENT } from "../data/courses";

function formatRupiah(price: number): string {
  return "Rp" + price.toLocaleString("id-ID");
}

const MIN_COURSES = 3;

export default function CustomBundleSelector() {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showDetails, setShowDetails] = useState(false);
  const prevLengthRef = useRef(0);

  const categories = ["all", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  // Fire confetti every time the user crosses from <3 to >=3
  useEffect(() => {
    if (prevLengthRef.current < MIN_COURSES && selectedCourses.length >= MIN_COURSES) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#c9943a", "#8b2635", "#f5f0eb", "#4a3728"],
      });
    }
    prevLengthRef.current = selectedCourses.length;
  }, [selectedCourses.length]);

  const toggleCourse = (course: Course) => {
    if (selectedCourses.find((c) => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const totalOriginalPrice = selectedCourses.reduce((sum, c) => sum + c.price, 0);
  const discountAmount = Math.round(totalOriginalPrice * (CUSTOM_DISCOUNT_PERCENT / 100));
  const finalPrice = totalOriginalPrice - discountAmount;

  const handleOrder = () => {
    if (selectedCourses.length < 3) return;

    const courseNames = selectedCourses.map((c) => `- ${c.name} (${formatRupiah(c.price)})`).join("\n");
    const message = encodeURIComponent(
      `Halo, saya ingin memesan paket bundling custom (${selectedCourses.length} kelas):\n\n${courseNames}\n\nTotal: ${formatRupiah(finalPrice)} (diskon ${CUSTOM_DISCOUNT_PERCENT}%, hemat ${formatRupiah(discountAmount)})\n\nTerima kasih!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Selected slots */}
      <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-1">
        {Array.from({ length: Math.max(MIN_COURSES, selectedCourses.length) }).map((_, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 bg-[#f5f0eb] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden relative"
          >
            {selectedCourses[index] ? (
              <>
                <Image
                  src={selectedCourses[index].image}
                  alt={selectedCourses[index].name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => toggleCourse(selectedCourses[index])}
                  className="absolute top-1 right-1 bg-red-500 text-white w-5 h-5 md:w-6 md:h-6 rounded-full text-xs md:text-sm font-bold hover:bg-red-600"
                >
                  ×
                </button>
              </>
            ) : (
              <span className="text-[#4a3728] text-4xl font-light opacity-50">?</span>
            )}
          </div>
        ))}
        {/* Ghost "+" slot — always visible to hint "add more" */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex-shrink-0 flex items-center justify-center border-2 border-dashed border-[#f5f0eb]/40">
          <span className="text-[#f5f0eb] text-3xl font-light opacity-40">+</span>
        </div>
      </div>

      {/* Selection info */}
      <div className="text-center space-y-1">
        <p className="text-sm md:text-base">
          {selectedCourses.length >= MIN_COURSES ? (
            <span className="text-[#c9943a] font-bold">
              Selamat kamu mendapatkan diskon {CUSTOM_DISCOUNT_PERCENT}%! 🎉
            </span>
          ) : (MIN_COURSES - selectedCourses.length) === 1 ? (
            <span className="opacity-80">
              <span className="font-bold">1 kelas lagi</span> kamu bisa dapat diskon {CUSTOM_DISCOUNT_PERCENT}%
            </span>
          ) : (
            <span className="opacity-80">
              Pilih <span className="font-bold">{MIN_COURSES - selectedCourses.length} kelas lagi</span> untuk dapatkan diskon {CUSTOM_DISCOUNT_PERCENT}%
            </span>
          )}
        </p>
        {selectedCourses.length < MIN_COURSES && (
          <p className="text-xs opacity-50">Minimal 3, tidak ada batas maksimal!</p>
        )}
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === cat
                ? "bg-[#c9943a] text-white"
                : "bg-[#f5f0eb] text-[#4a3728] hover:bg-[#e5ddd4]"
            }`}
          >
            {cat === "all" ? "Semua" : cat}
          </button>
        ))}
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filteredCourses.map((course) => {
          const isSelected = selectedCourses.find((c) => c.id === course.id);

          return (
            <button
              key={course.id}
              onClick={() => toggleCourse(course)}
              className={`bg-[#f5f0eb] rounded-xl p-3 text-left transition-all relative ${
                isSelected
                  ? "ring-4 ring-[#c9943a] scale-[1.02]"
                  : "hover:scale-[1.02]"
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 bg-[#c9943a] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold z-10">
                  ✓
                </div>
              )}
              {course.badge && (
                <div className="absolute top-2 left-2 bg-[#8b2635] text-white text-xs px-2 py-0.5 rounded-full z-10">
                  {course.badge}
                </div>
              )}
              <div className="aspect-square relative rounded-lg overflow-hidden mb-2">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-[#4a3728] font-semibold text-xs md:text-sm line-clamp-2 mb-1">
                {course.name}
              </h4>
              <p className="text-[#c9943a] font-bold text-sm">
                {formatRupiah(course.price)}
              </p>
            </button>
          );
        })}
      </div>

      {/* Price summary & Order button */}
      {selectedCourses.length > 0 && (
        <div className="sticky bottom-4 bg-[#f5f0eb] rounded-2xl p-4 shadow-xl text-[#4a3728]">
          {/* Header row with count + toggle */}
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {selectedCourses.length} kelas dipilih
                <svg
                  className={`w-4 h-4 transition-transform ${showDetails ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {selectedCourses.length >= MIN_COURSES && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm line-through opacity-50">
                    {formatRupiah(totalOriginalPrice)}
                  </span>
                  <span className="text-xl font-bold">{formatRupiah(finalPrice)}</span>
                  <span className="bg-[#8b2635] text-white text-xs px-2 py-0.5 rounded-full">
                    -{CUSTOM_DISCOUNT_PERCENT}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Expandable item list */}
          {showDetails && (
            <ul className="mt-3 mb-1 space-y-1 border-t border-[#4a3728]/10 pt-3 max-h-48 overflow-y-auto">
              {selectedCourses.map((course) => (
                <li key={course.id} className="flex items-center justify-between text-sm">
                  <span className="truncate mr-2">{course.name}</span>
                  <span className="flex-shrink-0 opacity-70">{formatRupiah(course.price)}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <button
            onClick={handleOrder}
            disabled={selectedCourses.length < MIN_COURSES}
            className={`w-full mt-3 py-3 rounded-full font-bold transition-all ${
              selectedCourses.length >= MIN_COURSES
                ? "bg-[#25d366] text-white hover:bg-[#1fb855]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Pesan via WhatsApp
          </button>

          {/* Savings text */}
          {selectedCourses.length >= MIN_COURSES && (
            <p className="text-center text-sm mt-2 text-[#25d366] font-semibold">
              Kamu hemat {formatRupiah(discountAmount)}!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
