import React from 'react'
import DesktopMenu from '../components/DesktopMenu'

function SignOut() {


  return (
    <section className='flex'>
      <DesktopMenu />
      <div className='h-screen w-full flex items-center justify-center bg-neutral-900'>
        <button className='p-3 rounded-lg bg-white'>Log Out</button>
      </div>
    </section>
  )
}

export default SignOut