'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import posthog from 'posthog-js';

const Navbar = () => {
  const handleLogoClick = () => {
    posthog.capture('logo_clicked', {
      nav_location: 'header',
    });
  };

  const handleNavClick = (linkName: string) => {
    posthog.capture(`nav_${linkName.toLowerCase().replace(' ', '_')}_clicked`, {
      nav_location: 'header',
      link_name: linkName,
    });
  };

  return (
    <header>
      <nav>
        <Link
          href="/"
          className="logo"
          onClick={handleLogoClick}>
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={24}
            height={24}
          />

          <p>UniResolve</p>
        </Link>

        <ul>
          <Link
            href="/"
            onClick={() => handleNavClick('Home')}>
            Home
          </Link>
          <Link
            href="/reports"
            onClick={() => handleNavClick('Reports')}>
            Reports
          </Link>
          <Link
            href="/reports/new"
            onClick={() => handleNavClick('File Report')}>
            File Report
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
