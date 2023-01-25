import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex justify-between">
        <h1 className="text-4xl">Add New Product</h1>

        <div className="flex gap-4 w-80  ">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Save to draft
          </button>
          <Link
            to="/admin/add-product"
            className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Public
          </Link>
        </div>
      </div>

      <div>
        <div className="my-8  h-fit flex justify-between ">
          <form action="" className="flex gap-8">
            <div>
              <div class="mb-4 bg-white p-5 rounded-md">
                <div>
                  <label
                    class="block text-gray-700 text-xs mb-2"
                    for="  Product-title"
                  >
                    Product title
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
                <div className="flex gap-3 my-5">
                  <div>
                    <label
                      class="block text-gray-700 text-xs mb-2"
                      for="  Product-title"
                    >
                      SKU
                    </label>
                    <input
                      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="Product-title"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-gray-700 text-xs mb-2"
                      for="  Product-title"
                    >
                      Color
                    </label>
                    <input
                      class="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="Product-title"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-gray-700 text-xs mb-2"
                      for="  Product-title"
                    >
                      Size
                    </label>
                    <input
                      class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                      id="Product-title"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="block text-gray-700 text-xs mb-2"
                    for="  Product-title"
                  >
                    Brand
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
              </div>
              <div class="mb-4 bg-white p-5 rounded-md">
                <div>
                  <label
                    class="block text-gray-700 text-xs mb-2"
                    for="  Product-title"
                  >
                    Description
                  </label>
                  <textarea
                    rows={4}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="text"
                    placeholder="Type here"
                  />
                </div>
              </div>
              <div class="mb-4 bg-white p-5 rounded-md">
                <div>
                  <label
                    class="block text-gray-700 text-xs mb-2"
                    for="  Product-title"
                  >
                    Image
                  </label>
                  <input
                    class="file:p-2 file:border-none file:bg-gray-300 file:rounded  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                    id="Product-title"
                    type="file"
                    // placeholder="Type here"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 bg-white p-5 rounded-md">
              <div>
                <label
                  class="block text-gray-700 text-xs mb-2"
                  for="  Product-title"
                >
                  Price
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                  id="Product-title"
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className="my-4">
                <label class="block text-gray-700 text-xs mb-1" for="Status">
                  Status
                </label>
                <div className="rounded bg-gray-200 text-gray-500 w-60 pr-3 my-3">
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

              <div className="my-4">
                <label
                  class="block text-gray-700 text-xs mb-2"
                  for="  Product-title"
                >
                  Tags
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:text-gray-500 bg-gray-200"
                  id="Product-title"
                  type="text"
                  placeholder="Type here"
                />
              </div>
              <div className="my-4">
                <a href="" className="mx-4">
                  x Tech
                </a>
                <a href="" className="mx-4">
                  x shirt
                </a>
                <a href="" className="mx-4">
                  x Mobile
                </a>
              </div>
              <hr />
              <div className="my-4">
                <p className="text-lg mb-4">Categories</p>
                <input type="checkbox" id="Shirt" name="Shirt" value="Shirt" />
                <label for="Shirt"> Shirt</label>
                <br />
                <input
                  type="checkbox"
                  id="T-Shirt"
                  name="T-Shirt"
                  value="T-Shirt"
                />
                <label for="T-Shirt"> T-Shirt</label>
                <br />
                <input
                  type="checkbox"
                  id="Sneakers"
                  name="Sneakers"
                  value="Sneakers"
                />
                <label for="Sneakers"> Sneakers</label>
                <br />
                <input
                  type="checkbox"
                  id="Joggers"
                  name="Joggers"
                  value="Joggers"
                />
                <label for="Joggers"> Joggers</label>
                <br />
                <input type="checkbox" id="Vests" name="Vests" value="Vests" />
                <label for="Vests"> Vests</label>
                <br />
                <input
                  type="checkbox"
                  id="Knitwear"
                  name="Knitwear"
                  value="Knitwear"
                />
                <label for="Knitwear"> Knitwear</label>
                <br />
                <input
                  type="checkbox"
                  id="Shorts"
                  name="Shorts"
                  value="Shorts"
                />
                <label for="Shorts"> Shorts</label>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
