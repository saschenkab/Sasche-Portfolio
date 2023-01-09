import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;

  span {
    font-size: 27px;
    font-weight: 300;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    position: relative;
    background: none;
    cursor: pointer;

    &:hover,
    &:focus {
      font-weight: 400;
      color: #fc5a4e;
    }

    &:focus:after,
    &:hover:after {
      width: 100%;
      left: 0%;
    }

    &:after {
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #fc5a4e;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  position: relative;
  /* margin-top: 5%; */
`;

export const Title = styled.h1`
  font-family: "Milonga", cursive;
  font-size: 200px;
  margin-bottom: 0;

  img {
    width: 25%;
    height: unset;
    object-fit: scale-down;
    position: absolute;
    left: 92%;
    z-index: -1;
  }
`;

export const Description = styled.p`
  font-size: 30px;
  width: 64%;
  text-align: center;
  margin-top: 0;
`;
