import React from "react";
import { Container, Menu, Login, Border, MenuSmall } from "./Style";
import Image from "next/image";

import BlizzardLogo from '../../../public/assets/blizzardLogo.svg';
import up from '../../../public/assets/icons/up.svg';
import dowm from '../../../public/assets/icons/down.svg';
import { Button } from "../Form/Button/Index";

export default function Navbar() {
    return (
        <Container>
            <Menu>
                <Image src={BlizzardLogo} width="116px" />
                <ul>
                    <li>
                        Jogos
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" />
                        </svg>
                    </li>
                    <li>
                        Esports
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" />
                        </svg>

                    </li>
                    <li>Loja</li>
                    <li>Notícias</li>
                    <li>Suporte</li>
                </ul>
            </Menu>
            <Login>
                <Button variant="outline">Criar conta</Button>
                <Button>
                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5399 15.9664L13.1828 15.0695C13.0022 14.6145 12.7217 14.2064 12.3625 13.8737L12.2972 13.8136C11.732 13.2891 10.9892 12.9973 10.2179 12.9973H5.10209C4.33075 12.9973 3.58798 13.2891 3.02171 13.8125L2.95641 13.8737C2.59727 14.2064 2.31771 14.6145 2.1361 15.0695L1.77899 15.9664" stroke="white" strokeWidth="1.77404" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.1849 2.81998C11.5795 4.21456 11.5795 6.47561 10.1849 7.87019C8.79037 9.26477 6.52932 9.26477 5.13474 7.87019C3.74016 6.47561 3.74016 4.21456 5.13474 2.81998C6.52932 1.4254 8.79037 1.4254 10.1849 2.81998" stroke="white" strokeWidth="1.77404" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Logar
                </Button>
            </Login>
            <MenuSmall>
                    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H28" stroke="white" strokeWidth="1.5" />
                        <path d="M0 10.3334H28" stroke="white" strokeWidth="1.5" />
                        <path d="M0 19.6666H28" stroke="white" strokeWidth="1.5" />
                    </svg>
                </MenuSmall>
            <Border />
        </Container>
    );
}