import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "../components/layout";
import Card from "../components/Card";
import Barchart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/userState";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import UserPage from "@/components/UserPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  // const [trackdata, settrack] = useState({});
  // const [barchartdata, setbarchartdata] = useState([]);
  // const [district_count, setdistrict_count] = useState([]);
  // const [district_names, setdistrict_names] = useState([]);
  // const [userdetails, setuserdetails] = useState({});
  // useEffect(() => {
  //   fetch("https://pgrkam2.onrender.com/api/v1/applicant/stats")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       var data = data.data;

  //       const count = data.map((data) => data.count);
  //       setdistrict_count(count);
  //       const names = data.map((data) => data.city);
  //       setdistrict_names(names);
  //       console.log(count);
  //       console.log(names);

  //       // setbarchartdata(data.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://pgrkam2.onrender.com/api/v1/track/stats")
  //     .then((data) => data.json())
  //     .then((data) => settrack(data.data));
  // }, []);
  // useEffect(() => {
  //   fetch("https://pgrkam2.onrender.com/api/v1/user/userstats")
  //     .then((data) => data.json())
  //     .then((data) => setuserdetails(data.data[0]));
  // }, []);

  const userstate = useRecoilValue(userState);

  // if (userstate.userName == "") {
  return (
    <div>
      <div className="h-12 flex items-center justify-center bg-darkorange text-center text-white">
        PUNJAB GHAR GHAR ROZGAR
      </div>
      <div className="bg-gradient-to-b from-white to-bgyellow h-screen">
        <div className="mt-20 px-20 mx-20 flex gap-10 items-center justify-center">
          <Image src={"/plogo.png"} height={414} width={414} />
          <div className="flex flex-col gap-5">
            <div className="w-96 font-bold">
              PUNJAB GHAR GHAR ROZGAR Department of Employment Generation, Skill
              Development & Training- Govt. Of Punjab, India
            </div>
            <div className="text-gray-600">
              Punjab Employment and Enterprise System
            </div>
            <div className="flex gap-5">
              <button
                type=""
                onClick={() => router.push("/signin")}
                className="bg-logogreen px-8 py-2 text-lg text-white rounded-lg"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push("/signup")}
                type=""
                className="bg-logogreen px-8 py-2 text-lg text-white rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 flex items-center justify-center bg-darkorange text-center text-white">
        For Queries contact - Contact Number : 9876546734 E-Mail ID :
        xyzabc@gmail.com
      </div>
    </div>
  );
  // }
  return (
    // <Layout>
    //   <div className="flex justify-around">
    //     <Card
    //       value={userdetails.totalUsers}
    //       Statname={"Total Registered Users"}
    //     ></Card>
    //     <Card
    //       value={parseInt(
    //         parseInt(userdetails.totalUsers) - parseInt(userdetails.deadUsers)
    //       )}
    //       Statname={"Total yearly acive users"}
    //     ></Card>
    //     <Card
    //       value={userdetails.activeUsers}
    //       Statname={"Total Active Users (30 Mins)"}
    //     ></Card>
    //     <Card value={userdetails.deadUsers} Statname={"Dead Users"}></Card>
    //   </div>
    //   <div className="flex mt-10">
    //     <Barchart
    //       title={"Total Registered Users"}
    //       count={district_count}
    //       names={district_names}
    //     ></Barchart>
    //     <LineChart title={"Monthly Growth of Users"}></LineChart>
    //   </div>
    //   <div className="flex justify-center w-full">
    //     <PieChart data={trackdata}></PieChart>
    //   </div>
    // </Layout>
    <UserPage></UserPage>
  );
}
