import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from "../styles/index.module.scss";
const { Meta } = Card;


function userInformation({ id, userData }) {


    return (
        <div id={id}>

            {

                ["MailOutlined", "PhoneOutlined", "GlobalOutlined"].map(data => {
                    return (
                        <div className = {styles.userpersonalInfo} key={data}>
                            <Meta
                                avatar = {data === "MailOutlined" ? <MailOutlined /> : data === "PhoneOutlined" ? <PhoneOutlined /> : <GlobalOutlined />}
                                title = {data === "MailOutlined" ? userData.email : data === "PhoneOutlined" ? userData.phone : userData.website}
                                description=""
                            />
                        </div>
                    )
                })


            }

        </div>
    )
}

export default userInformation;