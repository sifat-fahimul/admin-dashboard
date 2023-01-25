import React from "react";
import { Space, Table, Tag } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
    render: (_, { productName }) => (
      <>
        {productName.map((singleProduct, i) => {
          return (
            <div key={i}>
              <div className="flex gap-4">
                <img
                  className="rounded"
                  width={42}
                  height={32}
                  src={singleProduct?.productImg}
                  alt="Product Image"
                />

                <div>
                  <a href="">
                    <p className="text-base text-gray-500 ">
                      {singleProduct?.productName}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
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
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" className="">
        <a className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Edit
        </a>
        <a className="w-full rounded-md bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Delete
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    productName: [
      {
        productName: "Eleanar Pena",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/1.jpg",
      },
    ],

    price: "$33.09",
    status: ["Active"],
    date: "03.12.2022",
  },
  {
    key: "2",
    productName: [
      {
        productName: "Marry manasa",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/2.jpg",
        productName_id: "#123",
      },
    ],

    price: "$18.09",
    status: ["Active"],
    date: "23.01.2023",
  },
  {
    key: "3",
    productName: [
      {
        productName: "Eleanar ganday",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/3.jpg",
        productName_id: "#123",
      },
    ],

    price: "$33.09",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "4",
    productName: [
      {
        productName: "Eleanar",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/4.jpg",
        productName_id: "#123",
      },
    ],

    price: "$26.09",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "5",
    productName: [
      {
        productName: "Eleanar",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/2.jpg",
        productName_id: "#123",
      },
    ],

    price: "$30.09",
    status: ["Active"],
    date: "03.01.2023",
  },
  {
    key: "6",
    productName: [
      {
        productName: "Eleanar",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/5.jpg",
        productName_id: "#123",
      },
    ],

    price: "$15.09",
    status: ["InActive"],
    date: "03.01.2023",
  },
  {
    key: "7",
    productName: [
      {
        productName: "Eleanar",
        productImg:
          "https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/items/1.jpg",
        productName_id: "#123",
      },
    ],

    price: "$23.09",
    status: ["Active"],
    date: "03.01.2023",
  },
];

const ProductList = () => {
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
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl">Product List</h1>
        <div className="flex gap-4 w-80  ">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Export
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Import
          </button>
          <Link
            to="/admin/add-product"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create new
          </Link>
        </div>
      </div>
      <div className="my-8 bg-white h-fit p-5 rounded-md">
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
              <option value="Electronics">Electronics</option>
              <option value="Clothes">Clothes</option>
              <option value="Automobile">Automobile</option>
            </select>
          </div>
          <div className="flex gap-4 w-80">
            <input
              className="flex-grow pl-3 placeholder:text-xs placeholder:text-gray-500 bg-gray-200 rounded outline-none border-none"
              type="date"
            />
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
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export default ProductList;
