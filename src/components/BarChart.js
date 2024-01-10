import { useEffect } from "react";
import { Chart } from "chart.js";
import { Bar } from "chart.js/auto";
function Barchart(props) {
  var myChart;
  useEffect(() => {
    var ctx = document.getElementById("myChartbar").getContext("2d");
    myChart?.destroy();
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.names,
        datasets: [
          {
            data: props.count,
            label: props.title,
            borderColor: "rgb(255, 255, 255)",
            backgroundColor: "rgb(120, 147,217)",
            borderWidth: 2,
          },
        ],
      },
    });
  }, []);

  return (
    <>
      {/* Bar chart */}

      <div className=" flex mx-auto my-auto">
        <div className="border bg-white rounded-md overflow-hidden border-gray-400 pt-0 rounded-xl my-auto  shadow-xl">
          <canvas
            width="500"
            className="bg-white rounded-lg shadow-lg"
            height="500"
            id="myChartbar"
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default Barchart;
