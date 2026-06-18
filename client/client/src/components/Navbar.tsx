import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md">
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-wide">
            <span className="text-[#D4AF37]">Kidrove</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#details"
              className="text-sm text-zinc-300 transition hover:text-[#D4AF37]"
            >
              Details
            </a>

            <a
              href="#outcomes"
              className="text-sm text-zinc-300 transition hover:text-[#D4AF37]"
            >
              Outcomes
            </a>

            <a
              href="#faq"
              className="text-sm text-zinc-300 transition hover:text-[#D4AF37]"
            >
              FAQ
            </a>

            <a
              href="#registration"
              className="rounded-lg bg-[#D4AF37] px-5 py-2 text-sm font-medium text-black transition hover:bg-[#F4D03F]"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#details"
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-[#D4AF37]"
              >
                Details
              </a>

              <a
                href="#outcomes"
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-[#D4AF37]"
              >
                Outcomes
              </a>

              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-[#D4AF37]"
              >
                FAQ
              </a>

              <a
                href="#registration"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-[#D4AF37] px-4 py-3 text-center font-medium text-black"
              >
                Enroll Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}