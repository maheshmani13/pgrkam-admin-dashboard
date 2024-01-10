import { useEffect } from "react";
import { Chart } from "chart.js";
function PieChart2(props) {
  var myChart;
  useEffect(() => {
    var ctx = document.getElementById("myChartPie").getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: props.label,
        datasets: [
          {
            label: "Jobs by Industry",
            data: props.data,
            borderColor: [
              "rgb(174, 206, 163)",
              "rgb(189, 224, 177)",
              "rgb(205, 243, 191)",
              "rgb(221, 261, 204)",
              "rgb(236, 280, 218)",
              "rgb(252, 299, 232)",
              "rgb(267, 317, 246)",
              "rgb(283, 336, 259)",
            ],
            backgroundColor: [
              "rgb(174, 206, 163)",
              "rgb(189, 224, 177)",
              "rgb(205, 243, 191)",
              "rgb(255, 185, 155)",
              "rgb(255, 204, 179)",
              "rgb(255, 223, 204)",
              "rgb(129, 148, 198)",
              "rgb(140, 160, 209)",
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
          <div className="text-center">Job Proportion</div>
          <canvas width={"500px"} height={"500px"} id="myChartPie"></canvas>
        </div>
      </div>
    </>
  );
}

export default PieChart2;
