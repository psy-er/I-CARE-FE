import { call } from "../../api/ApiService";

export const getQuestionList = () => {
  return call(`/api/question/list`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postQuestion = (question) => {
    // questionId는 자동 생성
    const questionId = "temporary-questionId";
  return call(`/api/question?questionId=${questionId}`, "POST", question)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}