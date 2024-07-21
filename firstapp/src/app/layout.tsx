import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";




import { ColorSchemeScript, MantineProvider } from "@mantine/core"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bagaicha Restro And Bar ",
  description: "Tracking sales and expenses to monitor the financial health of your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>

      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}


