import { API_BASE_URL } from "./api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if(accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }


  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if(request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options).then((response) => {
    if(response.status === 200) {
      if(response.url.includes("image")) {
        return response.blob().then(blob => {
          const reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        });
      } else {
        return response.json();
      }
    } else if(response.status === 403) {
      window.location.href = "/login"; // redirect
    } else {
      Promise.reject(response);
      throw Error(response);
    }
  }).catch((error) => {
    console.log("http error");
    console.log(error);
  });

}