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
  justify-content: space-between;
  max-width: ${props => props.theme.maxContainer};
  height: calc(100vh - ${props => props.theme.sizes[24]});
  margin: 0 auto;
`;

export const GameInfos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  
  h1 {
    font-size: ${props => props.theme.fontSizes["6xl"]};
    line-height: 4rem;
  }

  p {
    margin-top: ${props => props.theme.sizes[4]};
  }

  button {
    width: 150px;
    justify-content: center;
    margin-top: ${props => props.theme.sizes[10]};
  }
`;


export const GameTrailer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;

    .logo {
      margin-bottom: ${props => props.theme.sizes[40]};
    }

    .trailler {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

        p {
          font-size: ${props => props.theme.fontSizes["sm"]};
          margin-bottom: ${props => props.theme.sizes[2]};  
        }
      }


    .play {
      position: relative;

        .thumbnail {
         width: 280px;
         height: 180px;
        }

      
        div {
            position: absolute;
            left: calc(50% - 25px);
            top: calc(50% - 25px);
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            backdrop-filter: blur(20px);
            backdrop-filter: brightness(50%);
            transition: .2s;
            &:hover {
              backdrop-filter: brightness(20%);
              cursor: pointer;
            }
        }
    }




`;

