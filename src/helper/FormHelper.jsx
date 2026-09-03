import {toast} from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
let EmailRegx = /\S+@\S+\.\S+/;
// eslint-disable-next-line react-refresh/only-export-components
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789](\d){8})$/;
class FormHelper{
    IsEmpty(value){
        return value.length === 0;
    }
    IsMobile(value){
        return MobileRegx.test(value)
    }
    IsEmail(value){
        return !EmailRegx.test(value)
    }
    ErrorToast(msg){
        toast.error(msg,{position:"bottom-center"})
    }
    SuccessToast(msg){
        toast.success(msg,{position:"bottom-center"})
    }
    getBase64(file){
        return new Promise((resolve, reject) =>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })
    }
}

export const {IsEmpty, IsMobile, IsEmail, ErrorToast, getBase64, SuccessToast} = new FormHelper();