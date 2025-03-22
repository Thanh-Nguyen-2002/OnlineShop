import React from "react";
import styles from "../assets/styles/Header/Header.module.css";
import {
    BellOutlined
} from "@ant-design/icons";
import logo from "../assets/image/logo.jpg";
import imgUser from "../assets/image/user.jpg";

const Header = () => {
    const userStr = localStorage.getItem("user");
    const user = JSON.parse(userStr);


    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo shoponline" />
            </div>
            <div className={styles.right}>
                <div className={styles.bell}>
                    <BellOutlined />
                </div>
                
                <div className={styles.username}>
                    {user.username}
                    <img src={imgUser} alt="Ảnh đại diện" />
                </div>
            </div>
        </div>
    );  
};

export default Header;