import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../assets/styles/Admin/AdminHome.module.css";
import Header from "../../components/Header";
import SidebarMenu from "../../components/SidebarMenu";


const HomePage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <SidebarMenu />
                </div>
                <div className={styles.main}>
                    <main><Outlet /></main>
                </div>
            </div>
        </div>
    )
}
export default HomePage;