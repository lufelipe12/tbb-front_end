import styled from "styled-components"

export const Card = styled.div`
  margin: 0px 16px;
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
  }

  h3 {
    color: var(--white);
  }
`

interface CardProps {
  type: string
}

export const TypeDiv = styled.div<CardProps>`
  height: 50px;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  ${(props) => {
    if (props.type === "wellness") {
      return `
      background-color: var(--blue);
    `
    } else if (props.type === "active") {
      return `
      background-color: var(--green);
    `
    } else {
      return `
        background-color: var(--pink);
    `
    }
  }};
`
