import { API_BASE_URL } from "./api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if(accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
<<<<<<< HEAD
  }
=======
  }*/
  headers.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsc2EiLCJpc3MiOiJzb2NpYWwgTG9naW4iLCJpYXQiOjE3MTY4OTQ2MjgsImV4cCI6MTcxNjk4MTAyOCwiaWQiOiI0MDI4ODA4NjhmYmVlNGMwMDE4ZmJlZTRlNDUxMDAwMCJ9.PNna4CSiNGf8C13vKrmC1tZMFtRJKC9Rnr6AIUm790C6nMrEVE9YItoQCMZhW9SWzfiIw6p-iqPfCVh_HPK_0A");
>>>>>>> 7574bed3553c7e6fb5e34a1213bd05dcad9d03b6

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