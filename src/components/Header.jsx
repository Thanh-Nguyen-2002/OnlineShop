import React from "react";
import styles from "../assets/styles/Header/Header.module.css";
import {
    BellOutlined
} from "@ant-design/icons";
import logo from "../assets/image/logo.jpg";
import imgUser from "../assets/image/user.jpg";
import { Dropdown} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const userStr = localStorage.getItem("user");
    const user = JSON.parse(userStr);
    const navigate = useNavigate();
    const menuItems = [
        { key: '1', label: 'Thông tin cá nhân' },
        { key: '2', label: 'Đăng xuất' },
    ];

    const handleMenuClick = ({ key }) => {
        if (key === '1') {
          navigate('/profile');
        } else if (key === '2') {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/');
        }
    };
      

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo shoponline" />
            </div>
            <div className={styles.right}>
                <div className={styles.bell}>
                    <BellOutlined />
                </div>
                
                <Dropdown 
                    menu={{
                        items: menuItems, 
                        onClick: handleMenuClick,
                    }} 
                    trigger={['click']}
                >
                    <div className={styles.username}>
                        {user.username}
                        <img src={imgUser} alt="Ảnh đại diện" />
                    </div>
                </Dropdown>
            </div>
            
        </div>
    );  
};

export default Header;