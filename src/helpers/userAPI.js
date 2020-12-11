import axios from "axios";
const API_URL_USER_ALL =
  "https://5fc4b01136bc790016343d03.mockapi.io/api/v1/users/";
const API_URL_ONE_USER =
  "https://5fc4b01136bc790016343d03.mockapi.io/api/v1/users/1";
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
// get one user
export const getOneUser = async () => {
  const data = await axios.get(API_URL_ONE_USER);
  return data.data;
};
// post update user
export const updateUser = async (id,dataUpdate) => {
  const data = await axios.put(API_URL_USER_ALL + id, dataUpdate);
  return data.data;
};
