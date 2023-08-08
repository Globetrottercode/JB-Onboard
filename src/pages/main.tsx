import LogoSvg from "../components/svg";
import Image from "next/image";
import refImg from "../images/image.png";
import TopArrow from "../icons/topArrow";
import SideDesign from "../components/sideDesign";

export default function home() {
  return (
    <div className="item-strech flex  min-h-screen  justify-evenly bg-[#E2E7E9] ">
      <SideDesign />
      <div className="flex w-7/12 flex-col  items-center justify-evenly">
        <div className="flex h-1/6 w-1/2 items-center justify-center  ">
          <LogoSvg />
        </div>
        <div className="flex h-4/6 w-full flex-col ">
          <div className="mt-16 flex  h-3/6 w-full items-center  justify-around ">
            <div className="flex h-full w-5/12  flex-col  items-center overflow-hidden rounded-2xl bg-[#E2E7E9]  ">
              <div className="flex w-full  justify-center rounded-t-2xl border-x-2 border-t-2  border-gray-300 ">
                <h1 className="mb-4 mt-4 text-xl">Candidate</h1>
              </div>
              <Image
                src={refImg}
                width={500}
                height={500}
                alt={"Reference Image"}
                className="object-fit rounded-b-2xl"
              />
            </div>
            <div className="flex h-full w-5/12  flex-col  items-center overflow-hidden rounded-2xl bg-[#E2E7E9]  ">
              <div className="flex w-full  justify-center  rounded-t-2xl border-x-2 border-t-2  border-gray-300 ">
                <h1 className="mb-4 mt-4 text-xl">Employer</h1>
              </div>
              <Image
                src={refImg}
                width={500}
                height={500}
                alt={"Reference Image"}
                className="object-fit rounded-b-2xl"
              />
            </div>
          </div>
          <div className="mt-8 flex  h-1/6 w-full   justify-around">
            <div className=" flex h-3/5 w-4/12 justify-between   border-b-2 border-black">
              <h1 className="mb-4 text-xl">Get Started</h1>
              <TopArrow />
            </div>
            <div className=" flex h-3/5 w-4/12 justify-between   border-b-2 border-black">
              <h1 className="mb-4 text-xl">Get Started</h1>
              <TopArrow />
            </div>
          </div>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
