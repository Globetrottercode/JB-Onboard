import Image from "next/image";
import RightIcon from "~/icons/rightIcon";
import LOGO from "../images/JobboxLogo-1.png";
import SideDesign from "../components/sideDesign";
import Link from "next/link";

export default function home() {
  return (
    <div className="item-strech flex  min-h-screen  justify-evenly bg-[#E2E7E9] ">
      <SideDesign />

      <div className="flex w-7/12 flex-col  items-center justify-evenly">
        <div className="flex h-1/6 w-1/2 items-center justify-center  ">
          <Image
            src={LOGO}
            width={180}
            height={180}
            alt={"Reference Image"}
            className="object-fit mr-2 rounded-b-2xl"
          />
        </div>
        <div className="flex h-3/6 w-full flex-col items-center justify-around  ">
          <div className="flex h-[24%] w-2/3 flex-col justify-evenly ">
            <input
              placeholder="Email/Phone Number"
              className="h-[50%] w-full rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
          </div>

          <Link
            href="/signupotp"
            className="flex h-[10%] w-1/3 items-center justify-center rounded-lg border-2 border-[#1A2F3D] bg-[#E2E7E9] hover:bg-[#1A2F3D] hover:text-white"
          >
            <p className="mx-2"> Get OTP</p> <RightIcon />
          </Link>
          {/* <button className="h-[8%] w-1/3 rounded-xl bg-[#1A2F3D] text-white">
            Log in
          </button> */}
          <div className="flex h-[5%] w-2/3 ">
            <div className="mt-3 h-[15%]  w-[48%]  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
            <p className="mx-2">or</p>
            <div className="mt-3 h-[15%]  w-[48%]  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
          </div>
          {/* <button className="flex h-[8%] w-2/3 items-center justify-center rounded-xl border-2 border-gray-400 bg-[#E2E7E9] "> */}
          {/* <Image
              src={googleIcon}
              width={25}
              height={25}
              alt={"Reference Image"}
              className="object-fit mr-2 rounded-b-2xl"
            />{" "} */}
          {/* Log in with Google */}
          {/* </button> */}
          <div className="flex h-[8%] w-2/4 items-center justify-center ">
            <p className="mr-2">Dont have an account ? </p>
            <div className="flex h-[190%] flex-col  justify-center">
              <Link href="/signup" className="mt-5 font-bold">
                {" "}
                SignUp Now{" "}
              </Link>
              <div className=" h-[35%] w-full rounded-[90%] border-x-2 border-t-2  border-solid border-x-[#E2E7E9] border-t-[#4280EF] "></div>
            </div>
          </div>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
