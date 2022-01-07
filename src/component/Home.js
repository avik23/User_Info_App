
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import styles from "../styles/index.module.scss";
import { Card } from 'antd';
import { EditOutlined, HeartOutlined, DeleteFilled, HeartTwoTone } from '@ant-design/icons';
import UserInformation from "./userInformation";
import MyModal from './GenericModal';
import { USERS_DATA, CONTENT_NOT_FOUND, HOME_IMAGE_ERROR, IMAGE_NOT_FOUND, KEY_DELETE, KEY_EDIT } from "../constant/Constant";
import { GETRequest } from "../api/Api";
import FetchError from './Error/FetchError';

function Home() {
    const [contactsData, setContactsData] = useState([]);
    const [isOpen, setIsopen] = useState(false)
    const [editData, setEditData] = useState({})


    //Fetching the user Data on Page Load using useeffect Hooks
    useEffect(() => {
        getContactsInfo();
    }, [])

    const getContactsInfo = async () => {
        try {
            const { data, status } = await GETRequest("jsonplaceholder.typicode.com/users");
            if (status == 200) {
                //Adding a extra key liked for implementing LIKE Functionality.

                data && data.forEach(element => {
                    element['liked'] = false
                });
                setUserDatatoLocalStrg(data);
                setContactsData(data)
            } else {
                setContactsData([])
            }
        } catch (error) {
            console.log("Error While Loading User Data....", error)

        }


    }
    //Getter function for Local Storage
    const getUserDataFrmLocalStrg = () => {
        const usersData = JSON.parse(localStorage.getItem(USERS_DATA));
        return usersData;
    }

    //Setter Function for Local Storage
    const setUserDatatoLocalStrg = (usersData) => {
        localStorage.setItem(USERS_DATA, JSON.stringify(usersData));
    }

    //handling Like Button Functionality
    const handleLike = userID => {

        let user = getUserDataFrmLocalStrg();
        user.forEach(data => {
            if (data.id == userID) {
                if (data['liked']) {
                    data['liked'] = false;
                } else {
                    data['liked'] = true;
                }

            }
        })
        setUserDatatoLocalStrg(user);
        setContactsData(user);

    }

    // handling Delete Button Functionality
    const handleDelete = deleteId => {

        let user = getUserDataFrmLocalStrg();

        let deleteIndex = user.findIndex(data => data.id == deleteId);
        //Deleting the data for the user who clicked the delete button
        user.splice(deleteIndex, 1);
        setUserDatatoLocalStrg(user);
        setContactsData(user);

    }

    //hanle Edit Functionality
    const handleEdit = userData => {
        if (isOpen) {
            setIsopen(false);
        } else {
            setIsopen(true);
        }
        setEditData(userData);

    }

    //handle cancel functionality
    const handleModalClicked = () => {
        if (isOpen) {
            setIsopen(false)
        } else {
            setIsopen(true)
        }
        setEditData({});
    }

    //when user wnat to edit the data
    const handleOk = editedUsersdData => {

        let editId = editedUsersdData[0].editId;
        let user = getUserDataFrmLocalStrg();
        let editIndex = user.findIndex(data => data.id == editId);
        editedUsersdData.forEach(userData => {
            if (user[editIndex][userData.property.toLowerCase()]) {
                user[editIndex][userData.property.toLowerCase()] = userData.value;
            }
        })
        setUserDatatoLocalStrg(user);
        setContactsData(user);
        if (isOpen) {
            setIsopen(false);
        } else {
            setIsopen(true);
        }

    }
    return (
        <div className={styles.homeContainer}>
            {
                contactsData && contactsData.length > 0 ? contactsData.map(userData => {
                    return (


                        <div key={userData.id} className={styles.homeBody}>
                            <Card
                                style={{ width: 400 }}
                                cover={
                                    <img
                                        alt={IMAGE_NOT_FOUND}
                                        src={`https://avatars.dicebear.com/api/micah/${userData.username}.svg?mood[]=happy`}
                                    />
                                }
                                actions={[
                                    userData.liked ? <HeartTwoTone twoToneColor="#eb2f96" onClick={() => handleLike(userData.id)} /> : <HeartOutlined key="heart" onClick={() => handleLike(userData.id)} />,
                                    <EditOutlined key={KEY_EDIT} onClick={() => handleEdit(userData, userData.id)} />,
                                    <DeleteFilled key={KEY_DELETE} onClick={() => handleDelete(userData.id)} />,
                                ]}
                            >
                                <p className={styles.usernameText}><strong>{userData.name}</strong></p>
                                <UserInformation userData={userData} id={userData.id} />
                            </Card>
                        </div>
                    )
                }) :
                    <div className={styles.imageError}><FetchError imageName={HOME_IMAGE_ERROR} errorMessage={CONTENT_NOT_FOUND} /></div>

            }
            <MyModal isOpen={isOpen} editData={editData} handleCancel={handleModalClicked} handleOk={(editedData) => handleOk(editedData)} />


        </div>
    );
}

export default Home;
