'use client';

import Image from 'next/image';
import Link from 'next/link';

import posthog from 'posthog-js';
import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  image: string;
  description: string;
  slug: string;
  location: string;
  category: string;
  reporter: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
}

const ReportCard = ({
  title,
  slug,
  location,
  priority,
  status,
  description,
  image,
}: Props) => {
  const handleCardClick = () => {
    posthog.capture('report_card_clicked', {
      report_title: title,
      report_slug: slug,
      report_location: location,
      report_status: status,
      report_urgency: priority,
    });
  };

  // Logic for color-coded badges
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      default:
        return 'bg-amber-50 text-amber-700 border-amber-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Emergency':
        return 'bg-red-500';
      case 'High':
        return 'bg-orange-500';
      case 'Medium':
        return 'bg-blue-500';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <Link
      href={`/issues/${slug}`}
      onClick={handleCardClick}
      className="group relative flex flex-col w-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-green-200">
      {/* Image Container with Overlay Badge */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image || '/placeholder.png'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border backdrop-blur-md ${getStatusStyles(
              status
            )}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`h-2 w-2 rounded-full ${getPriorityColor(
              priority
            )} animate-pulse`}
          />
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            {priority} Priority
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-medium italic">
          {description}
        </p>

        {/* Footer Info */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-600">
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xs font-bold text-gray-700">{location}</span>
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            <span className="text-green-600 text-sm font-bold flex items-center gap-1">
              View{' '}
              <span>
                <ArrowRight />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReportCard;
