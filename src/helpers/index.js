import axios from "axios";

const API_URL = "https://5fc48ee536bc790016343a0b.mockapi.io/";
const API_USERS = "https://5fd6c88eea55c4001604235c.mockapi.io/project-demo/users/1";

// User
export const getUserOne = async () => {
  const users = await axios.get(
    API_USERS);
  return users.data;
};
// 


export const getQuestions = async (page, perPage,keyword) => {
  const question = await axios.get(
    API_URL +
      `questions?search=${keyword}&page=${page}&limit=${perPage}&status=false`
  );
  return question.data;
};
export const allQuestion = async () => {
  const question = await axios.get(API_URL + `questions?status=false`);
  return question.data;
};
export const approveQuestion = async (id, status) => {
  const quetionApproval = await axios.put(API_URL + `questions/${id}`, {
    status: status,
  });
  return quetionApproval.data;
};
export const questionApprovalDetail = async (id) => {
  const questionApprovalDetail = await axios.get(API_URL + "questions/" + id);
  return questionApprovalDetail.data;
};
export const declineQuestion = async (id) => {
  const user = await axios.delete(API_URL + "questions/" + id);
  return user.data;
};
