import Layout from "./layout";
import Card from "./Card";
import { Chart } from "chart.js";
import Barchart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
export default function UserPage() {
  const router = useRouter();
  const [trackdata, settrack] = useState(undefined);
  const [barchartdata, setbarchartdata] = useState([]);
  const [district_count, setdistrict_count] = useState([]);
  const [userdetails, setuserdetails] = useState({});
  const [district_names, setdistrict_names] = useState([]);
  const [success, setsuccess] = useState(0);
  const [successtotal, setsuccesstotal] = useState(0);
  const [successapplied, setsuccessapplied] = useState(0);
  useEffect(() => {
    fetch("https://pgrkam2.onrender.com/api/v1/application")
      .then((data) => data.json())
      .then((data) => {
        setsuccess(data.data);
        console.log(data.data);
        setsuccesstotal(data.data.length);
      });
  }, []);
  useEffect(() => {
    fetch("https://pgrkam2.onrender.com/api/v1/track/stats")
      .then((data) => data.json())
      .then((data) => {
        settrack(data.data);
        console.log(data.data);
      });
  }, []);
  function createCityArrays(dataArray) {
    const citiesArray = dataArray.map((item) => item.city);
    const countsArray = dataArray.map((item) => item.count);

    return { citiesArray, countsArray };
  }
  var ans;
  useEffect(() => {
    fetch("https://pgrkam2.onrender.com/api/v1/applicant/stats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        ans = createCityArrays(data.data);
        setdistrict_count(ans.countsArray);
        setdistrict_names(ans.citiesArray);
        // setbarchartdata(data.data);
      });
  }, []);

  useEffect(() => {
    fetch("https://pgrkam2.onrender.com/api/v1/user/userstats")
      .then((data) => data.json())
      .then((data) => setuserdetails(data.data[0]));
  }, []);

  return (
    <Layout>
      <div className="flex justify-around">
        <Card
          value={userdetails.totalUsers}
          Statname={"Total Registered Users"}
        ></Card>
        <Card
          value={
            (
              (successtotal /
                parseInt(
                  parseInt(userdetails.totalUsers) -
                    parseInt(userdetails.deadUsers)
                )) *
              100
            ).toFixed(2) + "%"
          }
          Statname={"Success Rate"}
        ></Card>
        <Card
          value={userdetails.activeUsers}
          Statname={"Active Users (30 Mins)"}
        ></Card>
        <Card value={userdetails.deadUsers} Statname={"Dead Users"}></Card>
      </div>
      <div className="flex ">
        <div className="flex w-1/2 justify-between text-center items-center">
          {district_count.length && district_names.length > 0 ? (
            <Barchart
              title={"Total Registered Users"}
              count={district_count}
              names={district_names}
            ></Barchart>
          ) : (
            <div className="flex w-1/2 justify-center text-center items-center">
              Bar Chart Loading...
            </div>
          )}
        </div>
        <div className="flex w-1/2 justify-center text-center items-center">
          {trackdata == undefined ? (
            <div>Pie Chart Loading...</div>
          ) : (
            <>
              <PieChart data={trackdata}></PieChart>
            </>
          )}
        </div>
      </div>
      {/* <div className="flex justify-center w-full">
        <LineChart title={"Monthly Growth of Users"}></LineChart>
      </div> */}
    </Layout>
  );
}
