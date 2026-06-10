import React from 'react'
import Container from './container'
import Button from '../common/button'

const Section4 = () => {
  return (
     <div className="mb-20 mt-20">
        <Container>
          <h1 className="text-center font-futura md:text-3xl text-2xl uppercase font-semibold  mb-10">
            how to buy in <br className="md:hidden block" /> 3 simple steps
          </h1>
          <div className="flex justify-center ">
            {/* 1st */}
            <div className="bg-white shadow aspect-square md:w-44  w-32  rounded-2xl flex flex-col justify-center items-center">
              <div
                className=" bg-[#F4F4F5]
      aspect-square
      w-12
      md:w-24
      rounded-full
      flex
      items-center
      justify-center"
              >
                <p className="md:text-2xl text-lg">1</p>
              </div>
              <p className="md:text-[16px] font-futura text-center text-xs mt-2">
                Information
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="md:w-60 h-0.5 bg-black w-4 "></div>
            </div>

            {/* 2nd */}
            <div className="bg-white shadow aspect-square md:w-44 w-32  rounded-2xl flex flex-col justify-center items-center">
              <div
                className=" bg-[#F4F4F5]
      aspect-square
      w-12
      md:w-24
      rounded-full
      flex
      items-center
      justify-center"
              >
                <p className="md:text-2xl text-lg">2</p>
              </div>
              <p className="md:text-[16px] font-futura text-center text-xs mt-2 ">
                Insurance
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="md:w-60 h-0.5 bg-black w-4"></div>
            </div>
            {/* 3rd */}
            <div className="bg-white shadow  md:w-44 aspect-square w-32 rounded-2xl flex flex-col justify-center items-center">
              <div
                className=" bg-[#F4F4F5]
      aspect-square
      w-12
      md:w-24
      rounded-full
      flex
      items-center
      justify-center"
              >
                <p className="md:text-2xl text-lg">3</p>
              </div>
              <p className="md:text-[16px] font-futura text-center text-xs mt-2">
                Confirmation
              </p>
            </div>
          </div>
        </Container>
        <div className="flex justify-center mt-12">
          <Button
            text="PROTECT NOW"
            className="px-14 py-3 bg-[#FFFFFF] text-[#BA0C2F]  border border-[#BA0C2F]  rounded-full text-xl font-bold"
          />
        </div>
      </div>
  )
}

export default Section4