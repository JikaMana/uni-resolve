'use client';

import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-10">
      {/* Left Side: Form */}
      <div className="flex flex-col justify-center px-4 md:px-8 lg:px-12 bg-white">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex mb-8">
            <div className="bg-green-600 p-2 rounded-xl">
              <Image
                src="/icons/logo.png"
                alt="logo"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>
          </Link>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Welcome back.
          </h1>
          <p className="text-gray-500 font-medium mt-2">
            Enter your credentials to manage reports within your campus.
          </p>
        </div>

        <form className="space-y-5">
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

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                Password
              </label>
              <Link
                href="#"
                className="text-xs font-bold text-green-600 hover:underline">
                Forgot?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all font-medium"
            />
          </div>

          <button className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-gray-800 transition-all active:scale-[0.98] shadow-xl shadow-gray-200">
            Sign In
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase font-black tracking-widest text-gray-400">
            <span className="bg-white px-4">Or continue with</span>
          </div>
        </div>

        {/* Google Login Button */}
        <button className="w-full py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          Sign in with Google
        </button>

        <p className="text-center mt-8 text-sm font-medium text-gray-500">
          Don&#39;t have an account?{' '}
          <Link
            href="/signup"
            className="text-green-600 font-black hover:underline">
            Get Started
          </Link>
        </p>
      </div>

      {/* Right Side: Brand Wall (Hidden on Mobile) */}
      <div className="hidden lg:flex bg-green-900 relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(circle_at_50%_50%,#166534_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-green-500/20 backdrop-blur-3xl rounded-3xl border border-white/10">
            <span className="text-4xl text-white font-black">“</span>
          </div>
          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Excellence is not an act, but a habit. Let&#39;s keep our campus
            beautiful.
          </h2>
          <p className="text-green-400 font-bold uppercase tracking-widest text-sm">
            - UniResolve
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400 rounded-full blur-[120px] opacity-20"></div>
      </div>
    </div>
  );
};

export default LoginPage;
