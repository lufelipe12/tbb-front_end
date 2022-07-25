import styled from "styled-components"

export const Card = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 355px;
  border: 3px solid var(--white-2);
  border-radius: 15px;

  img {
    height: 220px;
    width: 100%;
    margin-bottom: 24px;
  }

  span {
    color: var(--grey);
    line-height: 28px;
    text-align: left;
    width: 290px;
  }
`
