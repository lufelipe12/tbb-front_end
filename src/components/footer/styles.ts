import styled from "styled-components"

export const StyledFooter = styled.footer`
  padding: 15px;
  background-color: var(--blue);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

  li {
    width: 128px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  hr {
    background-color: var(--white);
    width: 24px;
    height: 2px;
    border: none;
  }

  @media (min-width: 768px) {
    height: 242px;

    ul {
      flex-direction: row;
    }

    hr {
      width: 1px;
      height: 24px;
    }
  }
`

export const StyledDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  height: 170px;

  img:nth-child(2) {
    width: 116px;
    height: 29px;
  }

  img:nth-child(2) {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`
