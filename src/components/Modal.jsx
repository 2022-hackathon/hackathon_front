import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "..";

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function onSub(e) {
    e.preventDefault();
    const form = {
      title: title,
      content: content,
      id: 1234,
    };
    console.log(form)
    axios
      .post("http://192.168.154.124:8080/addboard", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <StyledModal>
      <Popup>
        <div className="head">
          <p>게시물 작성</p>
          <button
            onClick={() => {
              setModal(false);
              console.log(modal);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <form onSubmit={onSub}>
            <input
              type="text"
              placeholder="제목을 입력해주세요!"
              className="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows="18"
              cols="25"
              placeholder="내용을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" value="글쓰기" className="sub"></input>
          </form>
        </div>
      </Popup>
    </StyledModal>
  );
}
const StyledModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  margin-top: 90px;
  position: absolute;
  z-index: 2;
`;

const Popup = styled.div`
  width: 800px;
  height: 550px;
  box-shadow: 2px 2px #979797;
  border: 1px solid;
  border-radius: 20px;
  .head {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px #979797;
  }
  .head button {
    margin-left: 700px;
    border-radius: 99999px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #bac8ff;
    color: #4263eb;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .head p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .body .title {
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid;
    margin-top: 30px;
    width: 700px;
    height: 50px;
  }
  textarea {
    padding-top: 20px;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid;
    width: 690px;
  }
  .sub {
    margin-top: 25px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid;
  }
`;
