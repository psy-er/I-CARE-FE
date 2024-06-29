import { call } from "../../api/ApiService";

const childId = localStorage.getItem("childId");

export const postRequest = (chat) => {
  //const childId = "2c94ce259053420201905360edcc0001";
  return call(`/api/chatbot?childId=${childId}`, "POST", chat)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postChat = () => {
  //const childId = "2c94ce259053420201905360edcc0001";
  return call(`/api/chatbot/feedback?childId=${childId}`, "POST", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const deleteChat = () => {

  //const childId = localStorage.getItem("childId");
  console.log("childId:", childId);
  //const childId = "2c94ce259053420201905360edcc0001";
  call(`/api/chatbot?childId=${childId}`, "DELETE", null)
    .then((response) => { });
}