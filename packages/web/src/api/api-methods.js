import { api } from "./api-instance";

export function ping(userToken) {
  return api.post(
    "/ping",
    {
      message: "ping",
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    },
  );
}

export function sendContactForm(data, userToken) {
  return api.post(
    "/contact",
    {
      ...data,
    },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    },
  );
}
