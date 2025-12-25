import ExploreBtn from '@/components/ExploreBtn';
import ReportCard from '@/components/ReportCard';
import { ArrowRight } from 'lucide-react';
import { cacheLife } from 'next/cache';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface Issue {
  id: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  location: string;
  category: string;
  // reporter: object;
  reporter: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
}

const Home = async () => {
  'use cache';
  cacheLife('minutes');
  const response = await fetch(`${BASE_URL}/api/issues`);
  const { issues } = await response.json();

  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900">
      {/* Design Element: Background Grid */}
      <div className="absolute inset-0 z-0 h-150 w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live at ABUAD
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[0.9] mb-8">
                Fix your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
                  Campus.
                </span>
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                The bridge between student feedback and facilities management.
                Report, track, and resolve infrastructure issues in real-time.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <ExploreBtn />
                <Link
                  href="/issues/new"
                  className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl shadow-gray-200">
                  File a Report
                </Link>
              </div>
            </div>

            {/* Visual Hook: A "Stat Card" cluster instead of a generic box */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6">
                  Network Health
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      label: 'Resolution Rate',
                      val: '94%',
                    },
                    {
                      label: 'Avg. Response',
                      val: '2.4 hrs',
                    },
                    {
                      label: 'Active Reports',
                      val: '12',
                    },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-gray-700">
                          {stat.label}
                        </span>
                        <span className="font-mono font-bold text-gray-900">
                          {stat.val}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-green-500 rounded-full`}
                          style={{
                            width: stat.val.includes('%') ? stat.val : '70%',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-18 -left-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-3xl font-black tracking-tighter">50+</p>
                <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                  Fixes Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section - Modern Feed Style */}
      <section
        className="py-32 bg-[#166534] border-y border-gray-100"
        id="recent-issues">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight">
                Recent Activity
              </h2>
              <p className="text-white font-medium mt-2">
                Transparency in action across the campus.
              </p>
            </div>
            <Link
              href="/issues"
              className="text-sm font-bold text-white hover:text-gray-100 uppercase tracking-widest flex items-center">
              Browse Archive
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>

          {issues && issues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {issues.slice(0, 3).map((issue: Issue) => (
                <div
                  key={issue.id}
                  className="group transition-transform duration-300 hover:-translate-y-2">
                  <ReportCard {...issue} />
                </div>
              ))}
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl">
              <p className="font-bold text-gray-400">
                All systems operational. No active reports.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA: Minimal & Bold */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8">
            See a problem? <br />
            <span className="italic font-serif">Let&#39;s fix it.</span>
          </h2>
          <Link
            href="/issues/new"
            className="bg-green-600 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-green-700 transition-all hover:scale-105 shadow-2xl shadow-green-200">
            Submit a Report Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
