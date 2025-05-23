// app/layout.tsx or app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"; // ✅ Import the toaster

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Futuristic Portfolio",
  description: "A luxurious and futuristic portfolio website",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
