import React from 'react'
import DesktopMenu from '../components/DesktopMenu'

function Settings() {
  return (
    
    <section className='flex'>
      <DesktopMenu />
      <div className='h-screen w-full flex-col items-center justify-center bg-neutral-900'>
        <div className="profile">
        </div>
        <div className="flex-col pt-24 py-16 px-4 h-screen items-center w-full justify-center">
          <div className="flex-col mb-10">
            <h1 className='text-white sm:text-4xl font-extrabold max-sm:text-2xl'>Theme</h1>
            <div className="flex items-center justify-between xl:mx-[10%]">
              <h1 className='text-white sm:text-2xl max-sm:text-sm mt-2'>Enable / Disable Dark Mode</h1>
              <label
                class="relative inline-block h-8 w-14 max-sm:h-6 max-sm:w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-black has-[:checked]:border-[0.5px] border-opacity-40 border-white"
              >
                <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
                <span
                  class="absolute inset-y-0 start-0 m-1 size-6 max-sm:size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                ></span>
              </label>
            </div>
          </div>
          <div className="flex-col mb-8">
            <h1 className='text-white sm:text-4xl font-extrabold max-sm:text-2xl'>Notification</h1>
            <div className="flex items-center justify-between xl:mx-[10%]">
              <h1 className='text-white sm:text-2xl max-sm:text-sm mt-2'>Enable / Disable Email push notifications</h1>
              <label
                class="relative inline-block h-8 w-14 max-sm:h-6 max-sm:w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-black has-[:checked]:border-[0.5px] border-opacity-40 border-white"
              >
                <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
                <span
                  class="absolute inset-y-0 start-0 m-1 size-6 max-sm:size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                ></span>
              </label>
            </div>
            <div className="flex items-center justify-between xl:mx-[10%] ">
              <h1 className='text-white sm:text-2xl max-sm:text-sm mt-2'>Daily / Weekly workout remindes</h1>
              <label
                class="relative inline-block h-8 w-14 max-sm:h-6 max-sm:w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-black has-[:checked]:border-[0.5px] border-opacity-40 border-white"
              >
                <input class="peer sr-only" id="AcceptConditions" type="checkbox" />
                <span
                  class="absolute inset-y-0 start-0 m-1 size-6 max-sm:size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings