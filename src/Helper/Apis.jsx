const BASE_URL ="http://localhost:4000/api/auth";
export const  endPoint =  {
    REGISTER_API : BASE_URL + "/register",
    LOGIC_API : BASE_URL + "/login",
    ALLCOURSE_API : BASE_URL + "/course",
    GET_ALL_USER : BASE_URL + "/user",
    GET_ALL_USERS : BASE_URL + "/getuser",
    PURCHASES : BASE_URL + "/payment",
    ALL_PURCHASES : BASE_URL + "/purchase",
    GET_LIVE_CLASS : BASE_URL + "/getLiveClass",
}

const ADMIN_URL = "http://localhost:4000/admin"

export const adminPoint = {
    PURCHASE_DETAILS : ADMIN_URL + "/payments",
    CREATE_LIVE_CLASS : ADMIN_URL + "/createLiveClass",
    GET_LIVE_CLASS : ADMIN_URL + "/getLiveClass",
    UPLOAD_NOTES : ADMIN_URL + "/uploadNotes",
}