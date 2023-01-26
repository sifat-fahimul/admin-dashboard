import React from "react";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Seller",
    dataIndex: "seller",
    key: "seller",
    render: (_, { seller }) => (
      <>
        {seller.map((seller) => {
          return (
            <div key={seller.seller_id}>
              <div className="flex gap-4">
                <img
                  className="rounded-full "
                  width={42}
                  height={32}
                  src={seller.img}
                  alt=""
                />

                <div>
                  <a href="#">
                    <p className="text-lg">{seller.name}</p>
                  </a>
                  <p className="text-xs text-gray-400">
                    Seller ID: {seller.seller_id}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <>
        {status.map((status) => {
          let color = status == "InActive" ? "coral" : "green";

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
    title: "Registered",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" className="">
        <a className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          View details
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    seller: [
      {
        name: "Eleanar Pena",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar1.jpg",
        seller_id: "#123",
      },
    ],

    email: "anyone@gmal.com",
    status: ["Active"],
    date: "03.12.2022",
  },
  {
    key: "2",
    seller: [
      {
        name: "Marry manasa",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar2.jpg",
        seller_id: "#123",
      },
    ],

    email: "noone@gmal.com",
    status: ["Active"],
    date: "23.01.2023",
  },
  {
    key: "3",
    seller: [
      {
        name: "Eleanar ganday",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar3.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "4",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar4.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "5",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar1.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["Active"],
    date: "03.01.2023",
  },
  {
    key: "6",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar2.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "7",
    seller: [
      {
        name: "Eleanar",
        img: "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar3.jpg",
        seller_id: "#123",
      },
    ],

    email: "example@email.com",
    status: ["Active"],
    date: "03.01.2023",
  },
];
const CustomerList = () => {
  return (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h1 className="text-4xl">Customer List</h1>

        <Link
          to="/admin/add-customers"
          className=" rounded-md bg-indigo-600 pt-1 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="text-xl m-0 pr-3">+</span> Create new
        </Link>
      </div>
      <div className="my-8 bg-white h-fit p-5 rounded-md">
        <div className="my-5 flex justify-between">
          <input
            className="pl-3 placeholder:text-xs placeholder:text-gray-500 bg-gray-200 w-72 rounded outline-none border-none"
            type="text"
            placeholder="Search..."
          />
          <div className="flex gap-4 w-80">
            <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3">
              <select
                className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
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
            </div>
            <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3">
              <select
                className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
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
        </div>
        <hr className="" />
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
