import axios from "axios";
import { toast } from "react-toastify";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerNewUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  axios
    .post(BASE_URL + "register", user)
    .then((res) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
      toast.success("Success");
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "USER_REGISTER_FAILED", payload: err?.response?.data?.detail ?? "Registration Failed" });
      console.log(err);
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  axios
    .post(BASE_URL + "login", user)
    .then((res) => {
      dispatch({ type: "USER_LOGIN_SUCCESS" });
      console.log(res)
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      window.location.reload();
      // window.location.href = "/";
    })
    .catch((err) => {
      dispatch({
        type: "USER_LOGIN_FAILED",
        payload: err,
      });
      console.log(err);
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");

  dispatch({ type: "USER_LOGOUT" });
  window.location.pathname = "/";
  // window.location.href = "/login";
};

export const updateUser = (userid, updateUser) => (dispatch) => {
  dispatch({
    type: "USER_UPDATE_REQUEST",
  });

  console.log(updateUser);

  axios
    .put(`/users/${userid}`, updateUser)
    .then((res) => {
      dispatch({
        type: "USER_UPDATE_SUCCESS",
      });
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "USER_UPDATE_FAILED",
        payload: err,
      });
      console.log(err);
    });
};

export const getAllUsers = () => (dispatch) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });

  axios
    .get("/users")
    .then((res) => {
      dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_ALLUSERS_FAILED", payload: err });
    });
};

export const deleteUser = (userid) => (dispatch) => {
  dispatch({
    type: "DELETE_USER_REQUEST",
  });

  axios
    .delete(`/users/${userid}`)
    .then((res) => {
      dispatch({
        type: "DELETE_USER_SUCCESS",
        payload: res.data,
      });
      alert("User deleted successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_USER_FAILED",
        payload: err,
      });
    });
};

export const loddingToogleAction = () => (status) => {
  return {
    type: "USER_LOADING_TOGGLE", payload: status,
  }
}

export const forgotPassword = (email) => (dispatch) => {
  dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
  console.log(email);

  axios
    .post(BASE_URL + "/password/forgot-password", { email })
    .then((res) => {
      dispatch({ type: "FORGOT_PASSWORD_SUCCESS" });
      toast.success("Success");
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "FORGOT_PASSWORD_FAILED", payload: err });
      toast.error("Error");
      console.log(err);
    });
};

export const personaldetails = (obj) => (dispatch) => {
  // console.log(obj);
  dispatch({ type: "PERSONAL_DETAILS", payload: obj });
};

export const addressdetails = (addressdata) => (dispatch) => {
  // console.log(addressdata);
  dispatch({ type: "ADDRESS_DETAILS", payload: addressdata });
};

export const groupdetails = (groupData) => (dispatch) => {
  // console.log(groupData);
  dispatch({ type: "GROUP_DETAILS", payload: groupData });
};

export const businessdetails = (BusinessData) => (dispatch) => {
  // console.log(BusinessData);
  dispatch({ type: "BUSINESS_DETAILS", payload: BusinessData });
};

export const CreateNewProject = (data) => (dispatch) => {
  dispatch({ type: "CREATE_NEW_PROJECT" });

  axios
    .post(BASE_URL + "/product/add", data)
    .then((res) => {
      dispatch({ type: "PROJECT_CREATED" });
      toast.success("Success");
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "PROJECT_CREATION_FAILED", payload: err });
      console.log(err);
    });
};

export const getAllProjects = () => (dispatch) => {
  dispatch({ type: "GET_ALL_PROJECTS" });

  axios
    .get("/list/")
    .then((res) => {
      dispatch({ type: "GET_ALLPROJECTS_SUCCESS", payload: res.data });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "GET_ALLPROJECTS_FAILED", payload: err });
    });
};
