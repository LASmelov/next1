import { Roboto } from 'next/font/google'
import './globals.css'
import Headers from "@/components/Headers";
import Footer from '@/components/Footer';

const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '100'] })

export const metadata = {
  title: {
    default: 'acme',
    template: '%s | acme',

  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <section><Headers /></section>
        <div>{children}</div>
        <section><Footer /></section>
      </body>
    </html>
  )
}
