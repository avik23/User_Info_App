
export const ImageMapper = (imageName) =>{

    if(imageObject[imageName]){

        return imageObject[imageName];
    }else{
        return INVALID_IMAGE_NAME;
    }


}


const imageObject = {

    "error":"error.png"
}