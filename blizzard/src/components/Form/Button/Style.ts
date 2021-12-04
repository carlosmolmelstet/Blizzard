import styled from "styled-components";

interface ContainerProps {
    variant: "solid" | "outline";
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    background: ${props => props.variant == "solid" ?
                props.theme.palette.primary.default : 
                "none"};
    color: ${props => props.theme.palette.common.white};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid;
    border-color: ${props => props.variant == "solid" ?
                props.theme.palette.primary.default : 
                props.theme.palette.common.white};
    padding: 10px 25px;
    font-size: 14px;
    transition: .2s;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
        border-color: ${props => props.variant == "solid" ?
                        props.theme.palette.primary.default : 
                        props.theme.palette.primary.light};
        color: ${props => props.variant == "solid" ?
                props.theme.palette.common.white : 
                props.theme.palette.primary.light};
    }

    svg {
        margin-right:  8px;
        width: 14px;
        height: 14px;
    }
`;

