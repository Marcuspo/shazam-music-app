import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const BadgeInicial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Cards = styled.div`
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 180px;
  margin: 50px;
  min-width: 190px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  p {
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: "Mulish", sans-serif;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
  }
`
export const ImageCard = styled.image`
  width: 100%;
  height: 100%;
`
