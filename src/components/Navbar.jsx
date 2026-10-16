import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

const SERVICES = [
  { label: 'Grooming', href: '/grooming' },
  { label: 'Veterinary Care', href: '/veterinary-care' },
  { label: 'Pet Boarding', href: '/pet-boarding' },
  { label: 'Pet Sitting', href: '/pet-sitting' },
  { label: 'Dog Walking', href: '/dog-walking' },
];

export default function Navbar({ currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const link = (active) =>
    `flex items-center h-[22px] text-[15px] leading-[22px] transition-colors hover:text-[#22947E] ${
      active ? 'text-[#22947E]' : 'text-[#17201E]'
    }`;

  const isGuide = ['guide', 'how-it-works'].includes(currentPage);
  const isServices = ['features', 'services'].includes(currentPage);
  const isAbout = currentPage === 'about';
  const isBlog = ['blog', 'blogdetails'].includes(currentPage);

  const ctaClass =
    'inline-flex items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] py-[14px] text-[15px] font-bold leading-[22px] text-white transition-colors hover:bg-[#25A58C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2DBB9F]';

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[rgba(23,32,30,0.08)] bg-[rgba(255,255,255,0.92)] backdrop-blur-[5px]"
      style={{ fontFamily: FONT }}
    >
      <nav className="mx-auto flex h-[76px] w-full max-w-[1280px] items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <a href="/" className="flex h-[76px] items-center gap-2 no-underline">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
          />
          <span className="flex h-[33px] items-center text-[22px] font-bold leading-[33px] tracking-[-0.66px] text-[#17201E]">
            MUNGO<span className="text-[#2DBB9F]">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          <li className="flex items-center">
            <a href="/how-it-works" className={link(isGuide)}>Guide</a>
          </li>

          <li className="relative flex items-center" ref={servicesRef}>
            <button
              type="button"
              id="servicesTrigger"
              className={`flex items-center gap-2 h-[22px] text-[15px] leading-[22px] transition-colors hover:text-[#22947E] ${
                isServices ? 'text-[#22947E]' : 'text-[#17201E]'
              }`}
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span className="leading-[22px]">Services</span>
              <ChevronDown
                size={14}
                strokeWidth={2}
                className={`shrink-0 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {servicesOpen && (
              <ul className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-[rgba(23,32,30,0.08)] bg-white p-2 shadow-lg">
                {SERVICES.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="block rounded-xl px-4 py-2.5 text-[15px] text-[#17201E] transition-colors hover:bg-[#F5FBF9] hover:text-[#22947E]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="flex items-center">
            <a href="/about" className={link(isAbout)}>About Us</a>
          </li>
          <li className="flex items-center">
            <a href="/blog" className={link(isBlog)}>Blog</a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a href="/download" className={`${ctaClass} hidden lg:inline-flex`}>
          Download now
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-[#17201E] lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-[rgba(23,32,30,0.08)] bg-white px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            <li><a href="/how-it-works" className={link(isGuide)}>Guide</a></li>
            <li>
              <span className={link(isServices)}>Services</span>
              <ul className="mt-2 flex flex-col gap-2 border-l border-[rgba(23,32,30,0.1)] pl-4">
                {SERVICES.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="text-[15px] text-[#66716D] hover:text-[#22947E]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li><a href="/about" className={link(isAbout)}>About Us</a></li>
            <li><a href="/blog" className={link(isBlog)}>Blog</a></li>
          </ul>
          <a href="/download" className={`${ctaClass} mt-6 w-full`}>Download now</a>
        </div>
      )}
    </header>
  );
}