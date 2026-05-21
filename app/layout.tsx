import type React from "react"
import type { Metadata } from "next"
import { cinzel } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Om Raut | Portfolio – Web Developer & Designer",
  description:
    "Official portfolio of Om Raut – a passionate web developer and designer. Explore projects, skills, and get in touch.",
  keywords: [
    "Om Raut",
    "Om Raut portfolio",
    "Raut portfolio",
    "Om Raut developer",
    "Om Raut web developer",
    "Om Raut designer",
    "portfolio Om Raut",
  ],
  authors: [{ name: "Om Raut" }],
  creator: "Om Raut",
  metadataBase: new URL("https://rauttportfoliio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Om Raut | Portfolio",
    description:
      "Official portfolio of Om Raut – web developer and designer. Explore projects, skills, and get in touch.",
    url: "https://rauttportfoliio.netlify.app",
    siteName: "Om Raut Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Raut | Portfolio",
    description:
      "Official portfolio of Om Raut – web developer and designer.",
    creator: "@omraut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "0xaakOIaCY6mwUrH1_vpdwsgMQv5PIhCicZQztATi2I",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
      </head>
      <body className={`${cinzel.variable}`}>{children}</body>
    </html>
  )
}
