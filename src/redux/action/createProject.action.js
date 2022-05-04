import axios from "axios";
import { toast } from "react-toastify";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerNewUser = (user) => (dispatch) => {
    dispatch({ type: "CREATE_PROJECT_REQUEST" });

    axios
        .post(BASE_URL + "register", user)
        .then((res) => {
            dispatch({ type: "CREATE_PROJECT_SUCCESS" });
            toast.success("Success");
            console.log(res);
        })
        .catch((err) => {
            dispatch({ type: "CREATE_PROJECT_FAILED", payload: err?.response?.data?.detail ?? "Create Project Failed" });
            console.log(err);
        });
};

