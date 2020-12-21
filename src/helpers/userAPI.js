import axios from "axios";
const API_URL_USER_ALL =
  "https://5fc4b01136bc790016343d03.mockapi.io/api/v1/users/";
//get all question
export const getAllUser = async () => {
    const question = await axios.get(API_URL_USER_ALL);
    return question.data;
  };

