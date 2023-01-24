import React, { useState } from "react";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Billing Name",
    dataIndex: "billingName",
    key: "billingName",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
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
            status == "Chargback"
              ? "coral"
              : status == "refund"
              ? "yellow"
              : "green";
          //   if (status === "loser") {
          //     color = "volcano";
          //   }
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
    title: "Payment Method",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" className="">
        <a className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          View Details
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    orderId: "#OID1234",
    billingName: "neal matthews",
    paymentMethod: "Bkash",
    total: "$33.09",
    status: ["refund"],
    date: "03.12.2022",
  },
  {
    key: "2",
    orderId: "#OID1235",
    billingName: "jamal matthews",
    paymentMethod: "Roket",
    total: "$18.09",
    status: ["paid"],
    date: "23.01.2023",
  },
  {
    key: "3",
    orderId: "#OID1236",
    billingName: "junal matthews",
    paymentMethod: "Nogod",
    total: "$33.09",
    status: ["Chargback"],
    date: "03.01.2023",
  },
  {
    key: "4",
    orderId: "#OID1237",
    billingName: "Barry matthews",
    paymentMethod: "Visa",
    total: "$26.09",
    status: ["Chargback"],
    date: "03.01.2023",
  },
  {
    key: "5",
    orderId: "#OID1238",
    billingName: "ronal Tylor",
    paymentMethod: "Mastercard",
    total: "$30.09",
    status: ["refund"],
    date: "03.01.2023",
  },
  {
    key: "6",
    orderId: "#OID1239",
    billingName: "Barry Mitchell",
    paymentMethod: "Bkash",
    total: "$15.09",
    status: ["Chargback"],
    date: "03.01.2023",
  },
  {
    key: "7",
    orderId: "#OID1240",
    billingName: "jacob Hunter",
    paymentMethod: "Bkash",
    total: "$23.09",
    status: ["paid"],
    date: "03.01.2023",
  },
];

const LatestOrderTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div className="my-8 bg-white h-fit p-5 rounded-md">
      <p className="text-xl mb-4">Latest orders</p>
      <div className="my-5 flex justify-between ">
        <div className="rounded bg-gray-200 text-gray-500 w-60 pr-3">
          <select
            className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
            name=""
            id=""
          >
            <option value="All category" className="">
              All category
            </option>
            <option value="Women's Clothing">Women's Clothing</option>
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="CellPhone">CellPhone</option>
            <option value="Computer">Computer</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
        <div className="flex gap-4 w-80">
          <input
            className="flex-grow pl-3 placeholder:text-xs placeholder:text-gray-500 bg-gray-200 rounded outline-none border-none"
            type="date"
            // placeholder="Search..."
          />
          {/* <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3"> </div> */}
          <div className="rounded bg-gray-200 text-gray-500 flex-grow pr-3">
            <select
              className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
              name=""
              id=""
            >
              <option value="Status" className="">
                Status
              </option>
              <option value="paid">All</option>
              <option value="Disable">Paid</option>
              <option value="Show all">Chargeback</option>
              <option value="Show all">Refund</option>
            </select>
          </div>
        </div>
      </div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default LatestOrderTable;
