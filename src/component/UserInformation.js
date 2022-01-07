import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from "../styles/index.module.scss";
import { ICONS_ARRAY, MAIL_OUTLINED, PHONE_OUTLINED } from "../constant/Constant";
const { Meta } = Card;


function userInformation({ id, userData }) {


    return (
        <div id={id}>
            {

                ICONS_ARRAY.length > 0  && ICONS_ARRAY.map(data => {
                    return (
                        <div className={styles.userpersonalInfo} key={data}>
                            <Meta
                                avatar = {data === MAIL_OUTLINED ? <MailOutlined /> : data === PHONE_OUTLINED ? <PhoneOutlined /> : <GlobalOutlined />}
                                title = {data === MAIL_OUTLINED ? userData.email : data === PHONE_OUTLINED ? userData.phone : userData.website}
                                description = ""
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default userInformation;