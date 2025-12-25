import ReportCard from '@/components/ReportCard';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Re-using the Issue interface for type safety
interface Issue {
  id: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  location: string;
  reporter: string;
  category: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
}

const BrowseIssuesPage = async () => {
  // Fetching all issues (no slicing)
  const response = await fetch(`${BASE_URL}/api/issues`, { cache: 'no-store' });
  const { issues }: { issues: Issue[] } = await response.json();

  return (
    <main className="min-h-screen bg-gray-50/30 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Browse Feed
            </h1>
            <p className="text-gray-500 font-medium">
              Monitoring {issues?.length || 0} active campus reports.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search reports or locations..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-green-500/20 outline-none transition-all font-medium"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="p-6 bg-green-900 rounded-4xl text-white overflow-hidden relative mb-12 w-max">
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-widest text-green-400 mb-2">
              Pro Tip
            </p>
            <p className="text-sm font-medium leading-relaxed">
              Upvote reports to help the facilities team prioritize the most
              urgent campus needs.
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-800 rounded-full opacity-50" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* The Big Feed */}
          <div className="lg:col-span-9">
            {issues && issues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {issues.map((issue) => (
                  <ReportCard
                    key={issue.id}
                    {...issue}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 font-bold">
                  No reports match your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BrowseIssuesPage;
