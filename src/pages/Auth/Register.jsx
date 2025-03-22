import React, {useState} from "react";
import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";
import styles from "../../assets/styles/Auth/Register.module.css";
import { toast } from "react-toastify";
import axios from "axios";



const Register = () => {

    const [isloading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (values) => {
        const {username, password, email, role} = values;
        setLoading(true);

        try {
            const result = await axios.post("https://localhost:7192/api/auth/register", 
                {
                    username,
                    password,
                    email,
                    role
                }
            )

            navigate("/");
            toast.success(result.data.message);


        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    
    };

    return(
        <div className={styles.register__container}>
            <div className={styles.form__register}>
                <Form 
                    name="register"
                    onFinish={handleRegister}
                >
                    <div className={styles.register__header}>
                        <h2>Đăng ký</h2>
                    </div>
                    <div className={styles.register__username}>
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
                    <div className={styles.register__password}>
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
                    <div className={styles.register__email}>
                        <label htmlFor="">Email:</label>
                        <Form.Item
                            name="email"
                            rules = {[{required:true, message : "Vui lòng nhập email của bạn."}]}
                        >
                            <Input
                                placeholder="Email"
                                prefix = {<MailOutlined/>}
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.register__role}>
                        <label htmlFor="">Vai trò:</label>
                        <Form.Item
                            name="role"
                            className={styles.select__role}
                        >
                            <Select 
                                
                                placeholder="Chọn vai trò"
                                prefix = {<UsergroupAddOutlined/>}
                                rules = {[{required:true, message : "Vui lòng chọn vai trò của bạn."}]}
                            >
                                <Select.Option value="Customer">Khách hàng</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className={styles.register__btn}>
                        <Form.Item>
                            <Button loading= {isloading} type="primary" htmlType="submit">Đăng ký</Button>
                        </Form.Item>
                    </div>
                    <div className={styles.login__link}>
                        <h5>Bạn đã có tài khoản? <Link to={`/`}>Đăng nhập</Link></h5>
                    </div>

                </Form>
            </div>

            <h1 className={styles.welcome__text}>
                ShopOnline Thanh Thao xin chào quý khách hàng.
            </h1>

        </div>
    );
};

export default Register;