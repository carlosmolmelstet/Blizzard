import React, { Dispatch, SetStateAction } from "react";
import { Item, List } from "./Styles";
import Image from 'next/image';
import { games } from "../../../utils/games";

interface SelectGameProps {
    setGame:  Dispatch<SetStateAction<string>>
    activeGame: string;
}

export default function SelectGame({setGame, activeGame} : SelectGameProps) {
    return (
        <List>
            {games.map(game => (
                 <Item key={game.id} onClick={() => setGame(game.id)} active={activeGame == game.id ? true : false }>
                    <Image src={game.imageUrl} width="50px" height="50px" />
                </Item>
            ))}
        </List>
    );
}