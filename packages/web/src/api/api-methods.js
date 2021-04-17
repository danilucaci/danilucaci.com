import { api } from "./api-instance";

export function ping(userToken) {
  return api.post("ping", {
    headers: {
      Authorization: `Bearer ${userToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      message: "ping",
    }),
  });
}

export function sendContactForm(data, userToken) {
  return api.post("contact", {
    headers: {
      Authorization: `Bearer ${userToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
