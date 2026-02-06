import Image from "next/image";
import BundleCard from "./components/BundleCard";
import CustomBundleSelector from "./components/CustomBundleSelector";
import { bundles, CUSTOM_DISCOUNT_PERCENT } from "./data/courses";

export default function Home() {
  return (
    <main className="min-h-screen pb-8">
      {/* Header */}
      <header className="py-6 flex justify-center">
        <div className="relative w-32 h-12">
          <Image
            src="/images/logo.png"
            alt="Kinonramekins"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">
          BUNDLING PACKAGE
        </h1>
        <p className="text-sm md:text-base opacity-80 max-w-md mx-auto">
          Cocok untuk hadiah valentine atau stok cemilan Imlek, lho!
        </p>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#4a3728]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-lg mx-auto px-4 py-3 flex gap-4 justify-center">
          <a
            href="#packages"
            className="px-4 py-2 bg-[#c9943a] text-white rounded-full text-sm font-medium hover:bg-[#a67c2e] transition-colors"
          >
            Paket Bundling
          </a>
          <a
            href="#custom"
            className="px-4 py-2 bg-[#f5f0eb] text-[#4a3728] rounded-full text-sm font-medium hover:bg-[#e5ddd4] transition-colors"
          >
            Custom Bundling
          </a>
        </div>
      </nav>

      {/* Pre-made Bundles Section */}
      <section id="packages" className="px-4 py-8 max-w-2xl mx-auto scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Pilih Paket Bundling</h2>
        <div className="space-y-4">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-md mx-auto px-8 py-4">
        <div className="border-t border-white/20 relative">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4a3728] px-4 text-sm opacity-70">
            atau
          </span>
        </div>
      </div>

      {/* Custom Bundle Section */}
      <section id="custom" className="px-4 py-8 max-w-4xl mx-auto scroll-mt-20">
        <div className="text-center mb-8">
          <p className="text-lg italic opacity-80 mb-2">Bingung pilih yang mana?</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Customize your package.
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-2">
            Bebas pilih 3 menu favorit kamu dan dapatkan
          </p>
          <div className="inline-block border-b-2 border-white/50 pb-1">
            <span className="text-2xl md:text-3xl font-bold">
              DISCOUNT {CUSTOM_DISCOUNT_PERCENT}%
            </span>
          </div>
        </div>

        <CustomBundleSelector />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm opacity-60">
        <p>&copy; {new Date().getFullYear()} Kinonramekins. All rights reserved.</p>
      </footer>
    </main>
  );
}
