import styled from "styled-components";

interface ContainerProps {
  backgroundUrl: string;
}
export const Container = styled.div<ContainerProps>`
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  &::after {
    content: "";
    width: 25%;

    height: 2px;
    background: ${props => props.theme.palette.primary.default};;
    position: absolute;
    bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: ${props =>  props.theme.maxContainer};
  height: calc(100vh - ${props => props.theme.sizes[24]});
  margin: 0 auto;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;

   
    img {
      filter: grayscale(100%);
      transition: .2s;
      &:hover {
        filter: grayscale(0%);
        cursor: pointer;
      }
    }
`;


export const ListItem = styled.div`
    margin: ${props => props.theme.sizes[4]} 0;
`;


