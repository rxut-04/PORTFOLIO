import type React from "react"
import type { Metadata } from "next"
import { cinzel } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Om Raut – Frontend Developer & Designer Portfolio | CodeCraft Solutions",
  description:
    "Official portfolio of Om Raut (rxut) — full-stack developer and designer behind CodeCraft Solutions. Explore projects, skills, and get in touch. Also known as Raut Om.",
  keywords: [
    // Name variations
    "Om Raut",
    "Raut Om",
    "om raut",
    "raut om",
    "Om",
    "Raut",
    "rxut",
    "rxut-04",
    // Developer keywords
    "Om Raut developer",
    "Om Raut web developer",
    "Om Raut frontend developer",
    "Om Raut full stack developer",
    "Om Raut portfolio",
    "Om Raut developer portfolio",
    "Om Raut designer",
    "Om Raut React developer",
    "Om Raut Next.js developer",
    // Raut variations
    "Raut portfolio",
    "Raut developer portfolio",
    "Raut web developer",
    "Raut developer",
    // CodeCraft
    "CodeCraft Solutions",
    "Code Craft Solutions",
    "CodeCraft Solutions developer",
    "CodeCraft Solutions portfolio",
    "CodeCraft Solutions Om Raut",
    // rxut
    "rxut developer",
    "rxut portfolio",
    "rxut github",
  ],
  authors: [{ name: "Om Raut" }],
  creator: "Om Raut",
  metadataBase: new URL("https://rauttportfoliio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Om Raut | Portfolio – CodeCraft Solutions",
    description:
      "Official portfolio of Om Raut (rxut) — full-stack developer and designer behind CodeCraft Solutions. Explore projects, skills, and get in touch.",
    url: "https://rauttportfoliio.netlify.app",
    siteName: "Om Raut Portfolio | CodeCraft Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Raut | Portfolio – CodeCraft Solutions",
    description:
      "Official portfolio of Om Raut (rxut) — full-stack developer and designer behind CodeCraft Solutions.",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
      </head>
      <body className={`${cinzel.variable}`}>{children}</body>
    </html>
  )
}
