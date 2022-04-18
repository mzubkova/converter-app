import styled from "styled-components";

export const StNavBar = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  top: 0;
  z-index: 2147483000;
  position: sticky;
  background-color: #38a3a5;
`;

export const StNavBarLink = styled.div`
  position: relative;
  color: #fff;
  margin: 0 20px;
  font-size: 18px;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -2px;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const StNavBarItems = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  .active {
    ${StNavBarLink} {
      color: #22577A;

    &:hover:after {
      display: none;
    }
  }
`;
