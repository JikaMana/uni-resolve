'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const NewIssuePage = () => {
  const router = useRouter();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const studentBodies = [
    'Student Union Government (SUG)',
    'Hall Management Council',
    'Departmental Association',
    'Faculty Executive',
    'Sports Commission',
    'Facilities & Maintenance Office',
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 pb-20 pt-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
            File a{' '}
            <span className="text-green-600 italic font-serif">Complaint</span>
          </h1>
          <p className="text-gray-500 font-medium">
            Provide details about the issue. Your report helps us improve the
            campus experience.
          </p>
        </div>

        {/* The Form Card */}
        <form className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-8 md:p-12 space-y-8">
          {/* Section 1: Target Authority */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-300" />
              Direct to Authority
            </label>
            <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 font-bold focus:ring-2 focus:ring-green-500/20 focus:border-green-600 outline-none transition-all appearance-none cursor-pointer">
              <option value="">Select a student body or office...</option>
              {studentBodies.map((body) => (
                <option
                  key={body}
                  value={body}>
                  {body}
                </option>
              ))}
            </select>
          </div>

          {/* Section 2: Core Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                Issue Title
              </label>
              <input
                type="text"
                placeholder="Brief summary..."
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Hall A, Cafeteria..."
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Section 3: Description */}
          <div className="space-y-4">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Detailed Description
            </label>
            <textarea
              rows={4}
              placeholder="Tell us more about the situation..."
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
            />
          </div>

          {/* Section 4: Image Upload Placeholder */}
          <div className="border-2 border-dashed border-gray-100 rounded-4xl p-8 flex flex-col items-center justify-center hover:bg-green-50/50 hover:border-green-200 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-bold text-gray-600">
              Upload Evidence (Optional)
            </p>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">
              PNG, JPG up to 10MB
            </p>
          </div>

          {/* Section 5: Anonymous Switch */}
          <div className="flex items-center justify-between p-6 bg-gray-900 rounded-4xl text-white">
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-xl ${
                  isAnonymous
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-white/10 text-gray-400'
                }`}>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold tracking-tight">Post Anonymously</p>
                <p className="text-[10px] text-gray-400 uppercase font-black">
                  Hide your identity from the public feed
                </p>
              </div>
            </div>

            {/* Custom Switch Toggle */}
            <button
              type="button"
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${
                isAnonymous ? 'bg-green-500' : 'bg-gray-700'
              }`}>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isAnonymous ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 bg-green-600 text-white font-black text-lg rounded-4xl shadow-xl shadow-green-100 hover:bg-green-700 hover:scale-[1.01] transition-all active:scale-95">
            Submit Complaint
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-8 font-bold uppercase tracking-[0.2em]">
          University Compliance & Security Standards Applied
        </p>
      </div>
    </main>
  );
};

export default NewIssuePage;
