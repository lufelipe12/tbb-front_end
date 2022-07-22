import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;

  img {
    width: 143px;
    height: 58px;
  }

  @media (min-width: 700px) {
    flex-direction: column-reverse;
  }
`

export const StyledNav = styled.nav`
  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    color: #fff;
    height: 50px;
    padding: 1em;
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: var(--grey);
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 80px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border: none;
    }
    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: var(--blue);
    }
    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }

  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .top-nav {
      background-color: var(--blue);
      width: 100%;
      justify-content: center;
    }
  }
`
export const StyledDiv = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`