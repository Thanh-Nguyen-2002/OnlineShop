import React, {useState} from "react";
import styles from "../../assets/styles/Auth/Login.module.css";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
    UserOutlined,
    LockOutlined
} from "@ant-design/icons";
import { toast } from "react-toastify";
import axios from "axios";


const Login = () => {
    const [isloading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlelogin = async (values) => {
        const {username, password} = values;
        setLoading(true);

        try {
            const result = await axios.post("https://localhost:7192/api/auth/login",
                {
                    username,
                    password
                }
            )

            localStorage.setItem("token", result.data.token);
            localStorage.setItem("user", JSON.stringify({
                id: result.data.id,
                username: result.data.username,
                email: result.data.email,
                role: result.data.role
            }))

            switch (result.data.role) {
                case "Admin": 
                    navigate('/admin');
                    break;
                case "Customer":
                    navigate('/customer');
                    break;
                case "ShopOwner":
                    navigate('/owner');
                    break;
                default:
                    navigate('/');
                    break;
            }
            
            toast.success(`Xin chào ${result.data.username}`);
        } catch (error) {
            toast.error(error?.response?.data.message);
        }
        finally {
            setLoading(false);
        }
    }

    return(
        <div className={styles.login__container}>
             <div className={styles.form__login}>
                <Form
                    name="login"
                    onFinish={handlelogin}
                >
                    <div className={styles.form__header}>
                        <h2>Đăng nhập</h2>
                    </div>
                    <div className={styles.form__title}>
                        <label htmlFor="">Tài khoản: </label>
                        <Form.Item
                            name="username"
                            rules={[{required:true, message: "Vui lòng nhập tài khoản của bạn." }]}
                        >
                            <Input 
                                placeholder = "Tài khoản"
                                prefix = {<UserOutlined/>}
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.form__password}>
                        <label htmlFor="">Mật khẩu:</label>
                        <Form.Item
                            name="password"
                            rules = {[{required:true, message : "Vui lòng nhập mật khẩu của bạn."}]}
                        >
                            <Input
                                placeholder="Mật khẩu"
                                prefix = {<LockOutlined/>}
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.login__btn}>
                        <Form.Item>
                            <Button loading= {isloading} type="primary" htmlType="submit">Đăng nhập</Button>
                        </Form.Item>
                    </div>
                    <div className={styles.register__link}>
                        <h5>Bạn chưa có tài khoản? <Link to={`/register`}>Tạo tài khoản</Link></h5>
                    </div>
                </Form>
             </div>

            <h1 className={styles.welcome__text}>
                ShopOnline Thanh Thao xin chào quý khách hàng.
            </h1>

        </div>
    );
};
export default Login;