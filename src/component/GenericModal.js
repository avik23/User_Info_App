import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import styles from "../styles/index.module.scss";
import { Modal, Input } from 'antd';
import { USER_DETAILS_TITLE } from "../constant/Constant";
import { v1 as uuidv1 } from 'uuid';

function MyModal({ isOpen, handleOk, handleCancel, editData }) {

    const [modalInfo, setModalInfo] = useState([
        {
            editId: "",
            key:uuidv1(),
            property: "Name",
            value: ""
        },
        {
            editId: "",
            key:uuidv1(),
            property: "Email",
            value: ""
        },
        {
            editId: "",
            key:uuidv1(),
            property: "Phone",
            value: ""
        },
        {
            editId: "",
            key:uuidv1(),
            property: "website",
            value: ""
        }
    ])

    const [errorOccured,setErrorMessage] = useState(false)

    useEffect(() => {
        let editedData = [...modalInfo]
        editedData.forEach(data => {
            if (editData[data.property.toLowerCase()]) {
                data.value = editData[data.property.toLowerCase()]
                data.editId = editData.id
            }
        })
        setModalInfo(editedData)
    }, [editData])



    const handleOnchange = e => {
        let editData = [...modalInfo]
        editData.forEach(data => {
            if (data.property === e.target.name) {
                data.value = e.target.value
            }
        })

        setModalInfo(editData);
        setErrorMessage(false)

    }

    const valiadte = ()=>{
        let validateFlag = false;
        modalInfo && modalInfo.forEach(element=>{
            if(element.value == ""){
                validateFlag = true;
            }

        })

        if(validateFlag){
            setErrorMessage(true)
        }else{
            handleOk(modalInfo)

        }


    }
    return (
        <Modal  title={USER_DETAILS_TITLE} visible={isOpen} onOk={()=>valiadte()} onCancel={handleCancel}>
            {
                modalInfo.map(data => {
                    return (
                        <div key={data.key}>
                            <label className = {styles.error_color}>*</label><label className={styles.genericTextFont} >{data.property}</label>
                            &nbsp;
                            <Input
                                placeholder={`Please Enter ${data.property}`}
                                value={data.value}
                                name={data.property}
                                onChange={handleOnchange}
                            />
                        </div>
                    )
                })

            }
                {errorOccured ? <p className = {styles.error_color}> Not Validated!..</p> :""}

        </Modal>
    )
}

export default MyModal;