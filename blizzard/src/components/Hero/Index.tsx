import React, { useState } from "react";
import Image from 'next/image';
import { games } from "../../utils/games";
import { Button } from "../Form/Button/Index";
import Navbar from "../Navbar/Index";
import SelectGame from "./SelectGame/SelectGame";
import { Container, Wrapper, GameInfos, GameTrailer } from "./Styles";


export default function Hero() {
    const [game, setGame] = useState(games[0]);

    function getGameById(id: string) {
        setGame(games.find(x => x.id === id));
    }


    return (
        <Container backgroundUrl={game.backgroundUrl}>
            <Navbar />
            <Wrapper>
                <SelectGame setGame={getGameById} activeGame={game.id} />
                <GameInfos>
                    <h1>{game.title}</h1>
                    <p>{game.description}</p>
                    <Button>Jogue Agora</Button>
                </GameInfos>
                <GameTrailer>
                    <img className="logo" src={game.logoUrl} />
                    <div className='trailler'>
                        <p>ASSISTIR AGORA</p>
                        <div className="play">
                            <img className='thumbnail' src={game.thumbnailUrl} />
                            <div>
                                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2539 9.49999L0.552414 0.74626L0.552415 18.2537L14.2539 9.49999Z" fill="#00AEFF" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </GameTrailer>
            </Wrapper>
        </Container >
    );
}