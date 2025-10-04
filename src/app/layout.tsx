import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/UI/layout/Header";
import { Providers } from "@/providers/providers";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/app/auth/route";
import "./globals.css";
import AppLoader from "@/hoc/AppLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SessionProvider session={session}>
            <AppLoader>
              <Header />
              <main
                className="flex flex-col w-full items-center justify-start"
                style={{
                  height: `calc(100vh - ${layoutConfig.footerHeight} - ${layoutConfig.headerHeight})`,
                }}
              >
                {children}
              </main>
              <footer
                className={`flex justify-center items-center`}
                style={{ height: layoutConfig.footerHeight }}
              >
                <p>{siteConfig.description}</p>
              </footer>
            </AppLoader>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
