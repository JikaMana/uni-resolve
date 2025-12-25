'use client';

import Link from 'next/link';
import './globals.css';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-2xl w-full text-center relative">
        {/* Large Background 404 Text */}
        <h1 className="text-[12rem] md:text-[20rem] font-black text-gray-50 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          404
        </h1>

        <div className="relative z-10">
          <div className="flex justify-center mb-12">
            <div className="relative w-56 h-56">
              {/* Decorative Background Sheet */}
              <div className="absolute inset-0 bg-green-50 rounded-[3rem] rotate-12 border-2 border-dashed border-green-200" />

              {/* Main "Broken Report" Card */}
              <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 shadow-2xl border border-gray-100 flex flex-col items-center justify-center p-8">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="font-black text-gray-900 tracking-tighter text-sm">
                  PATH_NOT_RESOLVED
                </p>
                <div className="mt-4 w-full space-y-2 opacity-20">
                  <div className="h-2 w-full bg-gray-400 rounded-full" />
                  <div className="h-2 w-2/3 bg-gray-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Lost in the{' '}
              <span className="text-green-600 italic font-serif">Cloud?</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-sm mx-auto leading-relaxed">
              We couldn&#39;t find the page you&#39;re looking for. It might
              have been moved or broken.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-green-600 transition-all hover:shadow-xl active:scale-95">
                Go Home
              </Link>
              <button
                onClick={() => router.back()}
                className="w-full sm:w-auto px-10 py-4 cursor-pointer bg-white border border-gray-200 text-gray-900 font-black rounded-2xl hover:border-gray-900 transition-all active:scale-95">
                Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
