import type { Metadata } from 'next';
import { Martian_Mono, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-schibsted-sans',
  subsets: ['latin'],
});

const martianMono = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UniResolve | Student Issue Reporting Portal',
  description:
    'The official platform for students to report, track, and resolve campus infrastructure and academic issues.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}>
        <main className="p-0">{children}</main>
      </body>
    </html>
  );
}
