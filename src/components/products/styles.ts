import styled from "styled-components"

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  @media (min-width: 1024px) {
    overflow-x: hidden;
    justify-content: center;
  }
`
