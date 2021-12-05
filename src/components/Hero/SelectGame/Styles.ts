import styled from "styled-components";


export const List = styled.div`
    display: flex;
    flex-direction: column;


    @media(max-width: 1140px) {
      flex-direction:row;
      position: absolute;
      bottom: ${props => props.theme.sizes[16]};
    }
`;


interface ItemProps {
  active: boolean;
}

export const Item = styled.div<ItemProps>`
    margin: ${props => props.theme.sizes[4]} 0;
    
    filter: ${props => props.active ? "grayscale(0%)" : "grayscale(100%)"} ;
    transition: .2s;
    &:hover {
      filter: grayscale(0%);
      cursor: pointer;
    }

    @media(max-width: 1140px) {
      margin: 0 ${props => props.theme.sizes[4]};

    }
`;


