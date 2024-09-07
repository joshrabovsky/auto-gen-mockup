import type { Metadata } from "next";
import '@/app/ui/global.css';
import { noto_sans } from '@/app/ui/fonts';

import SideNav from '@/app/ui/sidenav';

export const metadata: Metadata = {
  title: "AutoGen GPT",
  description: "AutoGen GPT mockup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
