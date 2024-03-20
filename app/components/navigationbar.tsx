import Link from 'next/link'

export default function NavigationBar() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  )
}
