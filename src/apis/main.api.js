import { serverAxios } from "./index";

const PREFIX_URL = "/api/v1";

export const postMessage = async () => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/modify`, {
      isOpened: true,
      isDeleted: false,
    });
    return { data };
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const postNewMessage = async (body) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/add`, {
      nickname: body.nickname,
      contents: body.contents,
    });
    return { data };
  } catch (err) {
    console.log(err);
    return null;
  }
};
