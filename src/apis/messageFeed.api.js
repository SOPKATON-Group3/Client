import { serverAxios } from "./index";

const PREFIX_URL = "/api/v1";

export const getMessageList = async () => {
  try {
    const { data } = await serverAxios.get(
      `${PREFIX_URL}/letters?isOpened=true&isDeleted=false`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return { data };
  } catch (err) {
    console.log(err);
    return null;
  }
};
