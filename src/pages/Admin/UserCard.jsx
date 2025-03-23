import React, { useState } from "react";
import styles from "../../assets/styles/Admin/UserCard.module.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Modal } from "antd";

const UserCard = ({user, getUser}) => {
    const [isLoading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    const handleDelete = async (id, username) => {
        console.log(id);
        console.log(username);
        
        
        Modal.confirm({
            title: `Xác nhận xóa người dùng ${username}?`,
            content: "Hành động này không thể hoàn tác.",
            okText: "Xóa",
            cancelText: "Hủy",
            okButtonProps:{
                loading : isLoading,
            },
            onOk: async () => {
                setLoading(true)
                try {
                    await axios.delete(`https://localhost:7192/api/users/${id}`,
                        {
                            headers: {
                                Authorization : `Bearer ${token}`,
                                "Content-Type" : "application/json"
                            }
                        }
                    );
                    await getUser();
                    toast.success(`Xóa thành công tài khoản ${username}`);
                } catch (err) {
                    toast.error("Thao tác xóa thất bại.");
                } finally {
                    setLoading(false);
                }
            },
        });
    };
      
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.id}>
                    <span>{user.id}</span>
                </div>
                <div className={styles.avatar}>
                    <img src="https://via.placeholder.com/150" alt="avatar" />
                </div>
                <div className={styles.info}>
                    <span>{user.username}</span>
                </div>
                <div className={styles.email}>
                    <span>{user.email}</span>
                </div>
                <div className={styles.role}>
                    <span>{user.role}</span>
                </div>
                <div className={styles.action}>
                    <button className={styles.edit}>Sửa</button>
                    
                    <button
                        onClick={() =>
                            handleDelete(user.id, user.username)
                        }
                        className={styles.delete}
                    >
                        Xóa
                    </button>

                </div>
            </div>
        </div>
    );
};
export default UserCard;
