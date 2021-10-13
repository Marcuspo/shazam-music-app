import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const NavBar = styled.h1`
  width: 100%;
  height: 91px;
  background-color: #6324c6;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`

export const TextNav = styled.span`
  font-family: "Mulish", sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-style: normal;
  font-size: 36px;
  line-height: 45px;
`
export const ContainerInput = styled.div`
  width: 90%;

  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-top: 5%;
  color: black;
`
export const Musicas = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
`

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');  
  html, body {
    font-family: Mulish, sans-serif;
    font-size: 17px;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
  }
`
