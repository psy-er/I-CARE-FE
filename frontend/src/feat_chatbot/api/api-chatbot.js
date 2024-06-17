import { call } from "../../api/ApiService";

export const postRequest = (chat) => {
  const childId = "temporary-childId";
  return call(`/api/chatbot?childId=${childId}`, "POST", chat)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postChat = () => {
  const childId = "temporary-childId";
  return call(`/api/chatbot/feedback?childId=${childId}`, "POST", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const deleteChat = () => {
  const childId = "temporary-childId";
  return call(`/api/chatbot?childId=${childId}`, "DELETE", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}