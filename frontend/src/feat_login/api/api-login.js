import { call } from "../../api/ApiService";

// 스플래시 -> 로그인 -> 회원가입 -> 자녀 등록 -> 로그인 -> 자녀 선택 -> 챗봇 순서

export function signin(userDTO) {
    return call("/api/parent/login", "POST", userDTO)
        .then((reponse) => {
            if( reponse.token ) {
                localStorage.setItem("ACCESS_TOKEN", reponse.token);
                //localStorage.setItem("childId",)
                window.location.href = "/selectchild"; 
            }
        });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/api/parent/signup", "POST", userDTO);
}

export function addchild(userDTO){
    return call("/api/child", "POST", userDTO);
}

export function selectchild(){
    return call("/api/child/list", "GET" )
}