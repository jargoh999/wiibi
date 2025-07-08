import type { Metadata } from "next";
import "./globals.css";





export const metadata: Metadata = {
  title: "Wiibi Energy",
  description: "Energy Solutions Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Plus_Jakarta_Sans',_sans-serif]">
          {children}
      </body>
    </html>
  );
}
