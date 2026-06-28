import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ConvertBooking — AI-Powered Booking Agent for Local Businesses",
  description:
    "ConvertBooking is your AI agent that optimizes your website, SEO, Google Maps, Tripadvisor, Yelp, and Dianping — so you get more customers while you run your business.",
  openGraph: {
    title: "ConvertBooking — AI-Powered Booking Agent",
    description:
      "Turn every channel into confirmed bookings. Your AI agent optimizes website, SEO, Google Maps, Tripadvisor, Yelp, and Dianping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
