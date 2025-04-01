import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { spaceGrotesk } from '@/app/layout'
  

const MobileNav = () => {
  return (
    <div className="w-full flex justify-between items-center h-[70px] xl:hidden ">
        <div><Image src="/images/logo-small.svg" alt='logo' width={28} height={28}/></div>
        <div className='flex gap-[20px]'>
            <div className=""><Button className={`${spaceGrotesk.className} text-[#B1060F] text-[14px] font-[600] border-[#B1060F] border-[3px] rounded-xl  px-[15px] py-[13px] `} variant="outline">Speak to our Experts</Button>
            </div>
            <div className="">
            <Sheet>
  <SheetTrigger><Image src="/icons/menu-04.svg" alt='menu' width={28} height={28}/></SheetTrigger>
  <SheetContent>
  <div className={`${spaceGrotesk.className} text-[#242424] text-[18px] font-[500] flex flex-col items-center gap-[24px] mt-4`}>
                <div className="flex w-full pl-3 gap-[3px]">
                    <span>
                        Study-abroad
                    </span>
                    <Image src="/icons/down-arrow.svg" alt="down-arrow" width="20" height="20"/>
                </div>
                <div className="flex w-full pl-3 gap-[3px]">
                    <span>
                        Bootcamps
                    </span>
                    <Image src="/icons/down-arrow.svg" alt="down-arrow" width="20" height="20"/>
                </div>
                <div className="flex w-full pl-3 gap-[3px]">
                    <span>Products</span>
                    <Image src="/icons/down-arrow.svg" alt="down-arrow" width="20" height="20"/>
                </div>
                <div className="flex w-full pl-3 gap-[3px]">
                <Image src="/icons/ic_round-diamond.svg" alt="down-arrow" width="20" height="20"/>
                    <span>Ambitio Pro</span>
                </div>
                <div className="flex w-full pl-3 gap-[3px]">
                <Image src="/icons/ph_crown-fill.svg" alt="down-arrow" width="20" height="20"/>
                    <span>Ambitio Elite</span>
                </div>
            </div>
  </SheetContent>
</Sheet>
            </div>
        </div>
    </div>
  )
}

export default MobileNav