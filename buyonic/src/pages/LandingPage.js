import React from 'react'

export const LandingPage = () => {
  return (
    <div class="relative bg-white w-[1440px] h-[4349px]">
      <div class="inline-flex space-x-40 items-center justify-end pl-5 pr-80 pt-4 absolute left-0 top-0 bg-green-500 w-[1440px] h-140px">
          <p class="w-1/4 h-20 text-6xl text-gray-800">BUYONIC</p>
          <p class="text-2xl text-gray-800">REGISTER</p>
          <p class="text-2xl text-gray-800">LOG IN</p>
      </div>
      <div class="absolute bg-gray-800 w-[671px] h-[883px] top-[141px] left-0"/>
      <div class="inline-flex items-end justify-start pr-40 pt-32 pb-28 absolute bg-gray-800 w-[769px] h-[932px] left-[671px] top-[1024px]">
          <img class="border border-black w-[602px] h-[694px]" src="../utils/1.png" alt=''/>
      </div>
      <img class="absolute shadow w-[666px] h-[706px] left-[185px] top-[230px]" src="../utils/1.png" alt=''/>
      <p class="absolute text-6xl font-light text-center w-[423px] h-[375px] left-[913px] top-[309px]">PRICE IS WHAT YOU PAY.<br/>VALUE IS WHAT YOU GOT</p>
      <div class="w-72 h-20 absolute left-[977px] top-[705px]">
          <div class="flex items-center justify-center flex-1 h-full px-20 py-5 bg-white border-2 border-black">
              <p class="text-2xl text-center">Learn More</p>
          </div>
      </div>
      <div class="inline-flex flex-col space-y-32 items-start justify-end pr-96 pt-12 pb-60 absolute bg-white shadow border border-black w-[1111px] h-[694px] left-[161px] top-[1150px]">
          <div class="relative w-[80px] h-[80px]">
              <div class="w-20 h-20 bg-green-500 rounded-full"/>
              <img class="w-14 h-14 absolute right-0 bottom-0" src="../utils/2.png" alt=''/>
          </div>
          <div class="border-black w-[510px] h-[1px]"/>
          <div class="flex flex-col space-y-96 items-center justify-center w-1/6 pr-0.5 pb-0.5">
              <img class="transform -rotate-45 w-14 h-14" src="../utils/2.png" alt=''/>
              <div class="w-full flex-1 bg-green-500 rounded-full"/>
          </div>
      </div>
      <div class="absolute left-0 bottom-0 w-[1434px] h-[774px]">
          <div class="absolute left-0 bottom-0 w-[1434px] h-[735.63px]">
              <div class="absolute bg-gray-800 w-[436.10px] h-[437.07px] left-[164.73px] top-0"/>
              <img class="absolute left-0 bottom-0 w-[1434px] h-[122.60px]" src="../utils/3.png" alt=''/>
              <img class="absolute w-[567.51px] h-[312.59px] left-[99.03px] top-[61.77px]" src="../utils/4.png"  alt=''/>
              <div class="inline-flex items-center justify-end pl-44 pr-28 pt-3 pb-2.5 absolute bg-gray-800 w-[422.77px] h-[51.48px] left=[830.31px] top-[385.60px]">
                  <p class="flex-1 h-full text-xl font-bold text-white">SUBMIT</p>
              </div>
              <div class="inline-flex items-start justify-start pl-3 pr-64 pt-4 pb-32 absolute border border-black border-opacity-40 w-[422.77px] h-[157.23px] left-[830.31px] top-[192.80px]">
                  <p class="flex-1 h-full text-xs font-light">Enter your message</p>
              </div>
              <div class="inline-flex items-center justify-start w-48 h-11 pl-3 pr-6 py-3 absolute border border-black border-opacity-40 left-[830.31px] top-[133.84px]">
                  <p class="flex-1 h-full text-xs font-light">Enter a valid email address</p>
              </div>
              <div class="inline-flex items-center justify-center w-48 h-11 px-4 py-3 absolute border border-black border-opacity-40 left-[1056.93px] top-[133.84px]">
                  <p class="flex-1 h-full text-xs font-light">Enter your name</p>
              </div>
          </div>
          <p class="absolute text-sm font-light w-[415.55px] h-[39.31px] left-[829.12px] top-[100.14px]">Sample text. Click to select the text box. Click again or double click to start editing the text</p>
          <p class="w-56 h-16 absolute text-5xl font-light left-[823px] top-0">Contact Us</p>
      </div>
    </div>
  )
}
