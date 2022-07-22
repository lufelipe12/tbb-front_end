import styled from "styled-components"

export const Card = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 355px;
  background-color: var(--white-2);

  img {
    height: 230px;
    margin-bottom: 24px;
  }

  span {
    color: var(--grey);
    line-height: 28px;
    text-align: left;
    width: 290px;
  }
`
