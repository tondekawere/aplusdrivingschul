

import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "digital nyika",
  description: "digital niyika",
  icons:{
    icon: "favicon.svg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (



    <html lang="en">
      <body >
        {children}

        </body>
    </html>



  );
}
