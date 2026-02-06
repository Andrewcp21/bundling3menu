"use client";

import Image from "next/image";
import { Bundle, WHATSAPP_NUMBER } from "../data/courses";

interface BundleCardProps {
  bundle: Bundle;
}

function formatPrice(price: number): string {
  return Math.round(price / 1000) + "K";
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const colorClasses = {
    gold: "bg-[#c9943a] hover:bg-[#a67c2e]",
    red: "bg-[#8b2635] hover:bg-[#6d1f2a]",
    brown: "bg-[#6b4423] hover:bg-[#4a3728]",
  };

  const handleOrder = () => {
    const message = encodeURIComponent(
      `Halo, saya ingin memesan paket bundling "${bundle.name}" seharga Rp${bundle.discountedPrice.toLocaleString("id-ID")}. Terima kasih!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-[#f5f0eb] rounded-2xl p-4 text-[#4a3728]">
      {/* Top section: image, title, items, price */}
      <div className="flex gap-4 items-start mb-4">
        <div className="w-28 h-28 md:w-32 md:h-32 relative flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={bundle.image}
            alt={bundle.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg md:text-xl mb-2">{bundle.name}</h3>
          <ul className="text-sm md:text-base space-y-1">
            {bundle.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#c9943a]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price badge */}
        <div className={`${colorClasses[bundle.color].split(" ")[0]} text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center flex-shrink-0`}>
          <span className="text-[10px] md:text-xs line-through opacity-70">
            {formatPrice(bundle.originalPrice)}
          </span>
          <span className="text-lg md:text-xl font-bold">
            {formatPrice(bundle.discountedPrice)}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleOrder}
        className={`w-full ${colorClasses[bundle.color]} text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Pesan via WhatsApp
      </button>
    </div>
  );
}
