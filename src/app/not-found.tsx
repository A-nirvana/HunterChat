"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex justify-center items-center h-screen w-screen'>
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>

    </main>
  )
}