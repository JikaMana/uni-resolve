import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-6">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={64}
                height={64}
              />
              <span className="text-4xl font-black tracking-tighter text-gray-900">
                UniResolve
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Empowering the Afe Babalola University community to maintain
              excellence through transparent infrastructure reporting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              {['Live Reports', 'Submit Issue', 'Campus Map', 'Analytics'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm font-bold text-gray-600 hover:text-green-600 transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                'Guidelines',
                'Privacy Policy',
                'Contact Facilities',
                'Admin Login',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm font-bold text-gray-600 hover:text-green-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* System Status - Makes it look professional */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
              System Status
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-gray-700">
                  API Operational
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-gray-700">
                  Database Healthy
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium mt-4 pt-4 border-t border-gray-200">
                Last fix deployed: a month ago
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} UniResolve • Built for ABUAD
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
