import { ReactChildren, ReactFragment, ReactNode } from "react";
import { Container } from "./Style";

interface ButtonProps {
    variant?: "solid" | "outline";
    children: ReactNode
}
export function Button({ children, variant = "solid" }: ButtonProps) {
    return (
        <Container variant={variant}>
            {children}
        </Container>
    );

}