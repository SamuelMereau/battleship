import Head from 'next/head';
import Footer from '../../Components/Footer'
import styles from '../../styles/Game.module.css'
import { useState } from 'react';

import StartRow from '../../Components/Game/Rows/StartRow';
import MiddleRow from '../../Components/Game/Rows/MiddleRow';
import MineRow from '../../Components/Game/Rows/MineRow';
import LetterRow from '../../Components/Game/Rows/LetterRow';

export default function Game() {
    const [selectedTeam, setSelectedTeam] = useState('blue');

    return (
        <>
            <Head>
                <title>Battleship Game</title>  
            </Head>
            <div className={styles.boardGrid}>
                <MineRow team={selectedTeam}/>
                <spacer/>
                <MiddleRow team={selectedTeam}/>
                <spacer/>
                <spacer/>
                <StartRow team={selectedTeam}/>
                <spacer/>
                <LetterRow team={selectedTeam} letter={'A'}/>
            </div>
            <Footer/>
        </>
    );
}