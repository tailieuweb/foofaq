import axios from "axios";
const API_URL_USER_ALL =
  "https://5fc4b01136bc790016343d03.mockapi.io/api/v1/users/";
//get all question
export const getAllUser = async () => {
    const question = await axios.get(API_URL_USER_ALL);
    return question.data;
  };

export const getUserLimit = async (keyword, page, perPage) => {
  const user = await axios.get(
    API_URL_USER_ALL + `?search=${keyword}&page=${page}&limit=${perPage}`
  );
  return user.data;
};

export const declineUser = async (id) => {
  const user = await axios.delete(API_URL_USER_ALL + id);
  return user.data;
};


export const AddUser = async (user_email,user_password,id,user_name) => {
  const user = await axios.post(API_URL_USER_ALL , { user_email,user_password,user_createdAt,id,user_name });
  return user.data;
};

export const UpdateUser = async (id,user_name,user_password,user_email) => {
  const user = await axios.put(API_URL_USER_ALL + id, {
    user_name,
    user_email,
    user_password,
  });
  return user.data;
};