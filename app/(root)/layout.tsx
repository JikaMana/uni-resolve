import type { Metadata } from 'next';
import LightRays from '@/components/LightRays';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      <body>
        <Navbar />
        {/* <div className="absolute inset-0 top-0 -z-1 min-h-screen h-full">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={1.2}
            rayLength={15}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.01}
            className="custom-rays"
          />
        </div> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
