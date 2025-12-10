import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3 Monkeys - Phuket Panwa",
  description: "Organic Luxury Massage",
  icons: {
    icon: '/icon.png', // Aici pui numele fisierului tau din folderul public
    apple: '/icon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}