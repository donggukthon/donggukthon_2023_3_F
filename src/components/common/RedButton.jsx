import React from 'react';
import styled from 'styled-components';

function RedButton(props) {
  return (
    <RedColorButton onClick={props.onClickFunc}>{props.children}</RedColorButton>
  );
}

const RedColorButton = styled.button`
  width: 250px;
  height: 45px;
  background: var(--button-bg-color, #ed3333);
  border: none;
  border-radius: 15px;
  font-family: "Godo", sans-serif;
  font-size: 17px;
  color: white;
  margin: auto;
  box-shadow: 3px 3px 3px 0px gray;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:active,
  &:hover {
    opacity: 100%;
  }

  // 고도체
  @font-face {
    font-family: "Godo";
    font-style: normal;
    font-weight: 700;
    src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff") format("woff");
  }
`;

export default RedButton;