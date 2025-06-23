export const runtime = "edge";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genie Web",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
