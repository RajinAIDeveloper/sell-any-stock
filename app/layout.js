import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "StockLot Hub - Bangladesh's Premier Garment Stocklot Marketplace",
  description: "Connect with verified garment manufacturers and access premium factory surplus, export excess, and stocklot inventory at wholesale prices",
}




export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        geistSans.variable,
        geistMono.variable,
        "font-sans antialiased min-h-full flex flex-col"
      )}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}