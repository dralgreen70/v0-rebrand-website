import type { Metadata } from "next"
import { Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Dr. Allen Green MD – Global Apheresis | TPE & Apheresis Specialist",
  description:
    "Dr. Allen P. Green, MD — Associate Medical Director at Global Apheresis. Specialist in Therapeutic Plasma Exchange (TPE/PLEX), lipid apheresis, and cellular collections for longevity, health optimization, and preventative medicine.",
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
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
