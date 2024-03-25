import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Folka Cars",
  description: "Rent a car here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative">{children}</body>
      </html>
    </ClerkProvider>
  );
}
