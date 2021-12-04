import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContainer};
  height: ${props => props.theme.sizes[24]};
  color: ${props => props.theme.palette.neutral[700]};

  
  &::after {
    content: "";
    width: 40px;
    height: 2px;
    background: ${props => props.theme.palette.primary.light};;
    position: absolute;
    top: ${props => props.theme.sizes[24]};
  }

`;

export const Menu = styled.div`
  display:flex; 
  align-items: center;

  ul {  
    display:flex; 
    align-items: center;
    margin-left: ${props => props.theme.sizes[12]};
    list-style: none;
    li {
      margin: 0 ${props => props.theme.sizes[4]};
      color: ${props => props.theme.palette.common.white};
      transition: .2s;
      
      svg {
        margin-left: ${props => props.theme.sizes[2]};
        transition: .2s;
      }

      &:hover {
          cursor: pointer;
          color: ${props => props.theme.palette.primary.default};

          svg path {
            stroke: ${props => props.theme.palette.primary.default};
            opacity: 1;
          }
      }
    }
    }
`;


export const Login = styled.div`
  display: flex;

  button + button {
    margin-left: ${props => props.theme.sizes[4]};
  }
`;

export const Border = styled.div`
  width: 100vw;
  background: red;
  position: absolute;
  top: ${props => props.theme.sizes[24]};
  left: 0;
  border-bottom: 2px solid ${props => props.theme.palette.common.white};
  opacity: .1;
`;