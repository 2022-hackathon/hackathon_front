import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "..";
import Modal from "../components/Modal";

export default function MyPage() {
  const [modal, setModal] = useRecoilState(modalState);
  console.log(modal);
  return (
    <StyledMyPage>
      <AddBoard onClick={() => setModal(true)}>
        <div className="adddiv">
          <p className="addp">User님의 주식 투자는 어떤가요? </p>
        </div>
      </AddBoard>
      {modal === true ? <Modal /> : null}
    </StyledMyPage>
  );
}
const StyledMyPage = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const AddBoard = styled.div`
  width: 800px;
  height: 170px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 2px 2px #979797;
  .addp {
    width: 700px;
    margin-top: 20px;
    border-radius: 40px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    border: solid 1px;
    background-color: #ebebeb;
  }
  .adddiv {
    height: 90px;
    border-bottom: 1px solid;
  }
`;
