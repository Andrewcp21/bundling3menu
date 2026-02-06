"use client";

import { useState } from "react";
import Image from "next/image";
import { courses, Course, WHATSAPP_NUMBER, CUSTOM_DISCOUNT_PERCENT } from "../data/courses";

function formatRupiah(price: number): string {
  return "Rp" + price.toLocaleString("id-ID");
}

export default function CustomBundleSelector() {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const toggleCourse = (course: Course) => {
    if (selectedCourses.find((c) => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter((c) => c.id !== course.id));
    } else if (selectedCourses.length < 3) {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const totalOriginalPrice = selectedCourses.reduce((sum, c) => sum + c.price, 0);
  const discountAmount = Math.round(totalOriginalPrice * (CUSTOM_DISCOUNT_PERCENT / 100));
  const finalPrice = totalOriginalPrice - discountAmount;

  const handleOrder = () => {
    if (selectedCourses.length !== 3) return;

    const courseNames = selectedCourses.map((c) => `- ${c.name}`).join("\n");
    const message = encodeURIComponent(
      `Halo, saya ingin memesan paket bundling custom:\n\n${courseNames}\n\nTotal: ${formatRupiah(finalPrice)} (diskon ${CUSTOM_DISCOUNT_PERCENT}%)\n\nTerima kasih!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Selected slots */}
      <div className="flex justify-center gap-4">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-24 h-24 md:w-28 md:h-28 bg-[#f5f0eb] rounded-xl flex items-center justify-center overflow-hidden relative"
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
                  className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full text-sm font-bold hover:bg-red-600"
                >
                  ×
                </button>
              </>
            ) : (
              <span className="text-[#4a3728] text-5xl font-light opacity-50">?</span>
            )}
          </div>
        ))}
      </div>

      {/* Selection info */}
      <p className="text-center text-sm md:text-base opacity-80">
        {selectedCourses.length === 3
          ? "Klik tombol di bawah untuk pesan via WhatsApp"
          : `Pilih ${3 - selectedCourses.length} kelas lagi`}
      </p>

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
          const isDisabled = !isSelected && selectedCourses.length >= 3;

          return (
            <button
              key={course.id}
              onClick={() => toggleCourse(course)}
              disabled={isDisabled}
              className={`bg-[#f5f0eb] rounded-xl p-3 text-left transition-all relative ${
                isSelected
                  ? "ring-4 ring-[#c9943a] scale-[1.02]"
                  : isDisabled
                  ? "opacity-50 cursor-not-allowed"
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
        <div className="sticky bottom-4 bg-[#f5f0eb] rounded-2xl p-4 shadow-xl">
          <div className="flex items-center justify-between text-[#4a3728]">
            <div>
              <p className="text-sm opacity-70">
                {selectedCourses.length} kelas dipilih
              </p>
              {selectedCourses.length === 3 && (
                <div className="flex items-center gap-2">
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
            <button
              onClick={handleOrder}
              disabled={selectedCourses.length !== 3}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedCourses.length === 3
                  ? "bg-[#25d366] text-white hover:bg-[#1fb855]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Pesan via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
