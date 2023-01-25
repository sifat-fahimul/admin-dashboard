import React from "react";
import { Link } from "react-router-dom";

const AddCustomer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gray-100 w-full ">
      <div className="flex justify-between">
        <h1 className="text-4xl">Add New Customer</h1>

        <div className="flex gap-4 w-80  ">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Save to draft
          </button>
        </div>
      </div>

      <div>
        <div className="my-8 h-fit ">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex gap-8">
              <div className="w-5/12">
                <div className="mb-4 bg-white p-5 rounded-md">
                  <div>
                    <label
                      className="block text-gray-700 text-xs mb-2"
                      htmlFor="customer-name"
                    >
                      Customer Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="customer-name"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>

                  <div className="my-3">
                    <label
                      className="block text-gray-700 text-xs mb-2"
                      htmlFor="seller-id"
                    >
                      Seller ID
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="seller-id"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="my-3">
                    <label
                      className="block text-gray-700 text-xs mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="email"
                      type="email"
                      placeholder="Type here"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-white p-5 rounded-md">
                <div className="my-4">
                  <label
                    className="block text-gray-700 text-xs mb-1"
                    htmlFor="Status"
                  >
                    Status
                  </label>
                  <div className="rounded bg-gray-200 text-gray-500 pr-3 my-3">
                    <select
                      className=" form-select outline-none border-none w-full h-full px-4 py-3 rounded bg-gray-200 text-gray-500 flex-grow "
                      name=""
                      id="Status"
                    >
                      <option value="published">Published</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-xs mb-2"
                    htmlFor="  Product-title"
                  >
                    Image
                  </label>
                  <input
                    className="file:p-2 file:border-none file:bg-gray-300 file:rounded  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="file"
                  />
                </div>
              </div>
            </div>
            <button className="group relative flex justify-center rounded-md w-5/12 border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
