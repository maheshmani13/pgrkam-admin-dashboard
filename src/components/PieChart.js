import { useEffect } from "react";
import { Chart } from "chart.js";
function PieChart(props) {
  var myChart;
  useEffect(() => {
    var ctx = document.getElementById("myChartPie").getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Instagram", "Facebook", "LinkedIN"],
        datasets: [
          {
            label: "Traffic Source Frequency",
            data: [
              props?.data?.instagram,
              props?.data?.facebook,
              props?.data?.linkedin,
            ],
            borderColor: [
              "rgb(158, 188, 148)",
              "rgb(255, 168, 124)",
              "rgb(120, 147, 217)",
            ],
            backgroundColor: [
              "rgb(158, 188, 148)",
              "rgb(255, 168, 124)",
              "rgb(120, 147, 217)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-[500px] h-screen flex mx-auto my-auto">
        <div className="border w-[500px] h-[500px] bg-white border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2">
          <canvas width={"500px"} height={"500px"} id="myChartPie"></canvas>
        </div>
      </div>
    </>
  );
}

export default PieChart;
