import axios from "axios";

const API_URL = "https://5fc9a56e3c1c220016440eab.mockapi.io/";
export const allJob = async () => {
  const job = await axios.get(API_URL + `jobs`);
  return job.data;
};

export const allEvent = async () => {
  const event = await axios.get(API_URL + `events`);
  return event.data;
};
