import Image from "next/image";
import { Inter } from "next/font/google";
import PieChart from "@/components/PieChart";
import Link from "next/link";
import Layout from "../components/layout";
import Card from "../components/Card";
import Barchart from "@/components/BarChart";
import Barchart2 from "@/components/BarChart2";
import LineChart from "@/components/LineChart";
import { useEffect, useState } from "react";
import PieChart2 from "@/components/Piechart2";
const inter = Inter({ subsets: ["latin"] });

export default function Jobs() {
  const [jobdata, setJobdata] = useState([]);
  const [Totaljobs, settotaljobs] = useState(0);
  const [govtjobs, setgovtjobs] = useState(0);
  const [pvtjobs, setpvtjobs] = useState(0);
  const [avgsal, setavgsal] = useState(0);

  function createTopIndustriesArrays(jobData) {
    const industryData = {};

    // Process each job entry to calculate the count for each industry
    jobData.forEach((job) => {
      const industries = job.industry || [];

      industries.forEach((industry) => {
        if (!industryData[industry]) {
          industryData[industry] = 0;
        }

        industryData[industry]++;
      });
    });

    // Sort the industries based on the job count
    const sortedIndustries = Object.keys(industryData).sort(
      (a, b) => industryData[b] - industryData[a]
    );

    // Select the top 7 industries and create an "Other" category
    const topIndustries = sortedIndustries.slice(0, 7);
    const otherCategory = "Other";

    // Create arrays for industries and corresponding job counts
    const industriesArray = [...topIndustries, otherCategory];
    const jobCountsArray = industriesArray.map(
      (industry) => industryData[industry] || 0
    );

    return { industriesArray, jobCountsArray };
  }

  var ans;

  useEffect(() => {
    fetch("https://pgrkam2.onrender.com/api/v1/job")
      .then((res) => res.json())
      .then((data) => {
        setJobdata(data.data);
        console.log(data.data);
        ans = createTopIndustriesArrays(data.data);
        console.log(ans);
      });
  }, []);

  const pieindustry = [
    "IT-Software",
    "Software Services",
    "Recruitment",
    "Staffing",
    "BPO",
    "Call Centre",
    "ITES",
    "Other",
  ];
  const pienumber = [1355, 1355, 203, 203, 191, 191, 191, 41];

  const sortedIndustryArrays = [
    "Brewery",
    "Distillery",
    "Heat Ventilation",
    "Air Conditioning",
    "Government",
    "Defence",
    "Gems",
    "Jewellery",
    "Facility Management",
    "Wellness",
    "Fitness",
    "Sports",
    "Security",
    "Law Enforcement",
    "Iron and Steel",
  ];
  const sortedAvgSalariesArray = [
    "37500.00",
    "37500.00",
    "37500.00",
    "37500.00",
    "32500.00",
    "32500.00",
    "32500.00",
    "32500.00",
    "30500.00",
    "28928.57",
    "28928.57",
    "28928.57",
    "28750.00",
    "28750.00",
    "27500.00",
  ];

  const countsarray = [
    125, 170, 156, 141, 165, 152, 136, 169, 145, 160, 157, 167, 140, 152, 139,
    155, 140, 139, 168, 128,
  ];
  const locationarray = [
    "Ludhiana",
    "Barnala",
    "Fatehgarh Sahib",
    "Shahid Bhagat Singh Nagar",
    "Sangrur",
    "Patiala",
    "Tarn Taran",
    "Bathinda",
    "Moga",
    "Muktsar�(Sri Muktsar Sahib)",
    "Sahibzada Ajit Singh Nagar",
    "Mansa",
    "Firozpur",
    "Amritsar",
    "Jalandhar",
    "Hoshiarpur",
    "Rupnagar",
    "Gurdaspur",
    "Kapurthala",
    "Faridkot",
  ];

  const count = [20, 10, 10, 30, 30, 30, 60, 70, 90, 10, 40];
  const names = [
    "Amritsar",
    "Patiala",
    "Sangrur",
    "Sunam",
    "Mohali",
    "Ludhiana",
    "Jalandhar",
    "Mansa",
    "Faridkot",
    "Bathinda",
    "Gurdaspur",
  ];
  return (
    <Layout>
      <div className="flex">
        <Card value={3004} Statname={"Total Jobs"}></Card>
        <Card value={1536} Statname={"Government Jobs"}></Card>
        <Card value={1468} Statname={"Private Jobs"}></Card>
        <Card value={"Rs. 22,500"} Statname={"Average Salary"}></Card>
      </div>
      <div className="flex mt-10">
        <Barchart
          count={countsarray}
          names={locationarray}
          title={"No of Jobs"}
        ></Barchart>
        <Barchart2
          count={sortedAvgSalariesArray}
          names={sortedIndustryArrays}
          title={"Highest Average Salary"}
        ></Barchart2>
      </div>
      <div>
        <PieChart2 data={pienumber} label={pieindustry}></PieChart2>
      </div>
    </Layout>
  );
}
