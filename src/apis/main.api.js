import { serverAxios } from "./index";

const PREFIX_URL = "/api/v1";

export const postMessage = async () => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/modify`, {
      //   headers: {
      //     Accept: "application/json",
      //   },
    });
    return { data };
  } catch (err) {
    console.log(err);
  }
};
export const postNewMessage = async () => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/add`);
    return { data };
  } catch (err) {
    return null;
  }
};
