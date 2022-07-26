import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: 0px 4px 16px var(--white-2);

  img {
    width: 143px;
    height: 58px;
  }

  @media (min-width: 768px) {
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

  a {
    color: var(--white);
    text-decoration: none;
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

  .menu-desktop {
    display: none;
  }

  @media (max-width: 767px) {
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
      align-items: center;
    }

    #menu-toggle:checked ~ .menu li {
      height: 2.5em;
      padding: 35px;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border: none;
    }

    .menu > li {
      display: flex;
      justify-content: flex-start;
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

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu {
      display: none;
    }

    .menu-desktop {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60%;
      height: 50px;
      justify-content: space-around;
    }

    li {
      display: flex;
      align-items: center;
    }

    .arrow {
      margin-left: 5px;
    }

    .dropbtn {
      color: white;
      border: none;
      background-color: var(--blue);
      display: flex;
      align-items: center;
      height: 50px;
    }

    .dropdown {
      position: absolute;
      display: inline-block;
      width: 100%;
      left: 0;
      top: 100%;
      z-index: 1;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #9d8e8e;
      min-width: 160px;
      height: 48px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      width: 100%;
    }

    .dropdown-content a {
      color: var(--white);
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    li:hover .dropdown-content {
      display: flex;
      justify-content: space-evenly;
    }

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

  .icon:hover {
    cursor: pointer;
  }
`
