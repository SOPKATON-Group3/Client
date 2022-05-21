import { serverAxios } from "./index";

const PREFIX_URL = "/api/v0";

export const postNewMessage = async () => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/add`);
    return { data };
  } catch (err) {
    return null;
  }
};
