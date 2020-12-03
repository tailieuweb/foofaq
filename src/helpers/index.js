import axios from "axios";

const API_URL = "https://5fc48ee536bc790016343a0b.mockapi.io/";
export const getQuestions = async (page, perPage) => {
  const question = await axios.get(
    API_URL + `questions?page=${page}&limit=${perPage}&status=false`
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
