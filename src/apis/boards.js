import axios from "axios";
import qs from "qs";

export function getBoardList(pageNo = 1) {
  return axios.get("/boards", {
    params: { pageNo },
  });
}

export function createBoardNoAttach(board) {
  return axios.post("/boards", board); // JSON으로 값 전달
  // return axios.post('/boards', qs.stringify(board)); // QueryString으로 값 전달하기
}

export function createBoard(multipartFormData) {
  return axios.post("/boards", multipartFormData);
}

export function readBoard(bno) {
  return axios.get("/boards/" + bno);
}

export function deleteBoard(bno) {
  return axios.delete("/boards/" + bno);
}

export function updateBoard(board) {
  return axios.put("/boards", board); //{"btitle":"xxx", "bcontent":"yyy", "bwriter":"zzz"}
}

export function downloadAttach(bno) {
  return axios.get("/boards/battach/" + bno, { responseType: "blob" });
}
