import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${props => props.theme.maxContainer};
  padding: 0 ${props => props.theme.sizes[16]};
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


  @media(max-width: 700px) {
    padding: 0 ${props => props.theme.sizes[4]};
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
    @media(max-width: 1140px) {
     display: none;
  }
}`;


export const Login = styled.div`
  display: flex;
  align-items: center;
  button + button {
    margin-left: ${props => props.theme.sizes[4]};
  }

  @media(max-width: 1140px) {
    margin-right: ${props => props.theme.sizes[24]};
  }

  @media(max-width: 700PX) {
    display: none;
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

export const MenuSmall = styled.div`
  display: none;
  position: absolute;
  right: ${props => props.theme.sizes[24]};

  @media(max-width: 1140px) {
     display: flex;
  }

  @media(max-width: 700px) {
    right: ${props => props.theme.sizes[4]};
  }
`