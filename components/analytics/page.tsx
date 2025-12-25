const AnalyticsPage = () => {
  // Mock data isolated to the logged-in user's university (e.g., ABUAD)
  const stats = [
    { label: 'Active Reports', value: '142', detail: 'In your campus' },
    { label: 'Resolved (Month)', value: '89', detail: '82% success rate' },
    { label: 'Avg. Fix Time', value: '1.8d', detail: 'Top 10% nationally' },
  ];

  const locationData = [
    { name: 'Sowemimo Hall', resolved: 45, total: 50 },
    { name: 'Engineering Block', resolved: 32, total: 45 },
    { name: 'Main Cafeteria', resolved: 12, total: 20 },
    { name: 'Sports Complex', resolved: 28, total: 30 },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with University Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                Live Campus Insight
              </p>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">
              Campus <span className="text-green-600">Overview</span>
            </h1>
          </div>
          <div className="bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-xs">
              A
            </div>
            <span className="font-bold text-gray-700 text-sm">
              ABUAD Dashboard
            </span>
          </div>
        </div>

        {/* 1. Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group p-10 bg-gray-50 rounded-[3rem] border border-transparent hover:border-green-100 hover:bg-white transition-all hover:shadow-2xl hover:shadow-green-100/50">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                {s.label}
              </p>
              <h3 className="text-5xl font-black text-gray-900 mb-2">
                {s.value}
              </h3>
              <p className="text-sm font-bold text-green-600/60 uppercase tracking-tighter">
                {s.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Visual Section: Location Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Chart Area */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-2xl font-black tracking-tight">
              Resolution by Location
            </h3>
            <div className="space-y-6">
              {locationData.map((loc) => (
                <div
                  key={loc.name}
                  className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-700">{loc.name}</span>
                    <span className="font-black text-gray-400 text-xs">
                      {loc.resolved}/{loc.total} FIXED
                    </span>
                  </div>
                  <div className="h-4 w-full bg-gray-50 rounded-full overflow-hidden p-1 border border-gray-100">
                    <div
                      className="h-full bg-green-600 rounded-full transition-all duration-1000"
                      style={{ width: `${(loc.resolved / loc.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed Mini-sidebar */}
          <div className="lg:col-span-2 bg-gray-900 rounded-[3rem] p-10 text-white">
            <h3 className="text-xl font-black mb-8 italic">Efficiency Score</h3>
            <div className="relative h-48 flex items-center justify-center">
              {/* Simple CSS Gauge */}
              <div className="text-center">
                <div className="border-10 border-green-500 p-10 rounded-full">
                  <span className="text-5xl font-black block">94</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Excellent
                </span>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400 text-center font-medium leading-relaxed">
              Your campus is resolving issues 24% faster than the national
              average this semester.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnalyticsPage;
