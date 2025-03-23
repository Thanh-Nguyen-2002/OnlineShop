import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/Admin/ManagerUser.module.css";
import UserCard from "./UserCard";
import { toast } from "react-toastify";
import axios from "axios";
import { Pagination, Spin } from "antd";

const ManagerUser = () => {

    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem("token");
    const [users, setUsers] = React.useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setpageSize] = useState(6);

    const getUser = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://localhost:7192/api/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
    
            setUsers(response.data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
            toast.error("Không lấy được dữ liệu người dùng");
        } finally {
            setIsLoading(false);
        }
    };
    
    
    useEffect(() => {
        getUser();
    }, []);
    

    return(
        <div className={styles.container}>
            <h2>Quản lý người dùng</h2>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.id}>
                        <span>ID</span>
                    </div>
                    <div className={styles.avatar}>
                        <span>Ảnh đại diện</span>
                    </div>
                    <div className={styles.info}>
                        <span>Tài khoản</span>
                    </div>
                    <div className={styles.email}>
                        <span>Email</span>
                    </div>
                    <div className={styles.role}>
                        <span>Roles</span>
                    </div>
                    <div className={styles.action}>
                        <span>Hoạt động</span>
                    </div>
                </div>
                <div className={styles.list}>
                    <Spin spinning={isLoading} >
                        {users
                            .slice((currentPage - 1)* pageSize, currentPage*pageSize)
                            .map((user) => (
                                <UserCard key={user.id} user={user} getUser={getUser} />
                        ))}
                    </Spin>
                </div>
                <div className={styles.pagination}>
                    <Pagination
                        current={currentPage}
                        total={users.length}
                        pageSize={pageSize}
                        onChange={(page, pageSize) => {
                            setCurrentPage(page);
                            setpageSize(pageSize);
                        }}
                    />
                </div>
            </div>
            
        </div>
    )
}
export default ManagerUser;