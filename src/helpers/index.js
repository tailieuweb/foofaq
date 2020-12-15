import axios from "axios";

const API_URL = "https://5fc48ee536bc790016343a0b.mockapi.io/";
const API_URL_NEW = "https://5fc9a56e3c1c220016440eab.mockapi.io/";
export const  API_ONE_USERSTORY = "https://5fc709e7f3c77600165d7d5e.mockapi.io/api/v1/user-story/1";
export const getQuestions = async (
  keyword,

  status
) => {
  const question = await axios.get(
    API_URL + `questions?search=${keyword}&${status}`
  );
  return question.data;
};
//get all question

export const getAllQuestions = async (keyword, page, perPage) => {
  const question = await axios.get(
    API_URL + `questions?search=${keyword}&page=${page}&limit=${perPage}`
  );
  return question.data;
};
//get all question status=false
export const allQuestion = async () => {
  const question = await axios.get(API_URL + `questions?status=false`);
  return question.data;
};

export const getAllQuesiton = async (keyword) => {
  const question = await axios.get(API_URL + `questions?search=${keyword}`);
  return question.data;
};

export const getQuesitonById = async (id) => {
  const question = await axios.get(API_URL + `questions/${id}`);
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

//get categories
export const getCategories = async (keyword, page, perPage) => {
  const question = await axios.get(
    API_URL + `categories?search=${keyword}&page=${page}&limit=${perPage}  `
  );
  return question.data;
};
export const pagCategories = async () => {
  const question = await axios.get(API_URL + `categories`);
  return question.data;
};
//get 1 category
export const getCategory = async (id) => {
  const question = await axios.get(API_URL + `categories/${id}`);
  return question.data;
};
//categories delete
export const DeleteCategory = async (id) => {
  const user = await axios.delete(API_URL + "categories/" + id);
  return user.data;
};
//categories upadate

export const UpdateCategory = async (id, name, description) => {
  const user = await axios.put(API_URL + "categories/" + id, {
    name,
    description,
  });
  return user.data;
};

//categories post

export const AddCategory = async (name, description) => {
  const user = await axios.post(API_URL + "categories", { name, description });
  return user.data;
};
//Jobs
export const getJobs = async (keyword, page, perPage) => {
  const res = await axios.get(
    API_URL_NEW + `jobs?search=${keyword}&page=${page}&limit=${perPage}`
  );
  return res.data;
};

export const getJobsSearch = async (keyword) => {
  const res = await axios.get(API_URL_NEW + `jobs?search=${keyword}`);
  return res.data;
};
//GET ALL JOBS FOR PAGINATION
export const pagJobs = async () => {
  const res = await axios.get(API_URL_NEW + `jobs`);
  return res.data;
};
export const getJob = async (id) => {
  const res = await axios.get(API_URL_NEW + "jobs/" + id);
  return res.data;
};
export const deleteJob = async (id) => {
  const res = await axios.delete(API_URL_NEW + "jobs/" + id);
  return res.data;
};

export const addJobs = async (
  id,
  name,
  description,
  type,
  area,
  company,
  experience,
  role
) => {
  const res = await axios.post(API_URL_NEW + "jobs", {
    name,
    description,
    type,
    area,
    company,
    experience,
    role,
  });
  return res.data;
};
export const updateJobs = async (
  id,
  name,
  description,
  type,
  area,
  company,
  experience,
  role
) => {
  const res = await axios.put(API_URL_NEW + "jobs/" + id, {
    name,
    description,
    type,
    area,
    company,
    experience,
    role,
  });
  return res.data;
};

//Event
export const getEvents = async (keyword, page, perPage) => {
  const res = await axios.get(
    API_URL_NEW + `events?search=${keyword}&page=${page}&limit=${perPage}`
  );
  return res.data;
};
export const getEventsSearch = async (keyword) => {
  const res = await axios.get(API_URL_NEW + `events?search=${keyword}`);
  return res.data;
};
//getAllEvent
export const pagEnvent = async () => {
  const res = await axios.get(API_URL_NEW + `events`);
  return res.data;
};

export const getEvent = async (id) => {
  const res = await axios.get(API_URL_NEW + "events/" + id);
  return res.data;
};
export const deleteEvent = async (id) => {
  const res = await axios.delete(API_URL_NEW + "events/" + id);
  return res.data;
};
export const addEvent = async (name, image, date, description) => {
  const res = await axios.post(API_URL_NEW + "events", {
    name,
    image,
    date,
    description,
  });
  return res.data;
};
export const updateEvent = async (id, name, image, date, description) => {
  const res = await axios.put(API_URL_NEW + "events/" + id, {
    name,
    image,
    date,
    description,
  });
  return res.data;
};

export const getAnswers = async (questionId) => {
  const answers = await axios.get(API_URL + `questions/${questionId}/answers`);
  return answers.data;
};

export const addAnswers = async (questionId, content) => {
  const answer = await axios.post(API_URL + `questions/${questionId}/answers`, {
    questionId,
    content,
  });
  return answer.data;
};
