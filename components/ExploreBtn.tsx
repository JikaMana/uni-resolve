'use client';

import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import posthog from 'posthog-js';

const ExploreBtn = () => {
  const handleExploreClick = () => {
    // Capture explore reports click event - renamed to suit UniResolve
    posthog.capture('explore_reports_clicked', {
      button_location: 'hero_section',
      button_text: 'View Reports',
    });
  };

  return (
    <button
      type="button"
      id="explore-btn"
      className="mx-auto border-gray-200 bg-white w-fit cursor-pointer rounded-full border px-8 py-3.5 max-sm:w-full text-center hover:bg-green-50"
      onClick={handleExploreClick}>
      <a
        href="#recent-issues"
        className="flex-center gap-2 text-center w-full text-green-700 font-medium">
        View Reports
        <ArrowDown />
      </a>
    </button>
  );
};

export default ExploreBtn;
