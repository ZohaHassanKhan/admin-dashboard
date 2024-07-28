import React, { useState } from "react";
import Common from "../../common/Common";
import "./chart.css";
import ReactApexChart from "react-apexcharts";

const Charts = () => {
  const [accX, setAccX] = useState([1, 2, 3, 4, 5, 6, 10, 15]);
  const [accY, setAccY] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [accZ, setAccZ] = useState([1, 2, 3, 4, 5, 6, 7]);

  const [gyroX, setGyroX] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [gyroY, setGyroY] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [gyroZ, setGyroZ] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [magX, setmagX] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [magY, setmagY] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [magZ, setmagZ] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [temp, setTemp] = useState([1, 2, 3, 4, 5, 6, 7]);
  const data = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        // add this by typing
        foreColor: "grey",
      },
      fill: {
        colors: ["#35B8E0", "#6658DD", "#FF8ACC"],
      },
      stroke: {
        colors: ["#313844"],
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      labels: ["In-Store Sales", "Download Sales", "Mail-Order Sales"],
      legend: {
        position: "bottom",
      },
    },
  };

  const bardata = {
    series: [
      {
        name: "Net Profit",
        data: [65, 45, 75, 35, 30, 85],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        // add this by typing
        foreColor: "grey",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        foreColor: "#fff",
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      fill: {
        opacity: 1,
      },
      // remove  it tooltip
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

  const accXLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Acceration",
        data: accX.map((value, index) => [index, value]),
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
  const accYLine = {
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
  const accZLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Acceration Z",
        data: accZ.map((value, index) => [index, value]),
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
  const gyroXLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Gyroscope X",
        data: gyroX.map((value, index) => [index, value]),
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
  const gyroYLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Gyroscope Y",
        data: gyroY.map((value, index) => [index, value]),
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
  const gyroZLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Gyroscope Z",
        data: gyroZ.map((value, index) => [index, value]),
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
  const magXLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Magnetic X",
        data: magX.map((value, index) => [index, value]),
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
  const magYLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Magnetic Y",
        data: magY.map((value, index) => [index, value]),
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
  const magZLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Magnetic Z",
        data: magZ.map((value, index) => [index, value]),
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
  const tempLine = {
    series: [
      // {
      //   name: "Sales",
      //   data: [50, 60, 10, 60, 80, 30],
      // },
      {
        name: "Temperature",
        data: accX.map((value, index) => [index, value]),
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
    <>
      <section className="charts grid2">
        {/* <div className='cardBox'>
          <Common title='Daily Sales' />
          <ReactApexChart options={data.options} series={data.series} type='donut' height={350} />
        </div>
        <div className='cardBox'>
          <Common title='Statistics' />
          <ReactApexChart options={bardata.options} series={bardata.series} type='bar' height={350} />
        </div> */}
        <div className="cardBox">
          <Common title="Acceleration X" />
          <ReactApexChart
            options={accXLine.options}
            series={accXLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Acceleration Y" />
          <ReactApexChart
            options={accYLine.options}
            series={accYLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Acceleration Z" />
          <ReactApexChart
            options={accZLine.options}
            series={accZLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Gyroscope X" />
          <ReactApexChart
            options={gyroXLine.options}
            series={gyroXLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Gyroscope Y" />
          <ReactApexChart
            options={gyroYLine.options}
            series={gyroYLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Gyroscope Z" />
          <ReactApexChart
            options={gyroZLine.options}
            series={gyroZLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Magnetic X" />
          <ReactApexChart
            options={magXLine.options}
            series={magXLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Magnetic Y" />
          <ReactApexChart
            options={magYLine.options}
            series={magYLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Magnetic Z" />
          <ReactApexChart
            options={magZLine.options}
            series={magZLine.series}
            type="line"
            height={350}
          />
        </div>
        <div className="cardBox">
          <Common title="Temperature" />
          <ReactApexChart
            options={tempLine.options}
            series={tempLine.series}
            type="line"
            height={350}
          />
        </div>
      </section>
    </>
  );
};

export default Charts;
