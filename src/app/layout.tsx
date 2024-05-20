

import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Plus Driving School",
  description: "www.aplusdrivingschool.co.zw",
  icons:{
    icon: "logo.png"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>{children}</body>
    </html>
  );
}