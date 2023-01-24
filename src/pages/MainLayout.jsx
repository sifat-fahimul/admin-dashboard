import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { CgUserList } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo !bg-indigo-700 rounded !mx-0">
          <h2 className="text-white text-lg text-center py-1">
            <span className="sm-logo ">DD</span>
            <span className="lg-logo">Dev Dashboard</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="!text-xl" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <UserOutlined className="!text-xl" />,
              label: "Customers",
              children: [
                {
                  key: "add-customers",
                  icon: <AiOutlineUserAdd className="!text-xl" />,
                  label: "Add Customers",
                },
                {
                  key: "customers-list",
                  icon: <CgUserList className="!text-xl" />,
                  label: "Customers List",
                },
              ],
            },
            {
              key: "products",
              icon: <FaShoppingBag className="!text-xl" />,
              label: "Products",
              children: [
                {
                  key: "product-list",
                  icon: <BsCardChecklist className="!text-xl" />,
                  label: "Products List",
                },
                {
                  key: "add-product",
                  icon: <MdAddShoppingCart className="!text-xl" />,
                  label: "Add Products",
                },
              ],
            },
            {
              key: "order-list",
              icon: <AiOutlineShoppingCart className="!text-xl" />,
              label: "Order List",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="flex justify-between"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="pr-6 flex gap-3 align-middle ">
            {/* <div className="relative">
              <IoMdNotificationsOutline className="!text-2xl" />
              <span className="badge bg-yellow-400 h-5 w-5 rounded-full p-2 absolute">
                4
              </span>
            </div> */}
            <div className="flex gap-3 align-middle">
              <div>
                <img
                  className="mt-2 rounded-full"
                  width={48}
                  height={48}
                  src="https://wp.alithemes.com/html/evara/evara-backend/assets/imgs/people/avatar2.jpg"
                  alt="profile-pic"
                />
              </div>
              <div>
                <h5 className="mb-0">user name</h5>
                <p className="mb-0">example@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          className="!bg-gray-100"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
