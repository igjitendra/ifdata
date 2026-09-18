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
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('invoicefine_theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
