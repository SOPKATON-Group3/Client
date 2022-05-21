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
// export const postNewMessage = async () => {
//   try {
//     const { data } = await serverAxios.get(`${PREFIX_URL}/add`);
//     return { data };
//   } catch (err) {

//     return null;
//   }
// };
