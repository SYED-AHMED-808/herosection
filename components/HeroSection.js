import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { nunitoSans, spaceGrotesk } from '@/app/layout'

const HeroSection = () => {
    return (
        <div className='w-full flex flex-col gap-8'>
            <div className="w-full flex flex-col items-center">
                <div className="w-full relative h-[286px] md:h-[338px] flex justify-center items-center">
                    <div className="bg-[url('/bg-frame/hero-bg.png')] absolute top-0 left-0 h-full w-full bg-auto bg-no-repeat md:bg-cover bg-center flex justify-center items-center
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-20 before:h-full 
                 before:backdrop-blur-[1px] 
                 before:bg-gradient-to-r before:from-[rgba(231,225,225,0.3)] before:to-transparent
  
                after:content-[''] after:absolute after:top-0 after:right-0 after:w-20 after:h-full 
                after:backdrop-blur-[1px] 
                after:bg-gradient-to-l after:from-[rgba(238,235,235,0.3)] after:to-transparent
                ">
                        <Image src="/icons/mid-crown.png" alt='crown' width={40} height={40} className="h-[90px] md:h-[120px] w-[90px] md:w-[120px] scale-50 md:scale-110" unoptimized />

                    </div>
                </div>
                <div className={`${spaceGrotesk.className} font-[600] flex flex-col items-center gap-[8px] md:gap-[24px] md:w-[752px] px-3 md:px-0 w-full`}>
                    <h1 data-aos="fade-up" className="text-[36px] md:text-[60px] font-[600] text-center text-[#242424] md:tracking-tight">Give the best shot <br className='hidden md:block' /> at your <span className="text-[#B10612] ">
                        Dream University</span></h1>
                    <p data-aos="fade-down" className={`${nunitoSans.className} text-center w-full text-[16px] md text-[16px]:md:text-[22px] text-[#696969]`}>Get expert help, personalised guidance, and all the support you need to  <br className="hidden md:block" />
                        <strong className='font-[700] text-[#212121]'>
                            increase your chances of success with Ambitio Elite.
                        </strong>
                    </p>
                    <Button data-aos="zoom-in" className={`${nunitoSans.className} font-[600] text-[18px] w-[308px] md:w-[328px] h-[56px]`}>10x your chances with Ambitio</Button>
                </div>
            </div>
            <div data-aos="zoom-in" className=" md:w-full flex flex-col lg:h-[335px] rounded-[20px] bg-gradient-to-r from-[#fed8da] via-[#fff7f8] to-[#fed8da] px-[24px] md:px-[152px] py-[31px] md:py-[56px] items-center">
                <div className="w-full flex flex-col items-center text-center ">
                    <h3 data-aos="fade-up" className={`${spaceGrotesk.className} text-[24px] md:text-[36px] font-[700] text-center text-[#242424]`}>We let <span className={`text-[#B1060F]`}>
                        our numbers {" "}
                    </span>
                        do the talking</h3>
                    <p data-aos="fade-up" className={`${nunitoSans.className} font-[600] text-[16px] md:text-[24px] text-[#696969] text-center`}>
                    Our users love us and we know you will to! Explore our products .
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row ">
                    <div data-aos="zoom-in" className="md:w-[322px] flex items-center text-center flex-col order-2 md:order-0">
                        <h5 className={`${spaceGrotesk.className} text-[#B1060F] font-[700] text-[48px] md:text-[64px]`}>
                            98.2%
                        </h5>
                        <p className={`${nunitoSans.className} text-[#696969] font-[500] text-[16px] md:text-[22px]`}>
                        got into their Target Program
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="md:w-[322px] flex items-center text-center flex-col order-1 md:order-0">
                        <h5 className={`${spaceGrotesk.className} text-[#B1060F] font-[700] text-[48px] md:text-[64px]`}>
                            4.96
                        </h5>
                        <p className={`${nunitoSans.className} text-[#696969] font-[500] text-[16px] md:text-[22px]`}>
                        Google Rating
                        </p>
                    </div>
                    <div data-aos="zoom-in" className="md:w-[322px] flex items-center text-center flex-col order-3 md:order-0">
                        <h5 className={`${spaceGrotesk.className} text-[#B1060F] font-[700] text-[48px] md:text-[64px]`}>
                            5000+
                        </h5>
                        <p className={`${nunitoSans.className} text-[#696969] font-[500] text-[16px] md:text-[22px]`}>
                        Students Assisted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection