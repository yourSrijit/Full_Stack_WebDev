import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

export const metadata = {
  title: 'ITC Royal Bengal',
  description: 'Book ITC Royal Bengal Hotel — Enjoy extraordinary services, world-class amenities & comfort at ITC Royal Bengal Kolkata.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <header>
          <Logo/>
          <Navigation/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
