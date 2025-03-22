import React from "react";
import SidebarMenu from "../../components/SidebarMenu";
import { Outlet } from "react-router-dom";
import Headers from "../../components/Header";
import styles from "../../assets/styles/Admin/AdminHome.module.css";


const HomePage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Headers/>
            </div>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <SidebarMenu />
                </div>
                <div className={styles.main}>
                    <main><Outlet /></main>
                    123
                </div>
            </div>
        </div>
    )
}
export default HomePage;