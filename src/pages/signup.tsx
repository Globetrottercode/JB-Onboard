import RightIcon from "../icons/rightIcon";
import SideDesign from "../components/sideDesign";
import Link from "next/link";

export default function home() {
  return (
    <div className="item-strech flex  min-h-screen  justify-evenly bg-[#E2E7E9] ">
      <SideDesign />

      <div className="flex w-7/12  flex-col  items-center justify-evenly ">
        <p className="text-3xl">
          <strong>Sign Up</strong>
        </p>
        <div className="flex h-[5%] w-2/3 ">
          <div className="mt-3 h-[10%]  w-[37%]  bg-gradient-to-l from-[#9D9C9F] to-[#9D9C9F00]"></div>
          <p className="mx-2">Basic Details</p>
          <div className="mt-3 h-[10%]  w-[37%]  bg-gradient-to-r from-[#9D9C9F] to-[#9D9C9F00]"></div>
        </div>
        <div className="flex h-[70%] w-full flex-col items-center justify-between   ">
          <div className="flex h-[8%] w-2/3 justify-between ">
            <input
              placeholder="First name"
              className="... h-full w-[53%] rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
            <input
              placeholder="Last name"
              className="... h-full w-[43%] rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
          </div>
          <div className="flex h-[8%] w-2/3 justify-between ">
            <input
              type="email"
              placeholder="Email"
              className="... h-full w-full rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
          </div>
          <div className="flex h-[8%] w-2/3 justify-between ">
            <input
              placeholder="Phone"
              className="... h-full w-full rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
          </div>
          <div className="flex h-[8%] w-2/3 justify-between ">
            <input
              type="password"
              placeholder="Password"
              className="... h-full w-full rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
          </div>
          <div className="flex h-[8%] w-2/3 justify-between">
            <input
              type="password"
              placeholder="Confirm Password"
              className="... h-full w-full rounded-xl border-2 border-gray-300 indent-4 focus:border-blue-400 "
            />
          </div>
          <div className="flex h-[8%] w-2/3 justify-between ">
            <input
              type="date"
              placeholder="DOB (DD/MM/YYYY)"
              className="... h-[98%] w-[53%] rounded-xl border-2 border-gray-300 px-4  focus:border-blue-400 "
            />
            <select
              className=" ... h-full w-[43%] rounded-xl border-2 border-gray-300 pr-6 indent-4 text-slate-400 focus:border-blue-400 "
              name="cars"
              id="cars"
              form="carform"
            >
              <option className="" value="volvo">
                Current City
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>{" "}
          </div>
          <Link
            href="/signupotp"
            className="flex h-[8%] w-[30%] items-center justify-center rounded-xl  border-2 border-[#1A2F3D] bg-[#E2E7E9] hover:bg-[#1A2F3D] hover:text-white"
          >
            <p className="mx-2 ">Next</p> <RightIcon />
          </Link>
        </div>
      </div>
      <SideDesign />
    </div>
  );
}
