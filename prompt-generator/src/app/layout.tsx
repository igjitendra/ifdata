import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceFine Social Media Prompt Generator",
  description: "Create professional image, video, Reel, carousel and social-media content prompts for InvoiceFine.",
  icons: {
    icon: "./favicon.png",
  },
  openGraph: {
    title: "InvoiceFine Social Media Prompt Generator",
    description: "Create professional image, video, Reel, carousel and social-media content prompts for InvoiceFine.",
    siteName: "InvoiceFine Social Media Studio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased suppressHydrationWarning">
      <body className="min-h-full flex flex-col bg-zinc-100/70 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
