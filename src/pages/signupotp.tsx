/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
import React from "react";
import RightIcon from "../icons/rightIcon";
import SideDesign from "../components/sideDesign";

export default function OTP() {
  let currentOtpIndex = 0;
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newOTP: string[] = [...otp];
    newOTP[currentOtpIndex] = value.substring(value.length - 1);

    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);
    console.log(currentOtpIndex);

    setOtp([...newOTP]);
  };
  console.log(otp);
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    setTimeout(() => {
      if (e.key === "Backspace") setActiveOtpIndex(index - 1);
    });
  };
  return (
    <div className="item-strech flex  min-h-screen  justify-evenly bg-[#E2E7E9] ">
      <SideDesign />

      <div className="flex w-7/12  flex-col  items-center justify-evenly ">
        <p className="text-3xl">
          <strong>Sign Up</strong>
        </p>
        <div className="flex h-[5%] w-2/3 justify-center ">
          <div className="mt-3 h-[10%]  w-[30%]  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
          <p className="mx-4">OTP Verification</p>
          <div className="mt-3 h-[10%]  w-[30%]  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
        </div>
        <div className="flex h-[60%] w-full flex-col items-center justify-around   ">
          <div className="flex h-[30%] w-[66%] flex-col items-center justify-evenly ">
            <p>Enter OTP</p>
            <div className="flex h-1/2 w-[66%] items-center justify-evenly ">
              {otp.map((_, index) => {
                return (
                  <>
                    <input
                      ref={index === activeOtpIndex ? inputRef : null}
                      type="number"
                      className="h-[80%] w-[16%] rounded-xl border-2 border-[#0C2231] bg-[#E2E7E9] indent-[42%] text-2xl"
                      onChange={handleChange}
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      value={otp[index]}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  </>
                );
              })}
            </div>
            <p>Check Email/Phone(abc@gmail.com)/(+91 ** ** *** ***) </p>
          </div>
          <div className="flex h-[24%] w-[66%] flex-col items-center justify-evenly">
            <p className="">
              Didn't Receive OTP ? <strong>Resend Now(49 secs)</strong>
            </p>
            <button className="flex h-[40%] w-1/2 items-center justify-center rounded-lg border-2 border-[#1A2F3D] bg-[#E2E7E9] hover:bg-[#1A2F3D] hover:text-white">
              <p className="mx-2">Submit OTP</p> <RightIcon />
            </button>
          </div>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
