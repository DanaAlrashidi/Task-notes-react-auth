import instance from ".";

import { saveToken } from "./storage";
const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  return data;
};

const register = async (userInfo) => {
  try {
    // This is for seding the request with files
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    // END
    const { data } = await instance.post("/auth/register", formData);
    saveToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    // const decode = jwt_decode(token);
    // const cureentTime = Date.now() / 1000;
    // if (decode.exp < cureentTime) {
    //   localStorage.removeItem("token");
    //   return false;
    // }

    return true;
  }
  return false;
};
export { login, register, me, getAllUsers, checkToken };
