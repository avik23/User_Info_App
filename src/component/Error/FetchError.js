import React, { useEffect, useState } from "react";
import Styles from "../../styles/index.module.scss";
import { IMAGE_NOT_FOUND, INVALID_IMAGE_NAME } from "../../constant/Constant";
import { ImageMapper } from "../Error/ImageMapper";

let images = require.context('../../assets', true);

const FetchError = ({ imageName, errorMessage, imageWidth, imageHeight }) => {


    const findImage = imageName => {

        const validImageName = ImageMapper(imageName);
        if (validImageName != INVALID_IMAGE_NAME) {
            let itemImg = images(`./${validImageName}`).default;
            return itemImg;
        }

    }

    return (
        <>

            <div className={Styles.errorImageConatiner}>
                <img
                    src={findImage(imageName)}
                    alt={IMAGE_NOT_FOUND}
                    srcset={`${findImage(imageName)}`}
                    height={imageHeight ? imageHeight : "20%"}
                    width={imageWidth ? imageWidth : "20%"}

                ></img>

                <div><p className={Styles.genericTextFont}>{errorMessage ? errorMessage : "Oops ! Error Occured"}</p></div>

            </div>
        </>
    )
}


export default FetchError;