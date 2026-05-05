import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Revenue Tracker — Catch Every Deal in Slack',
  description: 'Automatically detect and categorize revenue mentions in Slack channels. AI-powered dashboards for sales teams tracking $50k–$500k ARR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c2c686b3-a44e-41d4-ac6e-5e63a5562f95"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
