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
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="logo" />
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
