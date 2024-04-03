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
        </ul>
      </nav>
    </>
  )
}
