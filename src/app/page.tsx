import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-[#22252c] text-white/90 min-h-screen p-8 flex items-center justify-center' >
        <div className='w-[900px] space-y-2 text-center'>
          <h1 className='text-7xl font-bold text-balance'>Find <span className='text-accent'>events</span> all around the world.</h1>
        <p className='text-white/50 text-xl'>You can start browsing right now!</p>
        <form>
          <input placeholder='Type any city to find the event you are looking for...' className='placeholder:text-center text-center text-white/90 text-sm outline-none rounded-md w-2/3 h-12 bg-[#4e5056] p-4' type="text" spellCheck={false} />
        </form>
        <div className='flex gap-4 text-sm text-white/50 justify-center'>
          <p>Popular places:</p>
          <div className='flex gap-4 font-bold'>
            <Link href={"/events/newyork"}>New York</Link>
            <Link href={"/events/istanbul"}>Istanbul</Link>
          </div>
        </div></div>
        
    </main>
  )
}
