import { useEffect } from "react";
import { Chart } from "chart.js";

function LineChart(props) {
  var myChart;
  useEffect(() => {
    var ctx = document.getElementById("myChart")?.getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [80, 90, 106, 106, 107, 111, 133],
            label: props?.title,
            borderColor: "#3e95cd",
            backgroundColor: "rgb(158,188,148)",
            fill: false,
          },
        ],
      },
    });
  }, []);
  return (
    <>
      <div className=" flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl bg-white my-auto  shadow-xl">
          <canvas width={500} height={400} id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default LineChart;
