import styled from "styled-components"

export const Card = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background-color: var(--white-2);

  img {
    height: 350px;
    margin-bottom: 24px;
  }

  span {
    color: var(--grey);
    line-height: 28px;
    text-align: center;
    width: 290px;
  }

  div {
    height: 50px;
    width: 100%;
    background-color: var(--blue);
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  h3 {
    color: var(--white);
  }
`
