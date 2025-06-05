import type React from "react"
import { cinzel } from "./fonts"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable}`}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
