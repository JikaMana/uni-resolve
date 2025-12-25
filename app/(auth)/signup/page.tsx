'use client';

import Link from 'next/link';
import Image from 'next/image';

const SignupPage = () => {
  const universities = [
    'Afe Babalola University (ABUAD)',
    'Nile University of Nigeria',
    'University of Lagos (UNILAG)',
    'University of Port Harcourt (UNIPORT)',
  ];

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Institutional Brand Wall */}
      <div className="hidden lg:flex bg-gray-900 relative items-center justify-center p-20 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#166534_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 max-w-md">
          <Link href="/">
            <div className="bg-green-600 w-max mb-2 p-2 rounded-xl">
              <Image
                src="/icons/logo.png"
                alt="logo"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>
          </Link>
          <div className="inline-flex px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400">
              Network Status: Expanding
            </span>
          </div>
          <h2 className="text-5xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            One platform. <br />
            <span className="text-green-500">Every Campus.</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium leading-relaxed mb-10">
            UniResolve is standardizing infrastructure reporting across
            Nigeria’s top institutions. Select your campus to begin.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold group-hover:border-green-500 transition-colors">
                1
              </div>
              <p className="text-gray-300 font-bold">Select your University</p>
            </div>
            <div className="flex items-center gap-4 group cursor-default">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold group-hover:border-green-500 transition-colors">
                2
              </div>
              <p className="text-gray-300 font-bold">Verify your identity</p>
            </div>
            <div className="flex items-center gap-4 group cursor-default">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold group-hover:border-green-500 transition-colors">
                3
              </div>
              <p className="text-gray-300 font-bold">Resolve campus issues</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Identity Form */}
      <div className="flex flex-col justify-center  px-4 md:px-8 lg:px-12 bg-white relative">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-500 font-medium mt-2">
            Join the digital resolution movement.
          </p>
        </div>

        {/* University Selection */}
        <div className="space-y-2 mb-5">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">
            Your University
          </label>
          <div className="relative">
            <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all font-bold text-gray-900 appearance-none cursor-pointer">
              <option
                value=""
                disabled
                selected>
                Select institution...
              </option>
              {universities.map((uni) => (
                <option
                  key={uni}
                  value={uni}>
                  {uni}
                </option>
              ))}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              ▼
            </div>
          </div>
        </div>

        {/* Google Signup */}
        <button className="w-full py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mb-6 shadow-sm">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          Sign up with Google
        </button>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-gray-400">
            <span className="bg-white px-4">Or enter details</span>
          </div>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Mukhtar Muhammad"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all font-medium"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all font-medium"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all font-medium"
            />
          </div>

          <div className="pt-4">
            <button className="w-full py-5 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition-all active:scale-[0.98] shadow-xl shadow-green-100">
              Create Account
            </button>
          </div>
        </form>

        <p className="text-center mt-8 text-sm font-medium text-gray-500">
          Already a member?{' '}
          <Link
            href="/login"
            className="text-green-600 font-black hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignupPage;
