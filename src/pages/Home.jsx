import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <StyledP>현재 인기 종목</StyledP>
      <RefreshButton>새로고침</RefreshButton>
      <DesContainer>
        <Description>종목명</Description>
        <Description>현재가</Description>
        <Description>시가총액</Description>
        <Description>거래량/거래대금</Description>
      </DesContainer>
      <ListContainer>
        <List>
          <ListItemContainer>
            <ListItem>테스트</ListItem>
            <ListItem margin="120px">테스트</ListItem>
            <ListItem margin="125px">테스트</ListItem>
            <ListItem margin="160px">테스트</ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>테스트</ListItem>
            <ListItem margin="120px">테스트</ListItem>
            <ListItem margin="125px">테스트</ListItem>
            <ListItem margin="160px">테스트</ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>테스트</ListItem>
            <ListItem margin="120px">테스트</ListItem>
            <ListItem margin="125px">테스트</ListItem>
            <ListItem margin="160px">테스트</ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>테스트</ListItem>
            <ListItem margin="120px">테스트</ListItem>
            <ListItem margin="125px">테스트</ListItem>
            <ListItem margin="160px">테스트</ListItem>
          </ListItemContainer>
        </List>
      </ListContainer>
    </StyledHome>
  );
}
const ListItem = styled.p`
  width: 240px;
  text-align: center;
  margin-left: ${(props) => props.margin || "0px"};
`;
const StyledHome = styled.div`
  margin-top: 100px;
`;
const StyledP = styled.p`
  width: auto;
  height: 80px;
  line-height: 80px;
  font-size: 22px;
  padding-left: 75px;
`;
const RefreshButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid;
  margin-left: 75px;
`;

const Description = styled.div`
  height: auto;
  line-height: 50px;
`;
const DesContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const List = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  border : black 1px solid;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ListItemContainer = styled.div`
  display: flex;
  border-bottom : 1px solid;
`;
