import Link from 'next/link';
import React, { memo } from 'react'

const Notifications=()=>{
  return (
<div className="border-b-xs pb-10 border-neutral-600 dark:border-neutral-850">
  <h2 className="text-2xl mt-10 mb-5 w-full">Notifications</h2>
  <div className="flex justify-between gap-20 items-center mb-10">
    <span className="text-base">Receive newsletters, promotions and news from Vstock Company</span>
    <label className="
        relative inline-block h-5 min-w-10 rounded-full
        transition-colors duration-150
        shadow-sm
        bg-blue-500 
        cursor-pointer
      "><input className="absolute inset-0 z-10 h-full cursor-pointer opacity-0" name="newslettersEnabled" type="checkbox" defaultChecked={false}/><span className="
          absolute left-0.5 top-0.5 size-4 rounded-full bg-white transition-transform 
          duration-150
          translate-x-5 border-piki-blue-500
        "></span></label></div><p className="mt-10 leading-snug text-sm">Vstock will process your data to send you information about our products and services, promotions, surveys, raffles, based on our legitimate interest, and updates from the creators you follow, if you have consented to this. Your data will not be disclosed to third parties. They will be communicated outside the EU under the terms of the <Link aria-label="Privacy Terms" className="font-bold   dark:text-piki-blue-500" href="/legal/privacy" rel="noreferrer noopener" target="_blank">privacy policy.</Link> You can opt out of our notifications with the slider. <Link aria-label="Privacy Terms" className="$font-bold $text-blueFreepik  dark:text-piki-blue-500" href="/legal/privacy" rel="noreferrer noopener" target="_blank">More information</Link></p></div>
  )
}

export default memo(Notifications);