'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import posthog from 'posthog-js';

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  urgency: 'Low' | 'Medium' | 'High' | 'Emergency';
}

const ReportCard = ({
  title,
  image,
  slug,
  location,
  status,
  urgency,
}: Props) => {
  const handleCardClick = () => {
    // Capture report card click event
    posthog.capture('report_card_clicked', {
      report_title: title,
      report_slug: slug,
      report_location: location,
      report_status: status,
      report_urgency: urgency,
    });
  };

  return (
    <Link
      href={`/reports`} // Updated route
      id="event-card"
      onClick={handleCardClick}>
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />

      <div className="flex flex-row gap-2">
        <Image
          src="/icons/pin.svg"
          alt="location"
          width={15}
          height={14}
        />
        {location}
      </div>

      <p className="title">{title}</p>

      {/* Reusing your datetime styling for Status */}
      <div className="datetime">
        <Image
          src="/icons/calendar.svg" // Make sure to add a status icon or keep calendar for now
          alt="status"
          width={15}
          height={14}
        />
        <p>
          Status: <strong>{status}</strong>
        </p>
      </div>

      {/* Reusing your datetime styling for Urgency */}
      <div className="datetime">
        <Image
          src="/icons/clock.svg" // Make sure to add a priority icon or keep time for now
          alt="urgency"
          width={15}
          height={14}
        />
        <p>
          Urgency: <strong>{urgency}</strong>
        </p>
      </div>
    </Link>
  );
};

export default ReportCard;
