import React from "react";
import styled from "styled-components";

export default function MyPage(){
    return (
        <StyledMyPage>
            <AddBoard>
                <div>
                    <p>
                        User님의 주식 투자는 어떤가요?
                    </p>
                </div>
            </AddBoard>
        </StyledMyPage>
    )
}
const StyledMyPage = styled.div`
    margin-top : 100px;
`
const AddBoard = styled.div`
    
`