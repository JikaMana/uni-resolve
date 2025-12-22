'use client';

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
      className="mt-7 mx-auto"
      onClick={handleExploreClick}>
      <a href="#reports">
        View Reports
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
