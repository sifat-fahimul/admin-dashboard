import React from "react";

import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "#ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <>
        {status.map((status) => {
          let color =
            status == "Pending"
              ? "geekblue"
              : status == "Canceled"
              ? "red"
              : "green";
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="text-red-500 border-red-400">Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    id: " 001",
    name: "John Brown",
    email: "anyone@gmal.com",
    total: "$32.00",
    status: ["Pending"],
    date: "03.12.2022",
  },
  {
    key: "2",
    id: " 002",
    name: "Jim Green",
    email: "noone@gmal.com",
    total: "$22.00",
    status: ["Canceled"],
    date: "23.01.2023",
  },
  {
    key: "3",
    id: " 003",
    name: "Joe Black",
    email: "example@email.com",
    total: "$13.00",
    status: ["Received"],
    date: "03.01.2023",
  },
  {
    key: "4",
    id: " 004",
    name: "Joe Black",
    email: "example@email.com",
    total: "$13.00",
    status: ["Received"],
    date: "03.01.2023",
  },
  {
    key: "5",
    id: " 005",
    name: "Joe Black",
    email: "example@email.com",
    total: "$13.00",
    status: ["Received"],
    date: "03.01.2023",
  },
  {
    key: "6",
    id: " 006",
    name: "Joe Black",
    email: "example@email.com",
    total: "$13.00",
    status: ["Received"],
    date: "03.01.2023",
  },
  {
    key: "7",
    id: " 007",
    name: "Joe Black",
    email: "example@email.com",
    total: "$13.00",
    status: ["Received"],
    date: "03.01.2023",
  },
];

const OrderList = () => {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl">Order List</h1>
        <input
          className="pl-3 placeholder:text-xs placeholder:text-gray-400 rounded outline-none border-none"
          type="text"
          placeholder="Search order ID"
        />
      </div>
      <div className="my-8 bg-white h-fit p-5 rounded-md">
        <div className="my-5 flex justify-between">
          <input
            className="pl-3 placeholder:text-xs placeholder:text-gray-500 bg-gray-200 w-72 rounded outline-none border-none"
            type="text"
            placeholder="Search..."
          />
          <div className="flex gap-4 w-80">
            <select
              className="form-select outline-none border-none  px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
              name=""
              id=""
            >
              <option value="Status" className="">
                Status
              </option>
              <option value="Active">Active</option>
              <option value="Disable">Disable</option>
              <option value="Show all">Show all</option>
            </select>
            <select
              className="form-select outline-none border-none px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
              name=""
              id=""
            >
              <option value="Show 20" className="">
                Show 20
              </option>
              <option value="Show 30">Show 30</option>
              <option value="Show 40">Show 40</option>
            </select>
          </div>
        </div>
        <hr className="" />
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
