import { v1 as uuidv1 } from 'uuid';

export const USERS_DATA = "usersData";

export const IMAGE_NOT_FOUND = "Image Not Found";

export const INVALID_IMAGE_NAME = "Inavlid Image Name";

export const CONTENT_NOT_FOUND = "Opps! Content Not Found!";

export const HOME_IMAGE_ERROR = "error";

export const KEY_EDIT = "edit";

export const KEY_DELETE = "delete";

export const USER_DETAILS_TITLE = "User Details";

export const ICONS_ARRAY = ["MailOutlined", "PhoneOutlined", "GlobalOutlined"];

export const MAIL_OUTLINED = "MailOutlined";

export const PHONE_OUTLINED = "PhoneOutlined";

export const MODAL_DATA = [
    {
        editId: "",
        key: uuidv1(),
        property: "Name",
        value: ""
    },
    {
        editId: "",
        key: uuidv1(),
        property: "Email",
        value: ""
    },
    {
        editId: "",
        key: uuidv1(),
        property: "Phone",
        value: ""
    },
    {
        editId: "",
        key: uuidv1(),
        property: "website",
        value: ""
    }
];
