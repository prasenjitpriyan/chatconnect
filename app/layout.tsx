import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Connect - Messaging App",
  description:
    "Stay connected with friends and family using Chat Connect, a secure and user-friendly messaging app.",
  authors: [{ name: "Prasenjit Das" }],
  openGraph: {
    title: "Chat Connect - Messaging App",
    description:
      "Stay connected with friends and family using Chat Connect, a secure and user-friendly messaging app.",
    type: "website",
    url: "https://www.chatconnect.com",
    images: "http://localhost:3000/api/og",
    siteName: "Chat Connect - Messaging App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
