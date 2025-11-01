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

export const metadata = {
      generator: 'v0.dev'
    };
