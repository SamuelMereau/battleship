import Head from 'next/head';
import Footer from '../../components/Footer'
import styles from '../../styles/Game.module.css'
import { useState } from 'react';

import StartRow from '../../components/Game/Rows/StartRow';
import MiddleRow from '../../components/Game/Rows/MiddleRow';
import MineRow from '../../components/Game/Rows/MineRow';
import LetterRow from '../../components/Game/Rows/LetterRow';
import NoScript from '../../components/NoScript';

export default function Game() {
    const [selectedTeam, setSelectedTeam] = useState('blue');

    return (
        <>
            <Head>
                <title>Battleship Game</title>  
                <NoScript/>
            </Head>
            <main>
                <div className={styles.boardGrid}>
                    <MineRow team={selectedTeam}/>
                    <spacer/>
                    <MiddleRow team={selectedTeam}/>
                    <spacer/>
                    <spacer/>
                    <StartRow team={selectedTeam}/>
                    <spacer/>
                    <LetterRow team={selectedTeam}/>
                </div>
            </main>
            <Footer/>
        </>
    );
}