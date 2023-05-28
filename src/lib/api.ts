import axios from "axios";

export const getUser = async () => {
  const res = await axios.get("/api/me");
  return res.data;
};
