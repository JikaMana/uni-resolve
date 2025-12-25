import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ShareButton from '@/components/ShareButton';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface PageProps {
  params: Promise<{ slug: string }>;
}

const IssueDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const response = await fetch(`${BASE_URL}/api/issues/${slug}`, {
    cache: 'no-store',
  });

  if (!response.ok) return notFound();

  const {
    issue: {
      category,
      title,
      location,
      image,
      description,
      priority,
      reporter,
      status,
      createdAt,
      updatedAt,
    },
  } = await response.json();

  if (!description) return notFound();

  return (
    <main className="min-h-screen bg-gray-50/50 pb-20 pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="mb-8 flex items-center justify-between">
          <Link
            href="/issues"
            className="group flex items-center text-sm font-bold text-gray-500 hover:text-green-600 transition-colors">
            <span className="mr-2 transition-transform group-hover:-translate-x-1">
              <ArrowLeft size={18} />
            </span>
            Back to Feed
          </Link>
          <ShareButton />
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-500 shadow-sm">
                  {category}
                </span>
                <span
                  className={`h-2 w-2 rounded-full animate-pulse ${
                    status === 'Resolved' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {title}
              </h1>

              <div className="flex items-center gap-6 text-gray-500 font-medium text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
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
                  {location}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(createdAt).toLocaleDateString(undefined, {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>

            {image && (
              <div className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 bg-white">
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="block"
                  priority
                />
              </div>
            )}

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-4 h-1 bg-gray-300" />
                Case Description
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-xl shadow-gray-200">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Current Status
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black">{status}</span>
                    <span
                      className={`flex h-3 w-3 rounded-full ${
                        status === 'Resolved'
                          ? 'bg-green-500 shadow-[0_0_10px_#10b981]'
                          : 'bg-amber-500 shadow-[0_0_10px_#f59e0b]'
                      }`}
                    />
                  </div>
                </div>
                <div className="h-1 bg-gray-800" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Priority Level
                  </p>
                  <div
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-black uppercase tracking-tighter ${
                      priority === 'High'
                        ? 'bg-red-500/10 text-red-500'
                        : 'bg-green-500/10 text-green-500'
                    }`}>
                    {priority} Urgency
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                Reporter Information
              </p>
              {reporter ? (
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-700 font-black text-xl">
                    {reporter.name?.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-black tracking-tight truncate">
                      {reporter.name}
                    </p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider truncate">
                      {reporter.email}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-900 font-black tracking-tight">
                  Anonymous Student
                </p>
              )}
            </div>

            <div className="px-4 space-y-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>Created</span>
                <span className="text-gray-900">
                  {new Date(createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>Last Activity</span>
                <span className="text-gray-900">
                  {new Date(updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default IssueDetailsPage;
