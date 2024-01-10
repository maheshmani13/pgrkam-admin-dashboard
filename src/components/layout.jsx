import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { useEffect, useState } from "react";
export default function Layout({ children }) {
  const userstate = useSetRecoilState(userState);

  const router = useRouter();
  let pathname = router.pathname;
  function handlesignout() {
    localStorage.setItem("token", "");
    userstate({
      userName: "",
    });
    pathname == "/" ? router.reload() : router.push("/");
  }
  const inactivelink = " text-xl text-gray-400 p-3 touded-lg";
  const activelink = " text-darkblue bg-gray-200 p-3 text-xl rounded-lg";
  return (
    <div className="flex h-screen">
      <div className="fixed bg-white h-screen w-6/36 flex flex-col  p-3 ">
        <div className="text-xl flex items-center gap-1 text- font-bold text-center">
          <Image src={"/plogo.png"} width={"50"} height={"50"} />
          <div>Dashboard</div>
        </div>
        <div className="flex flex-col justify-between h-full mt-10">
          <div className="flex flex-col gap-5 text-xl">
            <div
              onClick={() => {
                router.push("/user");
              }}
              className={
                pathname?.includes("/user") ? activelink : inactivelink
              }
            >
              Users
            </div>
            <div
              onClick={() => {
                router.push("/jobs");
              }}
              className={
                pathname?.includes("/jobs") ? activelink : inactivelink
              }
            >
              Jobs
            </div>
            {/* <div
              onClick={() => {
                router.push("/employees");
              }}
              className={
                pathname.includes("/employees") ? activelink : inactivelink
              }
            >
              Employers
            </div> */}
            <div
              onClick={() => {
                router.push("/filter");
              }}
              className={
                pathname?.includes("/filter") ? activelink : inactivelink
              }
            >
              Filter
            </div>
          </div>
          <div className="flex flex-col text-xl justify-center text-left items-start text-darkblue gap-5">
            <button
              className={
                "p-3 bg-logogreen text-white justify-center rounded-lg"
              }
              onClick={handlesignout}
            >
              Signout
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 ml-48 overflow-y-scroll p-4 bg-gradient-to-r from-darkorange  to-white">
        {children}
      </div>
    </div>
  );
}
