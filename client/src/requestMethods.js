import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ5M2ZhNTE2NGI1YmU0ZWVlYzllZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzUyNjgyMSwiZXhwIjoxNjczNzg2MDIxfQ.75nihFZ-QAEPtrAlGLhxChy-gghUakOET6bu84yLmLM";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
