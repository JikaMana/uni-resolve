'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import posthog from 'posthog-js';

const Navbar = () => {
  const pathname = usePathname();

  const handleNavClick = (linkName: string) => {
    posthog.capture(`nav_${linkName.toLowerCase().replace(' ', '_')}_clicked`, {
      nav_location: 'header',
      link_name: linkName,
    });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Browse Issues', href: '/issues' },
    // { name: 'Analytics', href: '/analytics' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      <nav className="flex items-center justify-between w-full max-w-7xl px-4 md:px-6 py-3 bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl">
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => handleNavClick('Logo')}>
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-black tracking-tighter text-gray-900">
              UniResolve
            </span>
          </Link>

          {/* Desktop Links - Subtle & Professional */}
          <div className="hidden lg:flex items-center gap-6 border-l border-gray-100 pl-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.name)}
                  className={`text-sm font-bold transition-all ${
                    isActive
                      ? 'text-green-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: Auth & CTA */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/login"
            onClick={() => handleNavClick('Login')}
            className="hidden sm:block text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            Log in
          </Link>

          <div className="h-4 w-px bg-gray-200 hidden sm:block" />

          <Link
            href="/issues/new"
            onClick={() => handleNavClick('File Report')}
            className="hidden md:flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            File Report
          </Link>

          <Link
            href="/signup"
            onClick={() => handleNavClick('Get Started')}
            className="px-5 py-2.5 bg-green-600 text-white text-sm font-extrabold rounded-xl transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-100 active:scale-95">
            Get Started
          </Link>

          {/* Mobile Menu (Icon only) */}
          <button className="lg:hidden p-1 text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
