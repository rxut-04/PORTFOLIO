import type React from "react"
import type { Metadata } from "next"
import { cinzel } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Om Raut – Frontend Developer & Designer Portfolio | CodeCraft Solutions",
  description:
    "Official portfolio of Om Raut (rxut) — full-stack developer and designer from Nashik, Maharashtra, India. Behind CodeCraft Solutions. Explore projects, skills, and get in touch. Also known as Raut Om.",
  keywords: [
    // ── Name variations ──
    "Om Raut", "Raut Om", "om raut", "raut om", "rxut", "rxut-04",

    // ── Om Raut + role ──
    "Om Raut developer", "Om Raut web developer", "Om Raut frontend developer",
    "Om Raut full stack developer", "Om Raut React developer",
    "Om Raut Next.js developer", "Om Raut Node.js developer",
    "Om Raut designer", "Om Raut UI designer", "Om Raut freelancer",

    // ── Om Raut + portfolio ──
    "Om Raut portfolio", "Om Raut developer portfolio",
    "Om Raut projects", "Om Raut GitHub",

    // ── Om Raut + location ──
    "Om Raut India", "Om Raut Maharashtra", "Om Raut Nashik",
    "Om Raut Nashik developer", "Om Raut Indian developer",

    // ── Raut variations ──
    "Raut portfolio", "Raut developer portfolio", "Raut web developer",
    "Raut developer", "Raut full stack developer",

    // ── rxut ──
    "rxut developer", "rxut portfolio", "rxut github", "rxut-04 github",

    // ── CodeCraft ──
    "CodeCraft Solutions", "Code Craft Solutions",
    "CodeCraft Solutions developer", "CodeCraft Solutions portfolio",
    "CodeCraft Solutions projects", "CodeCraft Solutions Om Raut",

    // ── Nashik location ──
    "web developer Nashik", "full stack developer Nashik",
    "React developer Nashik", "Next.js developer Nashik",
    "freelance web developer Nashik", "hire web developer Nashik",
    "software developer Nashik", "web designer Nashik",
    "Nashik web developer", "Nashik developer portfolio",
    "Nashik full stack developer", "Nashik React developer",

    // ── India location ──
    "web developer India", "full stack developer India",
    "React developer India", "Next.js developer India",
    "Node.js developer India", "freelance web developer India",
    "freelance React developer India", "hire web developer India",
    "hire React developer India", "hire full stack developer India",
    "web developer portfolio India", "full stack developer portfolio India",

    // ── Maharashtra ──
    "web developer Maharashtra", "full stack developer Maharashtra",
    "freelance developer Maharashtra",

    // ── Service based (high intent) ──
    "web developer for hire", "full stack developer for hire",
    "freelance web developer", "freelance full stack developer",
    "React developer portfolio", "Next.js developer portfolio",

    // ── Final year project ──
    "final year project developer", "final year project help",
    "final year project India", "computer science final year project",
    "final year project web development", "build final year project",
    "final year project Nashik",

    // ── Tech stack ──
    "Next.js portfolio", "React developer portfolio",
    "GSAP portfolio website", "Tailwind CSS developer",
    "full stack developer portfolio",
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
