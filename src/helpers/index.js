import axios from "axios";

// const API_URL = "https://5f892e6d18c33c0016b30683.mockapi.io/";
export const  API_ONE_USERSTORY = "https://5fc709e7f3c77600165d7d5e.mockapi.io/api/v1/user-story/1";
const API_URL = "https://5fc48ee536bc790016343a0b.mockapi.io/";

//get categories
export const getListUsers = async (keyword, page, perPage) => {
    const question = await axios.get(
      API_URL + `users?search=${keyword}&page=${page}&limit=${perPage}  `
    );
    return question.data;
  };
  export const pagListUSers= async () => {
    const question = await axios.get(API_URL + `users`);
    return question.data;
  };
  //get 1 category
  export const getListUSer = async (id) => {
    const question = await axios.get(API_URL + `users/${id}`);
    return question.data;
  };
  //categories delete
  export const DeleteListUser = async (id) => {
    const user = await axios.delete(API_URL + "users/" + id);
    return user.data;
  };
  //categories upadate
  
  export const UpdateListUser = async (id, name, description) => {
    const user = await axios.put(API_URL + "users/" + id, {
      name,
      description,
    });
    return user.data;
  };
  
  //categories post
  
  export const AddListUser = async (name, description) => {
    const user = await axios.post(API_URL + "users", { name, description });
    return user.data;
  };