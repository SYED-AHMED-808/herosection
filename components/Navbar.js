import React from 'react'
import MobileNav from './MobileNav'
import Image from 'next/image'
import { Button } from './ui/button'
import { nunitoSans, spaceGrotesk } from '@/app/layout'

const Navbar = () => {
  return (
    <div className='w-full z-50 fixed top-0 left-0 px-[24px] xl:px-[80px] bg-white'>
        <div className="w-full xl:hidden">
            <MobileNav/>
        </div>
        <div className="w-full hidden xl:block ">
            <div className="w-full h-[84px] flex justify-between items-center">
            <div className="">
                
                <Image src="/images/logo.svg" alt="logo" width="131" height="27" />
            </div>
            <div className={`${spaceGrotesk.className} text-[#242424] text-[18px] font-[500] flex items-center gap-[24px]`}>
                <div className="flex gap-[3px]">
                    <span>
                        Study-abroad
                    </span>
                    <Image src="/icons/down-arrow.svg" alt="down-arrow" width="20" height="20"/>
                </div>
                <div className="flex gap-[3px]">
                    <span>
                        Bootcamps
                    </span>
                    <Image src="/icons/down-arrow.svg" alt="down-arrow" width="20" height="20"/>
                </div>
                <div className="flex gap-[3px]">
                    <span>Products</span>
                    <Image src="/icons/down-arrow.svg" alt="down-arrow" width="20" height="20"/>
                </div>
                <div className="flex gap-[3px]">
                <Image src="/icons/ic_round-diamond.svg" alt="down-arrow" width="20" height="20"/>
                    <span>Ambitio Pro</span>
                </div>
                <div className="flex gap-[3px]">
                <Image src="/icons/ph_crown-fill.svg" alt="down-arrow" width="20" height="20"/>
                    <span>Ambitio Elite</span>
                </div>
            </div>
            <div className="">
            <Button className={`${nunitoSans.className} text-[#B1060F] text-[16px] font-[700] border-[#B1060F] border-[3px] rounded-xl  px-[15px] py-[13px] w-[234px] flex gap-[8px] items-center `} variant="outline">
                <Image src="/icons/phone.svg" alt='phone' width={20} height={20}/>
                Speak to our Experts</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar