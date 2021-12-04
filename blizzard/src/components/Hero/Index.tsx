import React, { useState } from "react";
import Navbar from "../Navbar/Index";
import { Container, Wrapper, List, ListItem } from "./Styles";
import Image from "next/image";

import diablo4 from '../../../public/assets/diablo4.svg';
import hearthstone from '../../../public/assets/hearthstone.svg';
import wow from '../../../public/assets/wow.svg';
import diablo from '../../../public/assets/diablo1.svg';
import starCraft2 from '../../../public/assets/starCraft2.svg';


export default function Hero() {
    const [backgroundUrl, setBackgroundUrl] = useState('./assets/bannerDiablo.png');

    function changeGame(gameUrl : string) {
        setBackgroundUrl(gameUrl);
    }

    return (
        <Container backgroundUrl={backgroundUrl}>
            <Navbar />
            <Wrapper>
                <List>
                    <ListItem onClick={() => changeGame("./assets/bannerDiablo.png")}>
                        <Image src={diablo4} height="50px" />
                    </ListItem>
                    <ListItem onClick={() => changeGame("./assets/bannerHearthstone.png")}>
                        <Image src={hearthstone} height="50px" />
                    </ListItem>
                    <ListItem onClick={() => changeGame("./assets/bannerWow.png")}>
                        <Image src={wow} height="50px" />
                    </ListItem>
                    <ListItem onClick={() => changeGame("./assets/bannerDiablo.png")}>
                        <Image src={diablo} height="50px" />
                    </ListItem>
                    <ListItem onClick={() => changeGame("./assets/bannerHearthstone.png")}>
                        <Image src={starCraft2} height="50px" />
                    </ListItem>
                </List>
            </Wrapper>
        </Container>
    );
}