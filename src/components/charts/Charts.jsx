import React, { useState, useEffect } from "react";
import Common from "../../common/Common";
import "./chart.css";
import ReactApexChart from "react-apexcharts";
import { db } from "../configFirbase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const Charts = () => {
  const [accXLine, setAccXLine] = useState(null);
  const [accY, setAccY] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [accYLine, setAccYLine] = useState(null);
  const [accZLine, setAccZLine] = useState(null);
  const [gyroXLine, setgyroXLine] = useState(null);
  const [gyroYLine, setgyroYLine] = useState(null);
  const [gyroZLine, setgyroZLine] = useState(null);
  const [magXLine, setmagXLine] = useState(null);
  const [magYLine, setmagYLine] = useState(null);
  const [magZLine, setmagZLine] = useState(null);
  const [temp, setTemp] = useState(null);
  const [loader, setLoader] = useState(true);
  const usersCollectionRef = collection(db, "sensorData");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    const sensorData = data.docs.map((doc) => doc.data());
    if (sensorData.length > 0) {
      const firstDataSet = sensorData[0];

      setTemp({
        series: [
          {
            name: "Temperature",
            data: firstDataSet.temperature.map((value, index) => [
              index + 1,
              value,
            ]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setAccXLine({
        series: [
          {
            name: "Acceleration X",
            data: firstDataSet.accx.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setAccYLine({
        series: [
          {
            name: "Acceleration Y",
            data: firstDataSet.accy.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setAccZLine({
        series: [
          {
            name: "Acceleration Z",
            data: firstDataSet.accz.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setgyroXLine({
        series: [
          {
            name: "Gyroscope X",
            data: firstDataSet.gryox.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setgyroYLine({
        series: [
          {
            name: "Gyroscope Y",
            data: firstDataSet.gyroy.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setgyroZLine({
        series: [
          {
            name: "Gyroscope Z",
            data: firstDataSet.gyroz.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setmagXLine({
        series: [
          {
            name: "Magnetometer X",
            data: firstDataSet.magx.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setmagYLine({
        series: [
          {
            name: "Magnetometer Y",
            data: firstDataSet.magy.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setmagZLine({
        series: [
          {
            name: "Magnetometer Z",
            data: firstDataSet.magz.map((value, index) => [index + 1, value]),
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            foreColor: "grey",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
          yaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: true,
            },
          },
        },
      });

      setLoader(false);
      console.log("sensorData", sensorData);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const accY1Line = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Acceration Y",
        data: accY.map((value, index) => [index, value]),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        //add
        foreColor: "grey",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: ["2015", "2016", "2017", "2018", "2019", "2020"],
      },
      //add it
      grid: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
    },
  };

  return (
    <div>
      {loader ? (
        <div>Loading </div>
      ) : (
        <section className="charts grid2">
          {accXLine && (
            <div className="cardBox">
              <Common title="Acceleration X" />
              <ReactApexChart
                options={accY1Line.options}
                series={accXLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {accYLine && (
            <div className="cardBox">
              <Common title="Acceleration Y" />
              <ReactApexChart
                options={accY1Line.options}
                series={accYLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {accZLine && (
            <div className="cardBox">
              <Common title="Acceleration Z" />
              <ReactApexChart
                options={accY1Line.options}
                series={accZLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {gyroXLine && (
            <div className="cardBox">
              <Common title="Gyroscope X" />
              <ReactApexChart
                options={accY1Line.options}
                series={gyroXLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {gyroYLine && (
            <div className="cardBox">
              <Common title="Gyroscope Y" />
              <ReactApexChart
                options={accY1Line.options}
                series={gyroYLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {gyroZLine && (
            <div className="cardBox">
              <Common title="Gyroscope Z" />
              <ReactApexChart
                options={accY1Line.options}
                series={gyroZLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {magXLine && (
            <div className="cardBox">
              <Common title="Magnetic X" />
              <ReactApexChart
                options={accY1Line.options}
                series={magXLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {magYLine && (
            <div className="cardBox">
              <Common title="Magnetic Y" />
              <ReactApexChart
                options={accY1Line.options}
                series={magYLine.series}
                type="line"
                height={350}
              />
            </div>
          )}

          {magZLine && (
            <div className="cardBox">
              <Common title="Magnetic Z" />
              <ReactApexChart
                options={magZLine.options}
                series={magZLine.series}
                type="line"
                height={350}
              />
            </div>
          )}
          {temp && (
            <div className="cardBox">
              <Common title="Temperature" />
              <ReactApexChart
                options={accY1Line.options}
                series={temp.series}
                type="line"
                height={350}
              />
            </div>
          )}
        </section>
      )}
    </div>

    // <>
    //   {loader ? (
    //     <div>loading</div>
    //   ) : (
    //     <div className="col-sm-6">
    //       <div className="col-md-12 col-sm-12 mt-3">
    //         <ReactApexChart
    //           options={accY1Line.options}
    //           series={temp.series}
    //           type="line"
    //           height={350}
    //         />
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default Charts;
