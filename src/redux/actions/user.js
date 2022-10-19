import axios from "axios";
import {
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
} from "./types";

export const getDetailUser = (id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null,
    });

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {
      headers: { token },
      withCredentials: true,
    });

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        localStorage.clear();
        return navigate("/");
      }

      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_DETAIL_USER_FAILED,
      payload: error.message,
    });
  }
};

<<<<<<< HEAD
export const updateUser = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    await axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, body, {
      headers: {
        token: token,
      },
      withCredentials: true,
    });

    return true;
=======

export const updateUser = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    await axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, body, {
      headers: {
        token: token
      }
    })

    return true;

>>>>>>> 3d0137d5b839cc3c4199acf8a1a30d68683f4385
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const updatePhoto = async (body, setErrors) => {
  try {
<<<<<<< HEAD
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
=======
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
>>>>>>> 3d0137d5b839cc3c4199acf8a1a30d68683f4385

    await axios.put(`${process.env.REACT_APP_API_URL}/user/${id}/photo`, body, {
      headers: {
        token: token,
<<<<<<< HEAD
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    return true;
=======
        "Content-Type": "multipart/form-data"
      }
    })

    return true
>>>>>>> 3d0137d5b839cc3c4199acf8a1a30d68683f4385
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};
