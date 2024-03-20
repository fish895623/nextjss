import Link from 'next/link'

export default function NavigationBar() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex' }}>
          <li style={{ listStyle: 'none' }}>
            <Link href="/">Home</Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
