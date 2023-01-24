import React from "react";
import { AiOutlineAreaChart, AiOutlineDollarCircle } from "react-icons/ai";
import { CgList } from "react-icons/cg";
import { MdLocalShipping } from "react-icons/md";
import { Column } from "@ant-design/plots";
import PieChart from "../components/PieChart";
import LatestOrderTable from "../components/LatestOrderTable";

const cardData = [
  {
    title: "Revenue",
    income: "$13,234.80",
    desc: "Shipping fees are not included",
    icon: <AiOutlineDollarCircle />,
  },
  {
    title: "Orders",
    income: "$34.80",
    desc: "Shipping fees are not included",
    icon: <MdLocalShipping />,
  },
  {
    title: "Products",
    income: "$40.80",
    desc: "Shipping fees are not included",
    icon: <CgList />,
  },
  {
    title: "Monthly Earning",
    income: "$6,834",
    desc: "Shipping fees are not included",
    icon: <AiOutlineAreaChart />,
  },
];

const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "Jul",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 68,
    },
    {
      type: "Sept",
      sales: 48,
    },
    {
      type: "Oct",
      sales: 28,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 76,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      // 'top', 'bottom', 'middle',

      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Months",
      },
      sales: {
        alias: "Income",
      },
    },
  };

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl">Dashboard</h1>
        <button
          type="submit"
          className=" rounded-md border border-transparent bg-indigo-600 px-7 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="text-xl pr-3">+</span>
          Create Report
        </button>
      </div>
      <div className="flex gap-3 my-9">
        {cardData.map((data, i) => {
          return (
            <div
              key={i}
              className="rounded-lg border border-1 border-gray-300 bg-white p-4 flex-grow"
            >
              <div className="flex justify-between gap-5">
                <div className=" m-auto bg-indigo-300 p-3 rounded-full">
                  <span className="text-2xl"> {data.icon}</span>
                </div>
                <div>
                  <h2 className="text-lg mb-3">{data.title}</h2>
                  <p className="text-3xl mb-2">{data.income}</p>
                  <p className="text-xs text-gray-400">{data.desc} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5">
        <div className="w-2/3 bg-white p-7 rounded-md">
          <h1 className="text-3xl mb-7">Sale statistics</h1>
          <div className="h-fit">
            <Column {...config} />
          </div>
        </div>
        <div className="1/3 bg-white p-7 rounded-md h-fit">
          <h1 className="text-2xl mb-7">Revenue Base</h1>
          <div className="w-64 h-fit">
            <PieChart />
          </div>
        </div>
      </div>

      <div>
        <LatestOrderTable />
      </div>
    </div>
  );
};

export default Dashboard;
