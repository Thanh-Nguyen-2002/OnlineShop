import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
    HomeOutlined,
    AppstoreOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    OrderedListOutlined,
} from "@ant-design/icons";
const SidebarMenu = () => { 
    const location = useLocation();

    return(
        <div className="container">
            <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                theme="dark"
                style={{backgroundColor : '#343a40' , paddingTop : 24}}
                items={[
                    {
                        key: "/admin",
                        icon: <HomeOutlined  style={{color : 'white'}} />,
                        label: <Link style={{color : 'white'}} to="/admin">Trang chủ</Link>,
                    },
                    {
                        key: "/admin/products",
                        icon: <AppstoreOutlined style={{color : 'white'}}/>,
                        label: <Link style={{color : 'white'}} to="/admin/products">Sản phẩm</Link>,
                    },
                    {
                        key: "/admin/categories",
                        icon: <AppstoreOutlined style={{color : 'white'}}/>,
                        label: <Link style={{color : 'white'}} to="/admin/categories">Danh mục</Link>,
                    },
                    {
                        key: "/admin/users",
                        icon: <UserOutlined style={{color : 'white'}}/>,
                        label: <Link style={{color : 'white'}} to="/admin/users">Người dùng</Link>,
                    },
                    {
                        key: "/admin/orders",
                        icon: <ShoppingCartOutlined style={{color : 'white'}}/>,
                        label: <Link style={{color : 'white'}} to="/admin/orders">Đơn hàng</Link>,
                    },
                ]}
            />
        </div>
    )
}
export default SidebarMenu;