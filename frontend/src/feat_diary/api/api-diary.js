import { call } from "../../api/ApiService";

export const getDiaryList = (startDate, endDate) => {
  const childId = "temporary-childId";
  return call(`/api/diary/list?childId=${childId}&start=${startDate}&end=${endDate}`, "GET", null)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const postDiary = (diary) => {
  const childId = "temporary-childId";
  return call(`/api/diary?childId=${childId}`, "POST", diary)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const putDiary = (diary) => {
  const childId = "temporary-childId";
  return call(`/api/diary?childId=${childId}`, "PUT", diary)
    .then((response) => {
      if(response) {
        return response;
      }
    });
}

export const deleteDiary = (diary) => {
  const childId = "temporary-childId";
  return call(`/api/diary?childId=${childId}`, "DELETE", diary)
    .then((response) => {
      if(response) {
        return response;
      }
    })
}