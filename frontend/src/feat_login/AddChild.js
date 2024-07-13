import React from "react";
import {Container, Grid, Typography, TextField, Button, Box} from "@mui/material";
import {Link} from "react-router-dom";
import {addchild} from "./api/api-login";

// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function AddChild() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const name = data.get("name");
        const birth = data.get("birth"); 
        const gender = data.get("gender");
        const nickname = data.get("nickname");

        addchild({name: name, birth : birth, gender : gender, nickname : nickname}).then(
            (response) => {
                // 자녀 등록 성공시 챗봇으로 이동
                //window.location.href = "/login";
                window.location.href = "/chatbot";
                //window.location.href = "/selectchild";
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box mt={7}>
                            <Typography component="h2" variant="h5" style={{fontWeight: "bold"}}>
                            <div> 자녀를 </div> 
                            <div> 등록해주세요 </div>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                      닉네임
                    </Typography>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            name = "nickname"
                            placeholder="닉네임을 입력하세요"
                            autoFocus
                            id="nickname"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                      이름
                    </Typography>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            name = "name"
                            placeholder="이름을 입력하세요"
                            autoFocus
                            id="name"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                      생년월일
                    </Typography>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            name = "birth"
                            placeholder="생년월일을 입력하세요"
                            autoFocus
                            id="birth"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                      성별
                    </Typography>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            name = "gender"
                            placeholder="성별을 입력하세요"
                            autoFocus
                            id="gender"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt = {5}>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ fontWeight: "bold" }}
                            sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#D9D9D9", color: "white", boxShadow: 'none' }}
                            color="primary">
                                자녀 등록 하기
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                </Grid>
            </form>
        </Container>
    );
};
export default AddChild;