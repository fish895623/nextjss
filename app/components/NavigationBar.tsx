import Link from 'next/link'
import './NavigationBar.css'

export default function NavigationBar() {
  return (
    <>
      {/* Create Site header */}
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
